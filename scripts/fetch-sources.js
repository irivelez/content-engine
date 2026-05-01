/**
 * Content Engine — Source Fetcher
 *
 * Fetches raw AI content from X/Twitter, Hacker News, RSS, and Reddit.
 * No AI calls — just HTTP + bird CLI. Rule-based filtering only.
 * Pushes raw JSON directly to github.com/irivelez/the-feed/daily/ via Contents API.
 * Nothing is written to the local filesystem.
 *
 * Run: npm run fetch
 * Schedule: launchd plist runs this daily
 */

import 'dotenv/config';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { execFile } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CONFIG_FILE = join(ROOT, 'input', 'discovery-config.json');
const LOCAL_DAILY_DIR = join(ROOT, 'input', 'daily');

const GH_OWNER = 'irivelez';
const GH_REPO = 'the-feed';
const GH_BRANCH = 'main';

const MAX_AGE_DAYS = 3;

// ============ HELPERS ============

function isRecent(dateStr) {
  if (!dateStr) return false;
  try {
    const pubDate = new Date(dateStr);
    if (isNaN(pubDate.getTime())) return false;
    return pubDate.getTime() >= Date.now() - MAX_AGE_DAYS * 86400000;
  } catch { return false; }
}

function formatAge(dateStr) {
  try {
    const ms = Date.now() - new Date(dateStr).getTime();
    if (ms < 0) return '0h';
    const hours = Math.floor(ms / 3600000);
    if (hours < 24) return `${Math.max(1, hours)}h`;
    return `${Math.floor(hours / 24)}d`;
  } catch { return null; }
}

async function loadConfig() {
  try { return JSON.parse(await readFile(CONFIG_FILE, 'utf-8')); }
  catch { console.error('Missing discovery-config.json'); process.exit(1); }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ============ GITHUB CONTENTS API ============

async function putToGitHub(path, content) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN missing from .env');

  const url = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${path}`;
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  let sha;
  const existing = await fetch(url, { headers });
  if (existing.ok) {
    sha = (await existing.json()).sha;
  } else if (existing.status !== 404) {
    throw new Error(`GET ${path} failed: ${existing.status} ${await existing.text()}`);
  }

  const body = {
    message: sha ? `fetch: update ${path}` : `fetch: create ${path}`,
    content: Buffer.from(content).toString('base64'),
    branch: GH_BRANCH,
    ...(sha && { sha }),
  };

  const res = await fetch(url, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`PUT ${path} failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

// ============ FETCH: X via bird CLI ============

async function searchX(query, count = 10) {
  const token = process.env.BIRD_AUTH_TOKEN;
  const ct0 = process.env.BIRD_CT0;
  if (!token || !ct0) return [];

  try {
    const args = ['search', query, '--count', String(count), '--json', '--auth-token', token, '--ct0', ct0];
    const result = await new Promise((resolve, reject) => {
      execFile('bird', args, { timeout: 30000, maxBuffer: 5 * 1024 * 1024 }, (err, stdout) => {
        if (err) return reject(err);
        resolve(stdout);
      });
    });
    const tweets = JSON.parse(result);
    return tweets.map(t => {
      const likes = t.likeCount || 0;
      const retweets = t.retweetCount || 0;
      const replies = t.replyCount || 0;
      return {
        title: (t.text || '').slice(0, 120),
        content: t.text || '',
        author: `@${t.author?.username || 'unknown'}`,
        url: t.author?.username ? `https://x.com/${t.author.username}/status/${t.id}` : '',
        likes,
        comments: replies,
        retweets,
        views: t.viewCount || 0,
        engagementScore: likes + retweets * 3 + replies * 2,
        source: 'x',
        publishedAt: t.createdAt || t.created_at || t.timeParsed || null,
      };
    });
  } catch (e) { console.error(`  X error "${query}":`, e.message); return []; }
}

// ============ FETCH: Hacker News ============

async function fetchHN(limit = 20) {
  const aiKeywords = ['ai', 'llm', 'gpt', 'claude', 'anthropic', 'openai', 'machine learning',
    'neural', 'transformer', 'agent', 'copilot', 'coding assistant', 'chatbot', 'gemini',
    'diffusion', 'prompt', 'fine-tun', 'rag', 'vector', 'embedding', 'automation', 'deepseek',
    'multi-agent', 'agentic'];
  try {
    const topIds = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', { signal: AbortSignal.timeout(10000) }).then(r => r.json());
    const stories = [];
    for (const id of topIds.slice(0, 60)) {
      try {
        const item = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, { signal: AbortSignal.timeout(5000) }).then(r => r.json());
        if (!item?.title) continue;
        if (aiKeywords.some(kw => item.title.toLowerCase().includes(kw)) && item.score >= 30) {
          const score = item.score;
          const comments = item.descendants || 0;
          stories.push({
            title: item.title,
            content: item.title + (item.text ? '\n' + item.text : ''),
            author: item.by || 'unknown',
            url: item.url || `https://news.ycombinator.com/item?id=${id}`,
            likes: score,
            comments,
            engagementScore: score + comments * 2,
            source: 'hackernews',
            publishedAt: item.time ? new Date(item.time * 1000).toISOString() : null,
          });
        }
        if (stories.length >= limit) break;
      } catch { continue; }
    }
    return stories;
  } catch (e) { console.error('  HN error:', e.message); return []; }
}

// ============ FETCH: RSS ============

async function fetchRSS(feedUrl, sourceName) {
  try {
    const resp = await fetch(feedUrl, { headers: { 'User-Agent': 'ContentEngine/2.0' }, signal: AbortSignal.timeout(15000) });
    if (!resp.ok) return [];
    const xml = await resp.text();
    const items = [];
    const matches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g), ...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    for (const match of matches.slice(0, 10)) {
      const block = match[1];
      const title = block.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]?.replace(/<!\[CDATA\[(.*?)\]\]>/, '$1')?.trim() || '';
      const link = block.match(/<link[^>]*href="([^"]*)"/) ?.[1] || block.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() || '';
      const desc = block.match(/<description[^>]*>([\s\S]*?)<\/description>/)?.[1]?.replace(/<!\[CDATA\[(.*?)\]\]>/s, '$1')?.replace(/<[^>]+>/g, '')?.trim() || '';
      const pubDate = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() || block.match(/<published>([\s\S]*?)<\/published>/)?.[1]?.trim() || '';
      if (title) {
        items.push({
          title, content: (desc || title).slice(0, 1000), author: sourceName, url: link,
          likes: 0, comments: 0, source: 'rss', sourceName,
          publishedAt: pubDate || null,
        });
      }
    }
    return items;
  } catch (e) { console.error(`  RSS error ${sourceName}:`, e.message); return []; }
}

// ============ FETCH: Reddit via Brave Search ============

async function searchReddit(subreddit, limit = 10) {
  const BRAVE_API_KEY = process.env.BRAVE_API_KEY;
  if (!BRAVE_API_KEY) { console.error(`  Reddit: no BRAVE_API_KEY, skipping r/${subreddit}`); return []; }
  try {
    const topicMap = {
      'ClaudeAI': 'reddit ClaudeAI Claude Code AI agents',
      'ClaudeCode': 'reddit ClaudeCode Claude Code coding agents',
      'ChatGPT': 'reddit ChatGPT AI tools workflow',
      'AI_Agents': 'reddit AI_Agents agents automation workflow',
      'artificial': 'reddit artificial intelligence AI news',
    };
    const query = topicMap[subreddit] || `reddit ${subreddit} AI`;
    const resp = await fetch(`https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=${limit}&freshness=pw`, {
      headers: { 'Accept': 'application/json', 'X-Subscription-Token': BRAVE_API_KEY },
      signal: AbortSignal.timeout(15000),
    });
    if (!resp.ok) { console.error(`  Reddit/Brave r/${subreddit}: HTTP ${resp.status}`); return []; }
    const data = await resp.json();
    return (data.web?.results || [])
      .filter(r => r.url && r.url.includes('reddit.com/r/'))
      .map(r => ({
        title: (r.title || '').replace(/^r\/\w+ on Reddit:\s*/, '').replace(/ : r\/\w+$/, ''),
        content: r.description || r.title || '',
        author: `r/${subreddit}`,
        url: r.url,
        likes: 0, comments: 0, source: 'reddit',
        publishedAt: r.page_age ? new Date(Date.now() - parsePageAge(r.page_age)).toISOString() : new Date().toISOString(),
      }));
  } catch (e) { console.error(`  Reddit/Brave r/${subreddit} error:`, e.message); return []; }
}

function parsePageAge(str) {
  if (!str) return 0;
  const m = str.match(/(\d+)\s*(hour|day|week|month)/i);
  if (!m) return 0;
  const n = parseInt(m[1]);
  const unit = m[2].toLowerCase();
  const ms = { hour: 3600000, day: 86400000, week: 604800000, month: 2592000000 };
  return n * (ms[unit] || 86400000);
}

// ============ FETCH ALL ============

async function fetchAll(config) {
  const results = [];
  const trustedHandles = new Set((config.trustedVoices || []).map(h => h.toLowerCase()));
  const creatorHandles = new Set((config.contentCreators || []).map(h => h.toLowerCase()));

  // Tier 1: Trusted Voices
  console.log('  Fetching trusted voices...');
  for (const handle of (config.trustedVoices || [])) {
    const tweets = await searchX(`from:${handle}`, 10);
    results.push(...tweets.map(t => ({ ...t, tier: 'trusted' })));
    await sleep(600);
  }

  // Tier 1.5: Content Creators
  console.log('  Fetching content creators...');
  for (const handle of (config.contentCreators || [])) {
    const tweets = await searchX(`from:${handle}`, 10);
    results.push(...tweets.map(t => ({ ...t, tier: 'creator' })));
    await sleep(600);
  }

  // Tier 2: Broad keyword search
  console.log('  Fetching keyword searches...');
  for (const query of (config.queries || [])) {
    const tweets = await searchX(query, 15);
    const filtered = tweets.filter(t => {
      const authorHandle = (t.author || '').replace('@', '').toLowerCase();
      if (trustedHandles.has(authorHandle)) return true;
      if ((t.likes || 0) < 100) return false;
      const text = (t.content || t.title || '').replace(/https?:\/\/\S+/g, '').trim();
      return text.length >= 60;
    });
    results.push(...filtered.map(t => ({
      ...t,
      tier: trustedHandles.has((t.author || '').replace('@', '').toLowerCase()) ? 'trusted' : 'broad'
    })));
    await sleep(800);
  }

  // Tier 2.5: Content-specific queries
  console.log('  Fetching content queries...');
  for (const query of (config.contentQueries || [])) {
    const tweets = await searchX(query, 15);
    const filtered = tweets.filter(t => {
      const authorHandle = (t.author || '').replace('@', '').toLowerCase();
      if (trustedHandles.has(authorHandle) || creatorHandles.has(authorHandle)) return true;
      if ((t.likes || 0) < 200) return false;
      const text = (t.content || t.title || '').replace(/https?:\/\/\S+/g, '').trim();
      return text.length >= 80;
    });
    results.push(...filtered.map(t => ({
      ...t,
      tier: creatorHandles.has((t.author || '').replace('@', '').toLowerCase()) ? 'creator' :
            trustedHandles.has((t.author || '').replace('@', '').toLowerCase()) ? 'trusted' : 'content-broad'
    })));
    await sleep(800);
  }

  // HN
  console.log('  Fetching Hacker News...');
  results.push(...(await fetchHN(20)).map(i => ({ ...i, tier: 'hackernews' })));

  // RSS
  console.log('  Fetching RSS feeds...');
  for (const feed of (config.rssFeeds || [])) {
    const items = await fetchRSS(feed.url, feed.name);
    const tier = feed.tier || 'rss';
    const weight = feed.signalWeight || 1.0;
    results.push(...items.map(i => ({ ...i, tier, signalWeight: weight })));
    await sleep(300);
  }

  // Reddit
  console.log('  Fetching Reddit...');
  for (const sub of (config.subreddits || [])) {
    const items = await searchReddit(sub);
    results.push(...items.map(i => ({ ...i, tier: 'reddit' })));
    await sleep(1000);
  }

  // Apply domain overrides
  const overrides = config.braveSourceOverrides || {};
  for (const item of results) {
    if (!item.tier || item.tier === 'broad') {
      for (const [domain, meta] of Object.entries(overrides)) {
        if (item.url && item.url.includes(domain)) {
          item.tier = meta.tier || 'enterprise';
          item.signalWeight = meta.signalWeight || 1.0;
          item.sourceName = meta.name || item.sourceName;
          break;
        }
      }
    }
  }

  // Filter to recent only
  const recent = results.filter(item => item.publishedAt && isRecent(item.publishedAt));
  console.log(`  Date filter: ${recent.length} recent from ${results.length} total (last ${MAX_AGE_DAYS} days)`);
  return recent;
}

// ============ RULE-BASED FILTERING (no AI) ============

function dedupeAndFilter(rawItems) {
  // Deduplicate by URL or title
  const seen = new Set();
  const deduped = rawItems.filter(item => {
    const key = item.url || item.title?.toLowerCase().slice(0, 60);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sort: trusted first, then by composite engagement score
  // engagementScore = likes + retweets*3 + replies*2 (X) or score + comments*2 (HN)
  deduped.sort((a, b) => {
    const tierOrder = { trusted: 0, creator: 1, enterprise: 1, latam: 1, hackernews: 2, rss: 2, reddit: 3, broad: 4, 'content-broad': 4 };
    const ta = tierOrder[a.tier] ?? 5, tb = tierOrder[b.tier] ?? 5;
    if (ta !== tb) return ta - tb;
    return (b.engagementScore || b.likes || 0) - (a.engagementScore || a.likes || 0);
  });

  // Add age labels and hot flags
  for (const item of deduped) {
    item.age = item.publishedAt ? formatAge(item.publishedAt) : null;
    item.hot = (item.likes || 0) >= 10000;
  }

  console.log(`  Deduped: ${deduped.length} from ${rawItems.length}`);
  return deduped;
}

// ============ MAIN ============

async function main() {
  if (!process.env.GITHUB_TOKEN) {
    console.error('❌ GITHUB_TOKEN missing from .env — cannot push to github.com/irivelez/the-feed');
    process.exit(1);
  }

  const today = new Date().toISOString().slice(0, 10);
  console.log(`\n⚡ Content Engine Fetch — ${today}\n`);

  const config = await loadConfig();

  // Fetch all sources
  const rawItems = await fetchAll(config);

  // Rule-based filtering (dedup, sort, age labels — no AI)
  const items = dedupeAndFilter(rawItems);

  // Save
  const output = {
    date: today,
    fetchedAt: new Date().toISOString(),
    stats: {
      rawFetched: rawItems.length,
      afterDedup: items.length,
      byTier: {},
      bySource: {},
    },
    items,
  };

  // Count stats
  for (const item of items) {
    output.stats.byTier[item.tier] = (output.stats.byTier[item.tier] || 0) + 1;
    output.stats.bySource[item.source] = (output.stats.bySource[item.source] || 0) + 1;
  }

  const jsonStr = JSON.stringify(output, null, 2);
  const datedPath = `daily/${today}.json`;
  const latestPath = `daily/latest.json`;

  // Write locally first so /angles primary path works
  console.log(`\n💾 Writing locally to ${LOCAL_DAILY_DIR}/...`);
  await mkdir(LOCAL_DAILY_DIR, { recursive: true });
  await writeFile(join(LOCAL_DAILY_DIR, `${today}.json`), jsonStr);
  await writeFile(join(LOCAL_DAILY_DIR, 'latest.json'), jsonStr);

  console.log(`\n📤 Pushing to github.com/${GH_OWNER}/${GH_REPO}...`);
  await putToGitHub(datedPath, jsonStr);
  await putToGitHub(latestPath, jsonStr);

  console.log(`\n✅ Wrote + pushed ${items.length} items`);
  console.log(`   → https://github.com/${GH_OWNER}/${GH_REPO}/blob/${GH_BRANCH}/${datedPath}`);
  console.log(`   → https://github.com/${GH_OWNER}/${GH_REPO}/blob/${GH_BRANCH}/${latestPath}`);
  console.log(`   By tier:`, output.stats.byTier);
  console.log(`   By source:`, output.stats.bySource);
  console.log();
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});

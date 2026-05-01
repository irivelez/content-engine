#!/bin/bash
# Weekly auto-commit of the LinkedIn xlsx export.
# Fires Saturday 11 PM Mac local via launchd, ahead of the Sunday 6:30 AM Bogotá
# (= 11:30 UTC) cloud routine that needs the xlsx in git. Gives ~5h buffer.
# Idempotent: bails out cleanly if nothing changed.

set -e
cd /Users/irina/AI-driven-OS/content-engine

ts() { date '+%Y-%m-%d %H:%M:%S'; }

# Pull latest first so we don't push-reject
if ! git pull --rebase --autostash 2>&1; then
  echo "[$(ts)] git pull failed — aborting weekly commit"
  exit 1
fi

# Stage all xlsx exports under data/post-analytics/
git add data/post-analytics/*.xlsx 2>/dev/null || true

# Nothing to do?
if git diff --cached --quiet; then
  echo "[$(ts)] no xlsx changes — nothing to commit"
  exit 0
fi

WEEK=$(date '+%G-W%V')
git commit -m "data: weekly LinkedIn export ${WEEK}"
git push
echo "[$(ts)] committed and pushed weekly export ${WEEK}"

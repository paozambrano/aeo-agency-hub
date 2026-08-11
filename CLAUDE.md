# AEO Agency Hub — Claude Code instructions

This repo is the shared dashboard for Julian and Pao (AEO.co / Smart Marketer). It is a static site (`index.html` + `metrics.html`) hosted on GitHub Pages. There is no build step. Editing a data file and pushing is enough to update the live page.

## Files you can edit
- `dashboard-data.js` — sprint, goals, client pipeline, team cards, quick links. See `context/SYNC.md` for the exact field map.
- `metrics-data.js` — revenue KPIs, sales pipeline, income/expenses/run rate, team capacity, output metrics.

## Files you should NOT edit unless asked
- `index.html`, `metrics.html` — layout/styles. Only touch these if the user explicitly asks for a design change.
- `context/*.md` — background reference (agency identity, client pipeline, sprint notes). Read these for context, don't rewrite them casually.

## Standing update rule
When the user pastes or points to a new source (an EOD report, a Team Weekly Briefing file, sprint notes, a client status update):
1. Read the source fully before editing anything.
2. Update only the fields that actually changed. Don't invent data — if a number or status isn't in the source, leave the existing value.
3. Edit `dashboard-data.js` and/or `metrics-data.js` per the field map in `context/SYNC.md`.
4. Summarize what changed in 3-5 short bullets, in Spanish if talking to Pao, in English if the summary is for Julian or the team.
5. Commit with a message that names the source (e.g. `"Update sprint from Team Weekly Briefing Aug 11-15"`).
6. Push, and confirm the live URL once done: `https://[username].github.io/[repo]/`

## Ingesting the weekly team briefing specifically
Pao runs a separate scheduled task that produces `Team Weekly Briefing - [date range].md` in her Smartmarketer folder. When asked to sync that file into the hub:
- `## TL;DR` and `## Blockers` → feed `sprint.theme` and `sprint.top3` (pick the 3 highest-stakes items, prefer blockers with a named owner and a real deadline over generic ones).
- `## Action Items` table → split by pillar into `goals.weekly`: items about clients/sales/workshop go to `business`, tooling/process/access items go to `operations`, delegation/team-capacity items go to `team`. Keep 2-3 items max per sub-section, drop the rest rather than overstuffing.
- `## Client Portfolio Status` → update `clients[]` status colors and notes. Do not remove a client that isn't mentioned this week, just leave their existing entry as is.
- `## Wins & Good News` is not part of the dashboard schema; do not invent a field for it, just skip it.

## Git workflow
This repo uses normal local git auth (no tokens pasted into files or chat). Before your first push, confirm the user is authenticated (`gh auth status` or an existing credential manager entry). Standard flow:
```
git add -A
git commit -m "..."
git push
```
If push fails on auth, tell the user to run `gh auth login` once, don't ask them for a token to paste into the chat.

## What "done" looks like
The user should be able to open the GitHub Pages URL and see the same thing you just edited locally, with no broken links and no `$—` placeholders left where real data was available in the source.

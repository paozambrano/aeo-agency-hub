# Dashboard Sync Instructions
> This file tells Claude how to update the dashboard.

## How to update the dashboard

All dashboard content lives in `dashboard-data.js` (one folder up from here). Edit only that file.

### Update sprint + Today's 3
Edit `DASHBOARD_DATA.sprint`:
- `week` — human-readable week label (e.g. "August 11, 2026")
- `fileDate` — ISO date "YYYY-MM-DD" (dashboard auto-warns if >10 days old)
- `theme` — sprint focus sentence
- `top3[0–2]` — title, owner, status ("not-started" | "in-progress" | "done")

### Update goals
Edit `DASHBOARD_DATA.goals.weekly` and `.monthly`.
Each has three pillars: `business`, `operations`, `team`.
Each pillar has two sub-sections:
- business → `sales`, `product`
- operations → `actions`, `infrastructure`
- team → `delegation`, `performance`

Each sub-section is an array of strings. Keep to 2–3 items max per sub-section.

### Update clients
Edit `DASHBOARD_DATA.clients` array. One object per client:
- `name` — display name
- `phase` — e.g. "Phase 4 — Content"
- `cm` — Client Manager first name
- `statusColor` — "red" | "amber" | "green" | "grey"
- `flag` — same value as statusColor (controls the emoji dot)
- `note` — 1-2 sentence status note

### Update teams
Edit `DASHBOARD_DATA.teams` array. One object per team:
- `name`, `cls` (css class: "cm"|"ce"|"ws"|"dr"|"ops"), `members`, `goals` (array of strings)

### Quick links
Edit `DASHBOARD_DATA.quickLinks.tools` and `.social`.
Set `url: "#"` for any placeholder link — it will render greyed out.

---

## When Claude updates this dashboard

If Julian pastes an EOD report, sprint notes, or client status update:
1. Extract all changed values
2. Update `dashboard-data.js` only — do not touch `index.html`
3. Summarize what changed in 3–5 bullets
4. Remind Julian to push `aeo-dashboard-export/` to the GitHub Pages repo

---

## GitHub Pages hosting

The export folder is fully self-contained. To host:
1. Create a new GitHub repo (e.g. `aeo-agency-dashboard`)
2. Upload all files from `aeo-dashboard-export/` to the repo root
3. Go to Settings → Pages → Source: deploy from branch `main`, folder `/root`
4. Dashboard is live at `https://[username].github.io/aeo-agency-dashboard/`

To update: edit `dashboard-data.js` and push. The live page refreshes automatically.

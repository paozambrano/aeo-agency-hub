// AEO Agency Dashboard — Data File
// Edit this file to update the dashboard. All content lives here.
// Generated: 2026-08-11 | Format: v2.0 (6-pillar)
//
// STRUCTURE:
//   sprint       → Today's priorities + sprint theme
//   goals        → Business / Operations / Team × weekly + monthly
//                    Business:   sales | product
//                    Operations: actions | infrastructure
//                    Team:       delegation | performance
//   clients      → Pipeline with status flags
//   teams        → Team cards with delegation goals
//   quickLinks   → Tools + Social only

const DASHBOARD_DATA = {

  // ─── SPRINT ────────────────────────────────────────────
  sprint: {
    week:     "August 3-7, 2026",
    fileDate: "2026-08-11",
    theme:    "Manage the Pinder Plotkin renewal risk before it becomes a loss. Land the OV Merchant Center fix. Get Bilal's new review process actually working.",
    top3: [
      { title: "Pinder Plotkin price/renewal conversation with Jason", owner: "Julian", status: "not-started" },
      { title: "OV robots.txt / Merchant Center crawl fix with tech", owner: "Eduardo, set Mon", status: "in-progress" },
      { title: "Winona recording with Dr. Katherine Brown (Riverside)", owner: "Juan, due Aug 11", status: "in-progress" }
    ]
  },

  // ─── GOALS ─────────────────────────────────────────────
  // Each goal is a string. Sub-sections: sales, product, actions, infrastructure, delegation, performance
  goals: {
    weekly: {
      label: "Week of Aug 3-7",
      business: {
        sales:   [
          "Manage Pinder Plotkin price/renewal conversation with Jason (Julian)",
          "Workshop-based acquisition model formalized, ~30 signups feeding cohort-2 pipeline"
        ],
        product: [
          "Finalize OV HTML blog + coordinate robots.txt/crawl-budget fix with tech (Eduardo)",
          "Send Jamie Anne's approved content package, confirm reshoot (Johan)"
        ]
      },
      operations: {
        actions: [
          "Zoya/Julian sign-off review process for Bilal's SEO recs before client delivery",
          "Send Ahrefs API keys + Screaming Frog licenses to the technical team (Julian)"
        ],
        infrastructure: [
          "Build team access-tracking system (Julian)",
          "Audit tool: VPS test + on-page report/CTA redesign, switched to Qwen (Mehmood)"
        ]
      },
      team: {
        delegation: [
          "Bilal: submit recs for Zoya/Julian review, log publicly in client threads",
          "Camilo/Lucas: continue content production under the front-loaded workflow"
        ],
        performance: [
          "Enforce Slack-thread + working-file discipline agency-wide (Pao)",
          "Compare new vs. previous AI-visibility query results (Sammar)"
        ]
      }
    },

    monthly: {
      label: "August 2026",
      business: {
        sales:   [
          "Close 1 Cohort 2 pilot (Forefront Health or next inbound)",
          "Workshop Aug 13 — 50+ attendees, $97 offer converts"
        ],
        product: [
          "AEO Reporting V1 fully operational (weekly + monthly per client)",
          "Content engine: YouTube + secondary channel live for all Cohort 1"
        ]
      },
      operations: {
        actions: [
          "Cohort 1 Month 4 retention — all 6 clients delivering weekly content",
          "All client account health at 🟡 or better by Aug 30"
        ],
        infrastructure: [
          "Shopify/WordPress direct integration — cut client friction",
          "Database fully operational + Sammar running reports autonomously"
        ]
      },
      team: {
        delegation: [
          "CMs own weekly calendar + client approval loop (SOP complete)",
          "AI Personal Brand Audit protocol monthly per client (Sammar executes)"
        ],
        performance: [
          "All team velocity tracked weekly — no silent blockers",
          "Bilal: all Cohort 1 clients on unified website track"
        ]
      }
    }
  },

  // ─── CLIENT PIPELINE ───────────────────────────────────
  // statusColor: "red" | "amber" | "green" | "grey"
  // flag:        "red" | "amber" | "green" | "grey"
  clients: [
    { name: "Outdoor Vitals",   phase: "Phase 4 — Content", cm: "Eduardo", statusColor: "red",   flag: "red",   note: "Merchant Center root cause found (robots.txt), fix pending with tech. ~10-day visibility drop traced to an unreviewed Bilal SEO change." },
    { name: "Dr. Michelle",     phase: "Phase 4 — Content", cm: "Eduardo", statusColor: "red",   flag: "red",   note: "Tyler silent. Kasim escalated. Julian decides contact path." },
    { name: "Groove Life",      phase: "Phase 1 — Onboard", cm: "Johan",   statusColor: "amber", flag: "amber", note: "Editing continues, Instagram carousels next. Backend/Shopify access confirmed never granted, agency works manually off GMB/GA4/GSC." },
    { name: "Swell Score",      phase: "Phase 4 — Content", cm: "Juan",    statusColor: "amber", flag: "amber", note: "Gary wants more portable-sauna competitor mentions, Juan revising blog. Social-channel priority decision still open." },
    { name: "Winona",           phase: "Phase 4 — Content", cm: "Juan",    statusColor: "amber", flag: "amber", note: "Dr. Katherine Brown locked in as new presenter, recording set for Aug 11 via Riverside. Reddit strategy runs through her own account." },
    { name: "BabyRx",           phase: "Phase 4 — Content", cm: "Juan",    statusColor: "amber", flag: "amber", note: "Check-in needed. Richpanel FAQ open." },
    { name: "Rootganic",        phase: "Phase 4 — Content", cm: "Eduardo", statusColor: "green", flag: "green", note: "Sarcopenia content + faster standardized flow in progress." },
    { name: "Jamie Anne",       phase: "Phase 0",           cm: "Johan",   statusColor: "green", flag: "green", note: "Podcast format locked (Jamie solo, FAQ-style). Reshoot needed for lighting, content package targeted for approval this week." },
    { name: "Pinder Plotkin",   phase: "Phase 5.1",         cm: "Julian",  statusColor: "amber", flag: "amber", note: "Tue call with Jason/Kelly/Oscar landed well, Zoya's URL restructure is the priority fix, staged rollout agreed. Julian flagged a real non-renewal risk on pricing." },
    { name: "Forefront Health", phase: "Inbound",           cm: "Julian",  statusColor: "grey",  flag: "grey",  note: "Medical/compliance vertical. Awaiting confirm from Kasim." },
    { name: "Micromatic",       phase: "Pre-onboarding",    cm: "Juan",    statusColor: "grey",  flag: "grey",  note: "Kasim's message says terms signed ($15k), payment not confirmed. Follow up with Kasim/Pep." }
  ],

  // ─── TEAM CARDS ────────────────────────────────────────
  // cls: "cm" | "ce" | "ws" | "dr" | "ops"
  teams: [
    {
      name: "Client Management", cls: "cm",
      members: "Juan · Eduardo · Johan",
      goals: [
        "Run AI Personal Brand Audit monthly per client — Sammar executes",
        "Content Engine pre-production SOP — CMs own weekly calendar + approval",
        "Shopify Partner Access SOP — delegate setup to Bilal per new client"
      ]
    },
    {
      name: "Content Engine", cls: "ce",
      members: "Camilo · Lucas",
      goals: [
        "Workshop deck reskin + flagship gift package → Camilo (Julian ships brief)",
        "Shorts from Julian's video → Camilo (3–5 per session, systematic)",
        "Brand guidelines file → Lucas owns per-client maintenance + social assets"
      ]
    },
    {
      name: "Website SEO", cls: "ws",
      members: "Mehmood · Zaryab · Bilal · Zoya",
      goals: [
        "Off-page SEO authority framework → Zoya + Bilal own deployment plan",
        "Shopify Partner Access SOP follow-through → Bilal lead, Mustafa backup",
        "Technical audit unified template → Zoya + Bilal (Julian approval)"
      ]
    },
    {
      name: "Data & Research", cls: "dr",
      members: "Mustafa · Sammar · Mateen",
      goals: [
        "AEO Reporting V1 — Sammar generates weekly + monthly, Mustafa pulls GA4/Shopify",
        "Per-client query list (finalized) → Zaryab auto-updates DB once list lands",
        "AI visibility reports: Sammar + Mehmood connect DB → pull data directly"
      ]
    },
    {
      name: "Ops", cls: "ops",
      members: "Paola Zambrano",
      goals: [
        "Reschedule Molly Pittman podcast + pilot prospects coordination",
        "Daily EOD report → auto-triggers sprint dashboard update",
        "Yellow/red flag protocol: Paola escalates same day, no silent issues"
      ]
    }
  ],

  // ─── QUICK ACCESS ──────────────────────────────────────
  quickLinks: {
    tools: [
      { label: "AEO Drive",        icon: "📁", sub: "Agency Google Drive",      url: "https://drive.google.com/drive/u/0/home" },
      { label: "Gmail",            icon: "📧", sub: "Agency email",             url: "https://mail.google.com" },
      { label: "GA4",              icon: "📈", sub: "Google Analytics",         url: "https://analytics.google.com" },
      { label: "GSC",              icon: "🔍", sub: "Search Console",           url: "https://search.google.com/search-console" },
      { label: "Merchant Center",  icon: "🛒", sub: "Google GMC",              url: "https://merchants.google.com" },
      { label: "Shopify Partners", icon: "🏪", sub: "Client store access",     url: "https://partners.shopify.com/4787618" },
      { label: "OpenAI Platform",  icon: "🤖", sub: "Billing + org settings",  url: "https://platform.openai.com/settings/organization/billing/overview" },
      { label: "OpenRouter",       icon: "⚡", sub: "Model routing + keys",    url: "https://openrouter.ai/" }
    ],
    social: [
      { label: "Substack",   icon: "✉️", sub: "AEO Changelog newsletter",  url: "https://substack.com/@aeochangelog" },
      { label: "Reddit",     icon: "🔴", sub: "r/AEO_co community",        url: "https://www.reddit.com/user/AEO_co/" },
      { label: "X/Twitter",  icon: "𝕏",  sub: "@julianlopezAEO",           url: "https://x.com/julianlopezAEO" },
      { label: "LinkedIn",   icon: "💼", sub: "Julian Lopez profile",       url: "https://www.linkedin.com/in/julian-lopez-a51724176/" },
      { label: "Instagram",  icon: "📸", sub: "— placeholder —",            url: "#" },
      { label: "Threads",    icon: "🧵", sub: "— placeholder —",            url: "#" }
    ]
  }

};

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
    week:     "August 11, 2026",
    fileDate: "2026-08-11",
    theme:    "Ship the workshop. Unblock Dr. Michelle. Close Forefront Health. Get OV live before the sale.",
    top3: [
      { title: "Workshop FAQ doc + permission-based pitch script", owner: "Julian → ship today", status: "not-started" },
      { title: "Dr. Michelle / Tyler escalation path — Kasim asked personally", owner: "Julian decides → Eduardo executes", status: "not-started" },
      { title: "Forefront Health — confirm onboarding path with Kasim EOD", owner: "Julian → Kasim (#sma-aeo-team)", status: "not-started" }
    ]
  },

  // ─── GOALS ─────────────────────────────────────────────
  // Each goal is a string. Sub-sections: sales, product, actions, infrastructure, delegation, performance
  goals: {
    weekly: {
      label: "Week of Aug 11",
      business: {
        sales:   [
          "Forefront Health onboarding path confirmed with Kasim",
          "Workshop FAQ + pitch script shipped (overdue)"
        ],
        product: [
          "OV Tushar blog live before next week's sale",
          "Per-client query list finalized — unblocks all automation"
        ]
      },
      operations: {
        actions: [
          "Dr. Michelle Tyler escalation resolved (Eduardo owns execution)",
          "GL Ryan/IT access resolved (Johan)"
        ],
        infrastructure: [
          "OV variant indexing + Merchant Center fix (Bilal)",
          "Shopify Partner Access SOP — Bilal sets up for new client"
        ]
      },
      team: {
        delegation: [
          "Workshop deck reskin brief → Camilo",
          "Shorts from Julian's video → Camilo (3–5 per session)"
        ],
        performance: [
          "EOD report from Paola → auto-updates sprint dashboard",
          "Sammar runs AI visibility report for OV + Dr. Michelle"
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
    { name: "Outdoor Vitals",   phase: "Phase 4 — Content", cm: "Eduardo", statusColor: "red",   flag: "red",   note: "Blog HTML Shopify limit. ~9,600 GMC products pending. Sale next week." },
    { name: "Dr. Michelle",     phase: "Phase 4 — Content", cm: "Eduardo", statusColor: "red",   flag: "red",   note: "Tyler silent. Kasim escalated. Julian decides contact path." },
    { name: "Groove Life",      phase: "Phase 1 — Onboard", cm: "Johan",   statusColor: "amber", flag: "amber", note: "Access nearly complete. Content batch ready. YouTube → Tue Aug 4." },
    { name: "Swell Score",      phase: "Phase 4 — Content", cm: "Juan",    statusColor: "amber", flag: "amber", note: "Lucas building presentation. Juan refining scripts." },
    { name: "Winona",           phase: "Phase 4 — Content", cm: "Juan",    statusColor: "amber", flag: "amber", note: "Reworking guides/scripts from client feedback." },
    { name: "BabyRx",           phase: "Phase 4 — Content", cm: "Juan",    statusColor: "amber", flag: "amber", note: "Check-in needed. Richpanel FAQ open." },
    { name: "Rootganic",        phase: "Phase 4 — Content", cm: "Eduardo", statusColor: "green", flag: "green", note: "Sarcopenia content + faster standardized flow in progress." },
    { name: "Jamie Anne",       phase: "Phase 0",           cm: "Johan",   statusColor: "green", flag: "green", note: "Content assets underway (Camilo). No blockers." },
    { name: "Pinder Plotkin",   phase: "Phase 5.1",         cm: "Julian",  statusColor: "amber", flag: "amber", note: "Zoya pushing content live + schema. Tue call confirmed." },
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

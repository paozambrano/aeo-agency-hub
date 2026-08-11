// AEO Agency Metrics Hub — Data File
// Edit this file to update all metrics. Generated: 2026-08-11 | Format: v1.0 (placeholder)
//
// STRUCTURE:
//   meta         → period labels + last updated
//   business     → sales pipeline + revenue KPIs (weekly + monthly)
//   operations   → income per client + expenses + run rate + opportunity pipeline
//   team         → capacity signals + output metrics

const METRICS_DATA = {

  meta: {
    week:         "Aug 11, 2026",
    month:        "August 2026",
    fileDate:     "2026-08-11",
    currency:     "USD"
  },

  // ─── BUSINESS ──────────────────────────────────────────────
  business: {

    // Revenue KPIs — update weekly
    kpis: {
      weekly: [
        { label: "Active MRR",           value: "$—",     delta: null,  note: "Sum of all active client fees" },
        { label: "Workshop Revenue",      value: "$—",     delta: null,  note: "Aug 13 workshop — post-event" },
        { label: "Leads This Week",       value: "—",      delta: null,  note: "Inbound + outbound qualified" },
        { label: "Demos / Calls Booked",  value: "—",      delta: null,  note: "Discovery calls scheduled" }
      ],
      monthly: [
        { label: "Monthly Recurring Revenue", value: "$—",  delta: null,  note: "All active clients" },
        { label: "New MRR",                   value: "$—",  delta: null,  note: "New clients signed this month" },
        { label: "Churned MRR",               value: "$—",  delta: null,  note: "Clients lost this month" },
        { label: "Pipeline Value",            value: "$—",  delta: null,  note: "Weighted sum of all open opps" },
        { label: "Workshop Revenue",          value: "$—",  delta: null,  note: "All workshop events this month" },
        { label: "Net New Revenue",           value: "$—",  delta: null,  note: "MRR gain minus churn" }
      ]
    },

    // Sales Pipeline
    pipeline: [
      {
        name:       "Forefront Health",
        stage:      "Qualification",
        value:      "$2,997/mo",
        source:     "Kasim referral",
        contact:    "—",
        nextAction: "Confirm onboarding path with Kasim EOD Aug 11",
        closeDate:  "Aug 2026",
        probability: 70,
        notes:      "Medical/compliance vertical. Awaiting Kasim green light."
      },
      {
        name:       "Workshop Attendees → DFY",
        stage:      "Lead Gen",
        value:      "TBD",
        source:     "Workshop Aug 13",
        contact:    "Multiple",
        nextAction: "Follow-up sequence post-workshop",
        closeDate:  "Sep 2026",
        probability: 20,
        notes:      "Expect 2–5 DFY inquiry conversations post-event."
      },
      {
        name:       "Micromatic",
        stage:      "Verbal close",
        value:      "$15,000",
        source:     "Kasim",
        contact:    "—",
        nextAction: "Confirm with Kasim/Pep whether payment actually landed (terms signed per Kasim's message, payment not yet verified)",
        closeDate:  "Aug 2026",
        probability: 60,
        notes:      "Juan will be CM. Do not count as active MRR until payment confirmed."
      },
      {
        name:       "Placeholder Opportunity",
        stage:      "—",
        value:      "$—",
        source:     "—",
        contact:    "—",
        nextAction: "—",
        closeDate:  "—",
        probability: 0,
        notes:      "Add real opportunity here."
      }
    ]
  },

  // ─── OPERATIONS ────────────────────────────────────────────
  operations: {

    // Income — one row per active client
    // status: "active" | "at-risk" | "paused" | "pending"
    income: [
      { client: "Outdoor Vitals",   plan: "Cohort 1 — Full Service", fee: 2997,  status: "active",   paymentStatus: "Current",  notes: "Month 4" },
      { client: "Dr. Michelle",     plan: "Cohort 1 — Full Service", fee: 2997,  status: "at-risk",  paymentStatus: "Current",  notes: "Tyler unresponsive — monitor" },
      { client: "Rootganic",        plan: "Cohort 1 — Full Service", fee: 2997,  status: "active",   paymentStatus: "Current",  notes: "Month 4" },
      { client: "Winona",           plan: "Cohort 1 — Full Service", fee: 2997,  status: "active",   paymentStatus: "Current",  notes: "Month 4" },
      { client: "Swell Score",      plan: "Cohort 1 — Full Service", fee: 2997,  status: "active",   paymentStatus: "Current",  notes: "Month 4" },
      { client: "BabyRx",          plan: "Cohort 1 — Full Service", fee: 2997,  status: "active",   paymentStatus: "Current",  notes: "Month 4" },
      { client: "Groove Life",      plan: "Cohort 2 — Full Service", fee: 2997,  status: "active",   paymentStatus: "Current",  notes: "Month 3" },
      { client: "Jamie Anne",       plan: "Cohort 2 — Phase 0",      fee: 0,     status: "pending",  paymentStatus: "Pre-paid", notes: "Onboarding — billed at Phase 1 start" },
      { client: "Pinder Plotkin",   plan: "VIP Legacy",              fee: 2997,  status: "active",   paymentStatus: "Current",  notes: "Julian direct" }
    ],

    // Expenses — categories with monthly estimates
    // Fill in real numbers. All values USD/month.
    expenses: [
      { category: "Team — Client Managers",   amount: null, note: "Juan + Eduardo + Johan combined" },
      { category: "Team — Content Engine",    amount: null, note: "Camilo + Lucas combined" },
      { category: "Team — Website SEO",       amount: null, note: "Mehmood + Zaryab + Bilal + Zoya" },
      { category: "Team — Data & Research",   amount: null, note: "Mustafa + Sammar + Mateen" },
      { category: "Team — Ops",               amount: null, note: "Paola" },
      { category: "Tools & Software",         amount: null, note: "Search Atlas, GA4 premium, etc." },
      { category: "AI Infrastructure",        amount: null, note: "OpenRouter, Anthropic, OpenAI" },
      { category: "Hosting & Domains",        amount: null, note: "Authority site + client microsites" },
      { category: "Workshop / Events",        amount: null, note: "Zoom, landing pages, payment processing" },
      { category: "Misc / Ops Overhead",      amount: null, note: "Other recurring costs" }
    ],

    // Run Rate summary — computed from income/expenses above
    // These are manually updated until automated
    runRate: {
      grossMRR:     null,   // Sum of all active client fees
      totalExpenses: null,  // Sum of all expenses
      netMRR:       null,   // grossMRR - totalExpenses
      runway:       null,   // Months of runway at current burn (if applicable)
      note:         "Fill in income + expense rows above to calculate run rate."
    },

    // Non-client opportunities — partnerships, workshops, courses, etc.
    opportunities: [
      {
        name:       "Workshop — Aug 13",
        type:       "Event",
        revenue:    "$97/ticket",
        target:     "50+ attendees",
        status:     "Active",
        owner:      "Kasim / Julian",
        notes:      "3-email cold sequence deployed Mon–Wed. Live Thu 2PM ET."
      },
      {
        name:       "Skool — Implementor Tier",
        type:       "Recurring subscription",
        revenue:    "$97/mo",
        target:     "Launch post-workshop",
        status:     "Pre-launch",
        owner:      "Julian",
        notes:      "Classroom weeks 1–13 live. Paid tier launches with Blueprint."
      },
      {
        name:       "Molly Pittman Podcast",
        type:       "Awareness / Lead Gen",
        revenue:    "Indirect",
        target:     "Reschedule TBD",
        status:     "Paola rescheduling",
        owner:      "Paola",
        notes:      "Originally scheduled, needs new date."
      },
      {
        name:       "Placeholder Opportunity",
        type:       "—",
        revenue:    "$—",
        target:     "—",
        status:     "—",
        owner:      "—",
        notes:      "Add real opportunity here."
      }
    ]
  },

  // ─── TEAM ──────────────────────────────────────────────────
  team: {

    // Capacity — weekly signal per member
    // bandwidth: "full" | "available" | "overloaded" | "blocked"
    capacity: [
      { name: "Juan Bustillo",      role: "CM",            clients: ["Winona","Swell Score","BabyRx"],                  bandwidth: "full",      note: "Reworking Winona scripts. Swell preso in progress." },
      { name: "Eduardo Vargas",     role: "CM",            clients: ["Outdoor Vitals","Dr. Michelle","Rootganic"],      bandwidth: "overloaded", note: "Two reds + Rootganic. Dr. Michelle escalation pending." },
      { name: "Johan Maturana",     role: "CM",            clients: ["Groove Life","Jamie Anne"],                        bandwidth: "full",      note: "GL access gap. JA onboarding active." },
      { name: "Camilo Villamil",    role: "Content",       clients: ["All"],                                             bandwidth: "full",      note: "Workshop deck reskin + shorts queue pending brief." },
      { name: "Lucas Sosa",         role: "Content",       clients: ["Swell Score","Jamie Anne"],                        bandwidth: "available", note: "Swell preso in progress. Capacity for new brief." },
      { name: "Mehmood Bhutta",     role: "Tech Lead",     clients: ["Authority site","Tools"],                          bandwidth: "full",      note: "Answer DB + Reddit tool. Authority site ongoing." },
      { name: "Zaryab Khan",        role: "Technical",     clients: ["Reddit tool","Answer DB"],                         bandwidth: "full",      note: "DB operational. Waiting per-client query list." },
      { name: "Syed Bilal",         role: "Website Lead",  clients: ["All"],                                             bandwidth: "full",      note: "OV GMC fix. Shopify Partner SOP pending." },
      { name: "Zoya Manzoor",       role: "Semantic SEO",  clients: ["Pinder Plotkin","Authority"],                      bandwidth: "available", note: "PP schema + content live. Capacity for next client." },
      { name: "Mustafa Bilal",      role: "SEO / Data",    clients: ["Search Atlas","GA4"],                              bandwidth: "full",      note: "Reporting V1 build. Skool daily posts Mon/Tue/Wed." },
      { name: "Sammar Wamiq",       role: "Data",          clients: ["OV","Dr. Michelle"],                               bandwidth: "full",      note: "AI visibility reports for OV + Dr. Michelle this week." },
      { name: "Muhammad Mateen",    role: "Research",      clients: ["Citation research"],                               bandwidth: "available", note: "URL categorization ongoing. Available for new tasks." },
      { name: "Paola Zambrano",     role: "Ops",           clients: ["All"],                                             bandwidth: "full",      note: "EOD reports. Molly podcast reschedule. Zoom setup pending." }
    ],

    // Output metrics — weekly
    output: {
      weekly: [
        { label: "Content Pieces Published",    value: "—", note: "Across all clients (blogs, videos, social)" },
        { label: "Shorts Produced",             value: "—", note: "Camilo output this week" },
        { label: "AI Visibility Reports Sent",  value: "—", note: "Sammar — per client" },
        { label: "Deliverables Completed",      value: "—", note: "Any phase deliverable shipped" },
        { label: "Client Calls Held",           value: "—", note: "Check-ins, reviews, strategy" },
        { label: "Blockers Unresolved > 48h",   value: "—", note: "Flag if non-zero" }
      ],
      monthly: [
        { label: "Total Content Pieces",        value: "—", note: "All clients, all formats" },
        { label: "Clients at Green Status",     value: "—", note: "Out of 9 active" },
        { label: "Clients at Red Status",       value: "—", note: "Target: 0" },
        { label: "Phase Advances",              value: "—", note: "Clients moved to next phase" },
        { label: "New SOPs Created",            value: "—", note: "Docs + playbooks added to system" },
        { label: "Team Velocity Score",         value: "—", note: "Subjective 1–5. Update each Monday." }
      ]
    }
  }

};

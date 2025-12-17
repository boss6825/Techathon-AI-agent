/**
 * Mock data for agent responses
 * Simulates enterprise-grade pharmaceutical data
 */

export const mockAgentResponses = {
  market: {
    summary: "The respiratory therapeutics market in India shows significant growth potential with a CAGR of 8.2%. Key therapeutic areas including COPD, asthma, and allergic rhinitis demonstrate low competition density with high unmet medical needs.",
    insights: [
      "Market size: $2.4B (2024) projected to reach $3.8B by 2028",
      "Generic penetration: 67% in oral formulations, 43% in inhalables",
      "Top 3 players control 52% market share, indicating consolidation opportunity",
      "Pediatric respiratory segment shows 12% CAGR, fastest growing sub-segment"
    ],
    table: {
      headers: ["Therapeutic Area", "Market Size ($M)", "CAGR %", "Competition Index"],
      rows: [
        ["COPD", "890", "7.8", "Medium"],
        ["Asthma", "1,240", "9.1", "High"],
        ["Allergic Rhinitis", "270", "11.2", "Low"],
      ]
    }
  },

  patent: {
    summary: "Patent landscape analysis reveals 23 active patents expiring between 2025-2027 for key respiratory molecules. Freedom-to-operate assessment indicates 4 high-potential molecules with clear IP pathways.",
    insights: [
      "Budesonide patents expire Q2 2025, enabling novel delivery system innovations",
      "Montelukast composition patents expire in 18 months across US, EU, India",
      "12 process patents identified as circumventable for target molecules",
      "Zero litigation history for 3 priority molecules in past 5 years"
    ],
    table: {
      headers: ["Molecule", "Expiry Date", "Patent Type", "FTO Status"],
      rows: [
        ["Budesonide", "May 2025", "Composition", "Clear"],
        ["Montelukast", "Nov 2025", "Formulation", "Clear"],
        ["Ciclesonide", "Mar 2026", "Process", "Under Review"],
      ]
    },
    references: [
      { title: "USPTO Patent Database", url: "#" },
      { title: "EPO Register", url: "#" }
    ]
  },

  trials: {
    summary: "Current clinical trial landscape shows 47 active trials for respiratory indications in Phase II-III. Notable trend: 8 trials exploring anti-inflammatory repurposing for COPD exacerbations.",
    insights: [
      "32% of trials focus on novel drug delivery mechanisms vs. new molecules",
      "Top sponsor: AstraZeneca (9 trials), GSK (7 trials), Local: Sun Pharma (3 trials)",
      "India-specific trials: 12 active, focusing on tropical asthma phenotypes",
      "Orphan respiratory indications: 6 trials, all in early Phase II"
    ],
    table: {
      headers: ["Trial ID", "Molecule", "Indication", "Phase", "Sponsor"],
      rows: [
        ["NCT05234512", "Montelukast", "COPD", "III", "Sun Pharma"],
        ["NCT05198734", "Budesonide", "Severe Asthma", "II", "Cipla"],
        ["NCT05112456", "Novel Combo", "Allergic Rhinitis", "II", "Dr. Reddy's"],
      ]
    },
    references: [
      { title: "ClinicalTrials.gov", url: "https://clinicaltrials.gov" },
      { title: "WHO ICTRP", url: "#" }
    ]
  },

  exim: {
    summary: "India's API import dependency for respiratory molecules remains at 68%, primarily from China. Export opportunities identified in finished dosage forms to regulated markets.",
    insights: [
      "Import volume: 12,400 MT (2023), up 15% YoY",
      "Top import sources: China (72%), Italy (18%), Switzerland (7%)",
      "Export growth: 23% in inhalation devices, driven by US DMF approvals",
      "Domestic manufacturing initiatives target 40% import substitution by 2026"
    ],
    table: {
      headers: ["API/Product", "Import (MT)", "Export (MT)", "Net Position"],
      rows: [
        ["Montelukast API", "1,240", "180", "Import Heavy"],
        ["Budesonide FDF", "420", "890", "Export Heavy"],
        ["Inhalers (Units M)", "2.1", "8.4", "Export Heavy"],
      ]
    }
  },

  internal: {
    summary: "Internal strategy documents indicate focus on respiratory portfolio expansion with emphasis on differentiated generics and 505(b)(2) pathways. Field feedback highlights pricing pressure in tier-2 cities.",
    insights: [
      "Strategic priority: Move from commodity generics to value-added formulations",
      "R&D investment: 12% of respiratory division revenue allocated to reformulation",
      "Market intelligence: Competitors planning 6 respiratory launches in next 18 months",
      "Sales feedback: 34% of prescribers open to branded generics with clinical support"
    ],
    references: [
      { title: "Internal Strategy Deck Q4-2024", url: "#" },
      { title: "Field Insights Report - Respiratory", url: "#" }
    ]
  },

  web: {
    summary: "Recent scientific publications and clinical guidelines emphasize personalized medicine approaches in respiratory care. GINA guidelines updated with new biomarker-driven treatment algorithms.",
    insights: [
      "15 peer-reviewed papers published on respiratory repurposing in past 6 months",
      "Patient forums indicate high demand for affordable combination inhalers",
      "Regulatory news: FDA draft guidance on nasal spray bioequivalence (Oct 2024)",
      "Payer policies shifting toward value-based contracting for chronic respiratory"
    ],
    references: [
      { title: "GINA 2024 Guidelines Update", url: "#" },
      { title: "Nature Reviews Drug Discovery", url: "#" },
      { title: "Patient Forum Analysis", url: "#" }
    ]
  }
};

/**
 * Mock agent execution timeline
 */
export const generateAgentTimeline = () => {
  return [
    {
      name: "Master Agent",
      status: "completed",
      message: "Query decomposed into 6 research tasks",
      timestamp: "00:00:02"
    },
    {
      name: "IQVIA Insights Agent",
      status: "completed",
      message: "Market analysis completed",
      timestamp: "00:00:08"
    },
    {
      name: "Patent Landscape Agent",
      status: "completed",
      message: "IP analysis completed",
      timestamp: "00:00:12"
    },
    {
      name: "Clinical Trials Agent",
      status: "completed",
      message: "Pipeline data retrieved",
      timestamp: "00:00:15"
    },
    {
      name: "EXIM Trade Agent",
      status: "completed",
      message: "Import/export trends analyzed",
      timestamp: "00:00:18"
    },
    {
      name: "Internal Insights Agent",
      status: "completed",
      message: "Strategy docs summarized",
      timestamp: "00:00:21"
    },
    {
      name: "Web Intelligence Agent",
      status: "completed",
      message: "Literature review completed",
      timestamp: "00:00:24"
    },
    {
      name: "Report Generator Agent",
      status: "idle",
      message: "Ready to compile report",
      timestamp: null
    }
  ];
};

export const simulateAgentExecution = (onUpdate) => {
  const agents = [
    { name: "Master Agent", delay: 1000, message: "Query decomposed into 6 research tasks" },
    { name: "IQVIA Insights Agent", delay: 2500, message: "Market analysis completed" },
    { name: "Patent Landscape Agent", delay: 4000, message: "IP analysis completed" },
    { name: "Clinical Trials Agent", delay: 5500, message: "Pipeline data retrieved" },
    { name: "EXIM Trade Agent", delay: 7000, message: "Import/export trends analyzed" },
    { name: "Internal Insights Agent", delay: 8500, message: "Strategy docs summarized" },
    { name: "Web Intelligence Agent", delay: 10000, message: "Literature review completed" },
  ];

  return agents;
};

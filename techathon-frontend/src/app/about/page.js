'use client';

import Navbar from '@/components/Navbar';

/**
 * About / Architecture page
 * Explains the agentic AI system architecture and capabilities
 */
export default function AboutPage() {
  const masterAgentCapabilities = [
    "Natural language query interpretation and decomposition",
    "Intelligent task delegation to specialized worker agents",
    "Response synthesis and coherence management",
    "Multi-format output generation (text, tables, charts, PDF)",
  ];

  const workerAgents = [
    {
      name: "IQVIA Insights Agent",
      icon: "📊",
      color: "blue",
      responsibilities: [
        "Market size and growth trend analysis",
        "Competitive landscape assessment",
        "Therapy area dynamics evaluation",
        "Sales volume and revenue projections"
      ]
    },
    {
      name: "Patent Landscape Agent",
      icon: "⚖️",
      color: "amber",
      responsibilities: [
        "Active patent identification across USPTO, EPO databases",
        "Patent expiry timeline tracking",
        "Freedom-to-operate (FTO) risk assessment",
        "Competitive IP filing pattern analysis"
      ]
    },
    {
      name: "Clinical Trials Agent",
      icon: "🔬",
      color: "emerald",
      responsibilities: [
        "Pipeline data extraction from ClinicalTrials.gov",
        "Trial phase distribution analysis",
        "Sponsor profiling and competitive intelligence",
        "Indication and mechanism of action mapping"
      ]
    },
    {
      name: "EXIM Trade Agent",
      icon: "🌍",
      color: "violet",
      responsibilities: [
        "Import/export volume analysis by molecule",
        "API sourcing and supply chain mapping",
        "Trade dependency risk assessment",
        "Geographic manufacturing insights"
      ]
    },
    {
      name: "Internal Insights Agent",
      icon: "📁",
      color: "rose",
      responsibilities: [
        "Internal document retrieval and summarization",
        "Strategy deck knowledge extraction",
        "Field feedback synthesis",
        "Historical decision context provision"
      ]
    },
    {
      name: "Web Intelligence Agent",
      icon: "🔍",
      color: "cyan",
      responsibilities: [
        "Real-time web search for clinical guidelines",
        "Scientific publication monitoring",
        "Patient forum sentiment analysis",
        "Regulatory news and policy tracking"
      ]
    },
  ];

  const systemFeatures = [
    {
      title: "Multi-Source Data Integration",
      description: "Seamlessly connects to IQVIA datasets, USPTO, ClinicalTrials.gov, EXIM databases, internal repositories, and real-time web sources.",
      icon: "🔗"
    },
    {
      title: "Autonomous Research Orchestration",
      description: "Master Agent intelligently decomposes complex queries and coordinates parallel research tasks across specialized worker agents.",
      icon: "🤖"
    },
    {
      title: "Enterprise-Grade Reporting",
      description: "Generates polished PDF reports with tables, charts, and citations. Maintains archival system for historical query tracking.",
      icon: "📄"
    },
    {
      title: "Pharmaceutical Domain Expertise",
      description: "Purpose-built for drug repurposing, portfolio strategy, and competitive intelligence workflows in pharmaceutical R&D.",
      icon: "💊"
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Agentic AI Architecture
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            A sophisticated multi-agent system designed to accelerate pharmaceutical
            intelligence gathering, analysis, and strategic decision-making through
            autonomous research orchestration.
          </p>
        </div>

        {/* System Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">System Architecture</h2>

          {/* Master Agent */}
          <div className="bg-gradient-to-br from-purple-900 to-purple-700 text-white rounded-xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-3xl">
                🎯
              </div>
              <div>
                <h3 className="text-2xl font-bold">Master Agent</h3>
                <p className="text-purple-200">Conversation Orchestrator</p>
              </div>
            </div>
            <p className="text-purple-100 mb-6">
              The Master Agent serves as the central intelligence coordinator, interpreting
              user queries, decomposing them into modular research tasks, delegating to
              specialized worker agents, and synthesizing responses into coherent summaries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {masterAgentCapabilities.map((capability, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <p className="text-sm text-white">{capability}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Worker Agents */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Specialized Worker Agents</h3>
            {workerAgents.map((agent, idx) => (
              <div
                key={idx}
                className={`bg-white border-2 border-${agent.color}-200 rounded-xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 bg-${agent.color}-50 rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                    {agent.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-stone-900 mb-2">{agent.name}</h4>
                    <ul className="space-y-2">
                      {agent.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex items-start gap-2">
                          <span className="text-stone-400 text-sm mt-0.5">•</span>
                          <span className="text-sm text-stone-700">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white border-2 border-stone-200 rounded-xl p-6">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Flow */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Query Processing Flow</h2>
          <div className="bg-white border-2 border-stone-200 rounded-xl p-8">
            <div className="space-y-6">
              {[
                { step: 1, title: "Query Intake", desc: "User submits natural language query via console interface" },
                { step: 2, title: "Query Analysis", desc: "Master Agent parses intent and identifies required data sources" },
                { step: 3, title: "Task Decomposition", desc: "Query broken into parallel subtasks for worker agents" },
                { step: 4, title: "Parallel Execution", desc: "Worker agents execute searches across respective data sources" },
                { step: 5, title: "Response Synthesis", desc: "Master Agent aggregates findings and formats output" },
                { step: 6, title: "Report Generation", desc: "Formatted response delivered with optional PDF export" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-900 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-stone-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Technology Foundation</h2>
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-purple-300 mb-3">Framework</h4>
                <ul className="space-y-2 text-sm text-stone-300">
                  <li>• LangGraph orchestration</li>
                  <li>• CrewAI agent coordination</li>
                  <li>• OpenAI GPT-4 reasoning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-300 mb-3">Data Sources</h4>
                <ul className="space-y-2 text-sm text-stone-300">
                  <li>• IQVIA proprietary datasets</li>
                  <li>• USPTO & EPO patent APIs</li>
                  <li>• ClinicalTrials.gov</li>
                  <li>• EXIM trade databases</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-300 mb-3">Infrastructure</h4>
                <ul className="space-y-2 text-sm text-stone-300">
                  <li>• Vector databases (Pinecone)</li>
                  <li>• Document processing (PyPDF2)</li>
                  <li>• Report generation (HTML/PDF)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block px-8 py-4 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-800 transition-colors"
          >
            Try the Console →
          </a>
        </div>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChatInput from '@/components/ChatInput';
import InsightCard from '@/components/InsightCard';
import AgentTimeline from '@/components/AgentTimeline';
import { mockAgentResponses } from '@/lib/mockData';

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [agents, setAgents] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');

  const handleQuerySubmit = async (query) => {
    setCurrentQuery(query);
    setIsProcessing(true);
    setHasResults(false);

    const initialAgents = [
      { name: "Master Agent", status: "idle", message: "Waiting...", timestamp: null },
      { name: "IQVIA Insights Agent", status: "idle", message: "Waiting...", timestamp: null },
      { name: "Patent Landscape Agent", status: "idle", message: "Waiting...", timestamp: null },
      { name: "Clinical Trials Agent", status: "idle", message: "Waiting...", timestamp: null },
      { name: "EXIM Trade Agent", status: "idle", message: "Waiting...", timestamp: null },
      { name: "Internal Insights Agent", status: "idle", message: "Waiting...", timestamp: null },
      { name: "Web Intelligence Agent", status: "idle", message: "Waiting...", timestamp: null },
      { name: "Report Generator Agent", status: "idle", message: "Waiting...", timestamp: null },
    ];

    setAgents(initialAgents);

    const agentSequence = [
      { idx: 0, delay: 1000, message: "Query decomposed into 6 research tasks" },
      { idx: 1, delay: 2500 },
      { idx: 2, delay: 4000 },
      { idx: 3, delay: 5500 },
      { idx: 4, delay: 7000 },
      { idx: 5, delay: 8500 },
      { idx: 6, delay: 10000 },
    ];

    // Start master agent
    setTimeout(() => {
      setAgents(prev => {
        const updated = [...prev];
        updated[0] = { ...updated[0], status: "running", message: "Analyzing query..." };
        return updated;
      });
    }, 300);

    agentSequence.forEach(({ idx, delay, message }) => {
      setTimeout(() => {
        setAgents(prev => {
          const updated = [...prev];

          if (idx >= 0) {
            updated[idx] = {
              ...updated[idx],
              status: "completed",
              message: message || "Completed",
              timestamp: `00:00:${String(Math.floor(delay / 1000)).padStart(2, '0')}`,
            };
          }

          if (idx + 1 < updated.length) {
            updated[idx + 1] = {
              ...updated[idx + 1],
              status: "running",
              message: "Processing...",
            };
          }

          return updated;
        });
      }, delay);
    });

    setTimeout(() => {
      setIsProcessing(false);
      setHasResults(true);
    }, 11000);
  };

  const handleGenerateReport = () => {
    window.location.href = '/report/1';
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-[1800px] mx-auto px-6 py-10 space-y-10">
        {!hasResults && !isProcessing && (
          <div className="glass-card card-elevated rounded-3xl px-10 py-12 text-left border border-white/60">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                <div className="pill">Enterprise Pharma Intelligence</div>
                <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                  Orchestrate market, IP, trials, and trade insights in one console
                </h1>
                <p className="text-lg text-stone-600 max-w-2xl">
                  Ask one complex question — the agentic stack coordinates Market, IP, Trials, Trade, and Internal agents
                  to deliver decision-grade answers.
                </p>
              </div>
              <div className="text-right space-y-2">
                <div className="pill justify-end">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live multi-agent
                </div>
                <p className="text-sm text-stone-500">Built for portfolio, BD, and medical affairs teams</p>
              </div>
            </div>
          </div>
        )}

        {/* Two-column grid */}
        <div className="grid grid-cols-[1fr,360px] lg:grid-cols-[1fr,400px] gap-8 items-start">
          {/* LEFT: Chat + Results */}
          <div className="space-y-8">
            {(hasResults || isProcessing) && (
              <div className="glass-card card-elevated rounded-2xl p-6 border border-white/60">
                <h2 className="text-xs font-semibold text-stone-500 mb-1 tracking-[0.14em] uppercase">
                  Current query
                </h2>
                <p className="text-lg text-stone-900">{currentQuery}</p>
              </div>
            )}

            {!hasResults && (
              <ChatInput
                onSubmit={handleQuerySubmit}
                isProcessing={isProcessing}
              />
            )}

            {hasResults && (
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleGenerateReport}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-900 via-purple-700 to-fuchsia-600 text-white font-semibold shadow-lg shadow-purple-900/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    📄 Generate Full Report
                  </button>
                  <button
                    onClick={() => {
                      setHasResults(false);
                      setAgents([]);
                      setCurrentQuery('');
                    }}
                    className="px-6 py-3 rounded-xl border border-white/60 bg-white/70 text-stone-800 font-semibold shadow-sm hover:shadow-md transition-all"
                  >
                    New Query
                  </button>
                </div>

                <InsightCard type="market" title="Market Intelligence" data={mockAgentResponses.market} />
                <InsightCard type="patent" title="Patent Landscape" data={mockAgentResponses.patent} />
                <InsightCard type="trials" title="Clinical Trials Pipeline" data={mockAgentResponses.trials} />
                <InsightCard type="exim" title="Trade & Manufacturing" data={mockAgentResponses.exim} />
                <InsightCard type="internal" title="Internal Strategy Insights" data={mockAgentResponses.internal} />
                <InsightCard type="web" title="Web Intelligence" data={mockAgentResponses.web} />
              </div>
            )}

            {isProcessing && (
              <div className="grid gap-6">
                {[...Array(6)].map((_, i) => (
                  <InsightCard key={i} loading />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: AGENT TIMELINE (ALWAYS VISIBLE) */}
          <div className="sticky top-24 h-fit">
            {agents.length > 0 ? (
              <AgentTimeline agents={agents} />
            ) : (
              <div className="glass-card card-elevated rounded-2xl p-6 border border-white/60">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-stone-900">Agent Activity</h3>
                  <span className="pill text-xs">Awaiting query</span>
                </div>
                <p className="text-sm text-stone-500 text-center py-8">
                  Submit a prompt to see the orchestration timeline.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

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
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main className="max-w-[1800px] mx-auto px-6 py-8">
        {!hasResults && !isProcessing && (
          <div className="text-center py-16 mb-8">
            <h1 className="text-4xl font-bold text-stone-900 mb-4">
              Pharmaceutical Intelligence at Scale
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              AI-powered insights across market, IP, trials, and literature.
            </p>
          </div>
        )}

        {/* 🔥 FIXED GRID: 2 COLUMNS FROM START */}
        <div className="grid grid-cols-[1fr,360px] lg:grid-cols-[1fr,380px] gap-8">

          {/* LEFT: Chat + Results */}
          <div className="space-y-8">
            {(hasResults || isProcessing) && (
              <div className="bg-white border-2 border-stone-200 rounded-xl p-6">
                <h2 className="text-sm font-semibold text-stone-500 mb-2">
                  CURRENT QUERY
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
                <div className="flex gap-4">
                  <button
                    onClick={handleGenerateReport}
                    className="px-6 py-3 bg-purple-900 text-white rounded-lg hover:bg-purple-800"
                  >
                    📄 Generate Full Report
                  </button>
                  <button
                    onClick={() => {
                      setHasResults(false);
                      setAgents([]);
                      setCurrentQuery('');
                    }}
                    className="px-6 py-3 bg-white border-2 border-stone-300 rounded-lg"
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
              <div className="bg-white border-2 border-stone-200 rounded-xl p-6">
                <h3 className="text-sm font-semibold mb-4">Agent Activity</h3>
                <p className="text-sm text-stone-400 text-center py-8">
                  Waiting for query...
                </p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

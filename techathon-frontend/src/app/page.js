'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChatInput from '@/components/ChatInput';
import InsightCard from '@/components/InsightCard';
import AgentTimeline from '@/components/AgentTimeline';
import { mockAgentResponses, generateAgentTimeline } from '@/lib/mockData';

/**
 * Main chat console page
 * Enterprise-grade interface for pharmaceutical intelligence queries
 */
export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [agents, setAgents] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');

  const handleQuerySubmit = async (query) => {
    setCurrentQuery(query);
    setIsProcessing(true);
    setHasResults(false);

    // Initialize agent timeline
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

    // Simulate agent execution with realistic timing
    const agentSequence = [
      { idx: 0, delay: 1000, message: "Query decomposed into 6 research tasks" },
      { idx: 1, delay: 2500, message: "Market analysis completed" },
      { idx: 2, delay: 4000, message: "IP landscape analyzed" },
      { idx: 3, delay: 5500, message: "Pipeline data retrieved" },
      { idx: 4, delay: 7000, message: "Trade data analyzed" },
      { idx: 5, delay: 8500, message: "Internal docs reviewed" },
      { idx: 6, delay: 10000, message: "Web intelligence gathered" },
    ];

    // Start Master Agent
    setTimeout(() => {
      setAgents(prev => {
        const updated = [...prev];
        updated[0] = { ...updated[0], status: "running", message: "Analyzing query..." };
        return updated;
      });
    }, 500);

    // Execute agent sequence
    agentSequence.forEach(({ idx, delay, message }) => {
      setTimeout(() => {
        setAgents(prev => {
          const updated = [...prev];
          // Complete previous agent
          if (idx > 0) {
            updated[idx - 1] = {
              ...updated[idx - 1],
              status: "completed",
              timestamp: `00:00:${String(Math.floor(delay / 1000) - 2).padStart(2, '0')}`
            };
          } else {
            updated[0] = {
              ...updated[0],
              status: "completed",
              message,
              timestamp: "00:00:01"
            };
          }
          // Start current agent
          if (idx < updated.length - 1) {
            updated[idx + 1] = {
              ...updated[idx + 1],
              status: "running",
              message: "Processing..."
            };
          }
          return updated;
        });
      }, delay);
    });

    // Complete last agent and show results
    setTimeout(() => {
      setAgents(prev => {
        const updated = [...prev];
        updated[6] = {
          ...updated[6],
          status: "completed",
          message: "Literature review completed",
          timestamp: "00:00:10"
        };
        updated[7] = {
          ...updated[7],
          status: "idle",
          message: "Ready to compile report",
          timestamp: null
        };
        return updated;
      });
      setIsProcessing(false);
      setHasResults(true);
    }, 11000);
  };

  const handleGenerateReport = () => {
    // Navigate to report page (will create next)
    window.location.href = '/report/1';
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main className="max-w-[1800px] mx-auto px-6 py-8">
        {/* Hero Section - Only show when no query */}
        {!hasResults && !isProcessing && (
          <div className="text-center py-16 mb-8">
            <h1 className="text-4xl font-bold text-stone-900 mb-4">
              Pharmaceutical Intelligence at Scale
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-12">
              Accelerate drug repurposing and portfolio strategy with AI-powered
              insights from market data, patents, clinical trials, and scientific literature.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-8">
          {/* LEFT SECTION: Main Content */}
          <div className="space-y-8">
            {/* Query header when processing/completed */}
            {(hasResults || isProcessing) && (
              <div className="bg-white border-2 border-stone-200 rounded-xl p-6">
                <h2 className="text-sm font-semibold text-stone-500 mb-2">CURRENT QUERY</h2>
                <p className="text-lg text-stone-900">{currentQuery}</p>
              </div>
            )}

            {/* Chat Input */}
            {!hasResults && (
              <ChatInput onSubmit={handleQuerySubmit} isProcessing={isProcessing} />
            )}

            {/* Results Section */}
            {hasResults && (
              <div className="space-y-6">
                {/* Action buttons */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleGenerateReport}
                    className="px-6 py-3 bg-purple-900 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors flex items-center gap-2"
                  >
                    <span>📄</span>
                    Generate Full Report
                  </button>
                  <button
                    onClick={() => {
                      setHasResults(false);
                      setAgents([]);
                      setCurrentQuery('');
                    }}
                    className="px-6 py-3 bg-white border-2 border-stone-300 text-stone-700 font-medium rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    New Query
                  </button>
                </div>

                {/* Insight Cards */}
                <div className="grid grid-cols-1 gap-6">
                  <InsightCard
                    type="market"
                    title="Market Intelligence"
                    data={mockAgentResponses.market}
                  />
                  <InsightCard
                    type="patent"
                    title="Patent Landscape"
                    data={mockAgentResponses.patent}
                  />
                  <InsightCard
                    type="trials"
                    title="Clinical Trials Pipeline"
                    data={mockAgentResponses.trials}
                  />
                  <InsightCard
                    type="exim"
                    title="Trade & Manufacturing"
                    data={mockAgentResponses.exim}
                  />
                  <InsightCard
                    type="internal"
                    title="Internal Strategy Insights"
                    data={mockAgentResponses.internal}
                  />
                  <InsightCard
                    type="web"
                    title="Web Intelligence"
                    data={mockAgentResponses.web}
                  />
                </div>
              </div>
            )}

            {/* Loading state */}
            {isProcessing && (
              <div className="grid grid-cols-1 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <InsightCard key={i} loading={true} />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SECTION: Agent Timeline - Always visible when processing or showing results */}
          {(isProcessing || hasResults) && (
            <div className="lg:block">
              <AgentTimeline agents={agents} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

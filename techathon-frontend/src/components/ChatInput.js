'use client';

import { useState } from 'react';

/**
 * Large enterprise-style prompt input component
 * Handles user queries and triggers agent execution
 */
export default function ChatInput({ onSubmit, isProcessing }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isProcessing) {
      onSubmit(query);
    }
  };

  const exampleQueries = [
    "Find molecules for respiratory diseases with low competition and high patient burden in India",
    "Analyze patent landscape for Metformin repurposing in oncology",
    "Show clinical trials for GLP-1 agonists in cardiovascular indications",
    "Cross-compare trade vs trials for GLP-1 across APAC"
  ];

  return (
    <div className="w-full space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-stone-700 uppercase tracking-[0.08em]">Orchestrate your agents</p>
          <p className="text-sm text-stone-500">Ask one complex question — we route to Market, IP, Trials, Trade, and Internal agents.</p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-900">Live</span>
      </div>

      <form onSubmit={handleSubmit} className="relative glass-card border border-white/60 rounded-2xl">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about market trends, patent landscapes, clinical trials, trade flows, or internal signals..."
          className="w-full h-36 px-6 py-5 text-base rounded-2xl resize-none focus:outline-none bg-transparent placeholder:text-stone-400 text-stone-900"
          disabled={isProcessing}
        />
        <div className="absolute bottom-4 left-6 flex items-center gap-2 text-xs text-stone-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Multi-agent orchestration ready</span>
        </div>
        <button
          type="submit"
          disabled={!query.trim() || isProcessing}
          className="absolute bottom-4 right-4 px-6 py-3 bg-gradient-to-r from-purple-900 via-purple-700 to-fuchsia-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:bg-stone-300 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : 'Run Query'}
        </button>
      </form>

      {/* Example queries */}
      {!isProcessing && (
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-stone-500 font-semibold uppercase tracking-[0.12em]">Try</span>
          {exampleQueries.map((example, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(example)}
              className="text-xs text-stone-700 hover:text-purple-900 bg-white/70 hover:bg-purple-50 px-3 py-1.5 rounded-full transition-colors border border-stone-200 shadow-sm"
            >
              {example.length > 68 ? example.substring(0, 68) + '...' : example}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

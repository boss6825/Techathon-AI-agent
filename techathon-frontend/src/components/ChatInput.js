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
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about market trends, patent landscapes, clinical trials, or drug repurposing opportunities..."
          className="w-full h-32 px-6 py-4 text-base border-2 border-stone-300 rounded-xl resize-none focus:outline-none focus:border-purple-900 focus:ring-2 focus:ring-purple-100 transition-all placeholder:text-stone-400 bg-white"
          disabled={isProcessing}
        />
        <button
          type="submit"
          disabled={!query.trim() || isProcessing}
          className="absolute bottom-4 right-4 px-6 py-2.5 bg-purple-900 text-white text-sm font-medium rounded-lg hover:bg-purple-800 disabled:bg-stone-300 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing ? 'Processing...' : 'Run Query'}
        </button>
      </form>

      {/* Example queries */}
      {!isProcessing && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs text-stone-500 font-medium">Try:</span>
          {exampleQueries.map((example, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(example)}
              className="text-xs text-stone-600 hover:text-purple-900 bg-stone-100 hover:bg-purple-50 px-3 py-1.5 rounded-full transition-colors border border-stone-200"
            >
              {example.length > 60 ? example.substring(0, 60) + '...' : example}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

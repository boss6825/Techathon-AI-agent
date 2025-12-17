'use client';

/**
 * Real-time agent activity timeline
 * Shows which agents are running and their status
 */
export default function AgentTimeline({ agents }) {
  const statusColors = {
    idle: 'bg-stone-300',
    running: 'bg-amber-400 animate-pulse',
    completed: 'bg-emerald-500',
    error: 'bg-red-500',
  };

  const statusIcons = {
    idle: '○',
    running: '◐',
    completed: '●',
    error: '✕',
  };

  return (
    <div className="bg-white border-2 border-stone-200 rounded-xl p-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] overflow-y-auto">
      <h3 className="text-sm font-semibold text-stone-900 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-purple-900 rounded-full animate-pulse"></span>
        Agent Activity
      </h3>

      <div className="space-y-3">
        {agents.map((agent, idx) => (
          <div key={idx} className="flex items-start gap-3 pb-3 border-b border-stone-100 last:border-0">
            {/* Status indicator */}
            <div className="flex-shrink-0 mt-1">
              <div className={`w-3 h-3 rounded-full ${statusColors[agent.status]}`}></div>
            </div>

            {/* Agent info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-stone-900 truncate">
                {agent.name}
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                {agent.message}
              </p>
              {agent.timestamp && (
                <p className="text-xs text-stone-400 mt-1">
                  {agent.timestamp}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Log footer */}
      <div className="mt-4 pt-4 border-t border-stone-200">
        <p className="text-xs text-stone-400 text-center">
          System orchestrated by Master Agent
        </p>
      </div>
    </div>
  );
}

'use client';

/**
 * Card component for displaying agent insights
 * Supports different types: market, patent, trials, exim, internal, web
 */
export default function InsightCard({ type, title, data, loading }) {
  const typeStyles = {
    market: { bg: 'bg-blue-50', border: 'border-blue-200', icon: '📊' },
    patent: { bg: 'bg-amber-50', border: 'border-amber-200', icon: '⚖️' },
    trials: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: '🔬' },
    exim: { bg: 'bg-violet-50', border: 'border-violet-200', icon: '🌍' },
    internal: { bg: 'bg-rose-50', border: 'border-rose-200', icon: '📁' },
    web: { bg: 'bg-cyan-50', border: 'border-cyan-200', icon: '🔍' },
  };

  const style = typeStyles[type] || typeStyles.market;

  if (loading) {
    return (
      <div className="glass-card border border-white/60 rounded-2xl p-6 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-stone-200 rounded-lg"></div>
          <div className="h-6 bg-stone-200 rounded w-1/3"></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-stone-200 rounded w-full"></div>
          <div className="h-4 bg-stone-200 rounded w-5/6"></div>
          <div className="h-4 bg-stone-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-card border ${style.border} rounded-2xl p-6 card-elevated transition-all hover:-translate-y-0.5 hover:shadow-2xl`}>
      <div className="flex items-start gap-3 mb-4">
        <div className={`w-12 h-12 ${style.bg} rounded-xl flex items-center justify-center text-xl`}>
          {style.icon}
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-stone-500">Agent Insight</p>
          <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Summary */}
        {data.summary && (
          <p className="text-sm text-stone-700 leading-relaxed">{data.summary}</p>
        )}

        {/* Key insights */}
        {data.insights && data.insights.length > 0 && (
          <div className="space-y-2">
            {data.insights.map((insight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-purple-500 text-xs mt-1">●</span>
                <span className="text-sm text-stone-700">{insight}</span>
              </div>
            ))}
          </div>
        )}

        {/* Data table */}
        {data.table && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-50">
                  {data.table.headers.map((header, idx) => (
                    <th key={idx} className="text-left py-2.5 px-3 text-xs font-semibold text-stone-700">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.table.rows.map((row, idx) => (
                  <tr key={idx} className="border-t border-stone-100 last:border-0">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="py-2.5 px-3 text-stone-800">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* References */}
        {data.references && data.references.length > 0 && (
          <div className="pt-3 border-t border-stone-100">
            <p className="text-xs font-medium text-stone-500 mb-2">Sources:</p>
            <div className="space-y-1">
              {data.references.map((ref, idx) => (
                <a
                  key={idx}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-purple-900 hover:underline block"
                >
                  {ref.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

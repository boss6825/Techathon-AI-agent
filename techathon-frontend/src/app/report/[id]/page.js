'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { mockAgentResponses } from '@/lib/mockData';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Report preview page
 * Displays comprehensive pharmaceutical intelligence report
 */
export default function ReportPage({ params }) {
  const router = useRouter();

  const handleDownloadPDF = async () => {
    const element = document.getElementById('report-content');
    if (!element) return;

    try {
      // Show loading state if needed
      document.body.style.cursor = 'wait';

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#fafaf9', // match bg-stone-50
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`Intelligence_Report_${reportData.id}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      document.body.style.cursor = 'default';
    }
  };

  const reportData = {
    id: params.id || '1',
    title: "Respiratory Drug Repurposing Opportunity Analysis",
    molecule: "Montelukast + Budesonide Combination",
    generatedDate: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    query: "Find molecules for respiratory diseases with low competition and high patient burden in India"
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main id="report-content" className="max-w-5xl mx-auto px-6 py-8">
        {/* Report Header */}
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 text-white rounded-xl p-8 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-purple-200 text-sm font-medium mb-2">INTELLIGENCE REPORT #{reportData.id}</p>
              <h1 className="text-3xl font-bold mb-2">{reportData.title}</h1>
              <p className="text-purple-100 text-lg">{reportData.molecule}</p>
            </div>
            <div className="text-right">
              <p className="text-purple-200 text-sm">Generated</p>
              <p className="text-white font-medium">{reportData.generatedDate}</p>
            </div>
          </div>
          <div className="pt-4 border-t border-purple-600">
            <p className="text-purple-100 text-sm mb-1">Original Query:</p>
            <p className="text-white">{reportData.query}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8" data-html2canvas-ignore="true">
          <button
            onClick={handleDownloadPDF}
            className="px-6 py-3 bg-purple-900 text-white font-medium rounded-lg hover:bg-purple-800 transition-colors flex items-center gap-2"
          >
            <span>⬇</span>
            Download PDF Report
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-white border-2 border-stone-300 text-stone-700 font-medium rounded-lg hover:bg-stone-50 transition-colors"
          >
            Run New Query
          </button>
        </div>

        {/* Report Sections */}
        <div className="space-y-8">
          {/* Executive Summary */}
          <section className="bg-white border-2 border-stone-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4 pb-4 border-b-2 border-stone-200">
              Executive Summary
            </h2>
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-700 leading-relaxed mb-4">
                Our agentic AI analysis has identified a high-potential drug repurposing opportunity
                in the respiratory therapeutic space, specifically targeting chronic obstructive pulmonary
                disease (COPD) and severe asthma indications with combination therapy approaches.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The market opportunity is substantial, with the Indian respiratory market valued at
                $2.4B and growing at 8.2% CAGR. Patent landscape analysis reveals clear freedom-to-operate
                windows opening in Q2 2025, and clinical trial data supports efficacy in target populations.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
                <p className="text-sm font-semibold text-amber-900 mb-2">KEY RECOMMENDATION</p>
                <p className="text-sm text-amber-800">
                  Pursue 505(b)(2) pathway for novel fixed-dose combination with differentiated
                  delivery mechanism. Estimated development timeline: 18-24 months.
                </p>
              </div>
            </div>
          </section>

          {/* Market Intelligence */}
          <section className="bg-white border-2 border-blue-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl">
                📊
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Market Intelligence</h2>
            </div>
            <div className="space-y-4">
              <p className="text-stone-700">{mockAgentResponses.market.summary}</p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-900">$2.4B</p>
                  <p className="text-sm text-blue-700">Current Market Size</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-900">8.2%</p>
                  <p className="text-sm text-blue-700">Market CAGR</p>
                </div>
              </div>
              <ul className="space-y-2">
                {mockAgentResponses.market.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-stone-700">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Patent Landscape */}
          <section className="bg-white border-2 border-amber-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-2xl">
                ⚖️
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Patent Landscape & IP Strategy</h2>
            </div>
            <div className="space-y-4">
              <p className="text-stone-700">{mockAgentResponses.patent.summary}</p>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-amber-50 border-b-2 border-amber-200">
                      {mockAgentResponses.patent.table.headers.map((header, idx) => (
                        <th key={idx} className="text-left p-3 text-sm font-semibold text-stone-900">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockAgentResponses.patent.table.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-stone-200">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="p-3 text-stone-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Clinical Trials */}
          <section className="bg-white border-2 border-emerald-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-2xl">
                🔬
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Clinical Development Pipeline</h2>
            </div>
            <div className="space-y-4">
              <p className="text-stone-700">{mockAgentResponses.trials.summary}</p>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-emerald-50 border-b-2 border-emerald-200">
                      {mockAgentResponses.trials.table.headers.map((header, idx) => (
                        <th key={idx} className="text-left p-3 text-sm font-semibold text-stone-900">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockAgentResponses.trials.table.rows.map((row, idx) => (
                      <tr key={idx} className="border-b border-stone-200">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="p-3 text-stone-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Trade Analysis */}
          <section className="bg-white border-2 border-violet-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center text-2xl">
                🌍
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Trade & Manufacturing Analysis</h2>
            </div>
            <div className="space-y-4">
              <p className="text-stone-700">{mockAgentResponses.exim.summary}</p>
              <ul className="space-y-2">
                {mockAgentResponses.exim.insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-violet-600 font-bold">→</span>
                    <span className="text-stone-700">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Strategic Recommendations */}
          <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Strategic Recommendations</h2>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">1. Product Development Strategy</h3>
                <p className="text-stone-200 text-sm">
                  Pursue 505(b)(2) regulatory pathway for fixed-dose combination. Target differentiation
                  through novel delivery mechanism and patient-centric formulation improvements.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">2. Market Entry Timing</h3>
                <p className="text-stone-200 text-sm">
                  Launch aligned with Q2 2025 patent expiries. Secure manufacturing partnerships
                  for API supply chain resilience given 68% import dependency.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">3. Clinical Evidence Generation</h3>
                <p className="text-stone-200 text-sm">
                  Conduct India-specific bridging studies focusing on tropical asthma phenotypes.
                  Leverage real-world evidence to support payer value proposition.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Report Footer */}
        <div className="mt-12 pt-8 border-t-2 border-stone-200 text-center text-sm text-stone-500">
          <p>This report was generated by Agentic Pharma Intelligence Platform</p>
          <p className="mt-2">Confidential & Proprietary • For Internal Use Only</p>
        </div>
      </main>
    </div>
  );
}

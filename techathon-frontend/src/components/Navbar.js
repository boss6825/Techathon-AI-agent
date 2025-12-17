'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Top navigation bar for the application
 * Shows product branding and navigation links
 */
export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-900 via-purple-700 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-900/20">
            <span className="text-white font-bold text-base">A</span>
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold text-stone-900 group-hover:text-purple-900 transition-colors">
              Agentic Pharma Intelligence
            </p>
            <p className="text-xs text-stone-500">Strategy • Trials • IP • Trade</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive('/') ? 'bg-purple-100 text-purple-900' : 'text-stone-600 hover:text-purple-900'
              }`}
          >
            Console
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive('/about') ? 'bg-purple-100 text-purple-900' : 'text-stone-600 hover:text-purple-900'
              }`}
          >
            Architecture
          </Link>
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold shadow-lg shadow-emerald-500/20">
            Live AI Orchestration
          </span>
        </div>
      </div>
    </nav>
  );
}

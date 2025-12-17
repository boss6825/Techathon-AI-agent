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
    <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-lg font-semibold text-stone-900 group-hover:text-purple-900 transition-colors">
            Agentic Pharma Intelligence
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${isActive('/')
                ? 'text-purple-900'
                : 'text-stone-600 hover:text-stone-900'
              }`}
          >
            Console
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${isActive('/about')
                ? 'text-purple-900'
                : 'text-stone-600 hover:text-stone-900'
              }`}
          >
            Architecture
          </Link>
        </div>
      </div>
    </nav>
  );
}

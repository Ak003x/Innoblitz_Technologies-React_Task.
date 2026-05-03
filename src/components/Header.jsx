// components/Header.jsx
// The top bar with search, notifications, and user avatar.
"use client";

export default function Header({ title = "" }) {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-100">
      {/* Left side — page title (optional) */}
      <div className="text-sm text-gray-500">{title}</div>

      {/* Right side — icons and user */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M16.5 16.5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Bell Icon */}
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2z" fill="currentColor"/>
            <path d="M18 16v-5a6 6 0 10-12 0v5l-2 2v1h16v-1l-2-2z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>

        {/* Mail Icon */}
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>

        {/* User avatar + name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-bold">
              M
            </div>
          </div>
          <span className="text-sm font-medium text-gray-700">Mike</span>
        </div>
      </div>
    </header>
  );
}
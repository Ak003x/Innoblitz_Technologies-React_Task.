// components/Sidebar.jsx
// The dark navy sidebar on the left with the logo and navigation icons.
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation items — each has a path and an SVG icon
const navItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Analyze",
    path: "/analyze",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Results",
    path: "/results",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname(); // tells us the current URL path

  return (
    <aside className="fixed left-0 top-0 h-screen w-40 bg-[#1a2057] flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 overflow-hidden">
          <span className="text-[#1a2057] font-bold text-xs text-center leading-tight px-1">PYXIS</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 w-full px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center gap-1 py-3 px-2 rounded-xl transition-all ${
                isActive
                  ? "bg-white/10 text-orange-400"   // active: highlighted
                  : "text-white/60 hover:text-white hover:bg-white/5" // inactive
              }`}
            >
              {/* Icon */}
              <span className="text-current">{item.icon}</span>
              {/* Label */}
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
// app/development/page.jsx
// This is the detail view page — the table with all CRUD operations.
"use client";
import DataTable from "@/components/DataTable";

export default function DevelopmentPage() {
  return (
    <div>
      {/* Breadcrumb badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 bg-[#1a2057] text-white text-xs px-3 py-1.5 rounded-full">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M3 3l18 18M3 21L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Development
        </span>
      </div>

      {/* The full data table with CRUD */}
      <DataTable />
    </div>
  );
}
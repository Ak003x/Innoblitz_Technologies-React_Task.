// app/page.jsx
// The main dashboard page — shows the summary title, tab nav, and two pie charts.
"use client";
import { useSelector } from "react-redux";
import TabNav from "@/components/TabNav";
import PieChartCard from "@/components/PieChartCard";

export default function DashboardPage() {
  // Read chart data from Redux
  const { validateDesign, identifyGaps } = useSelector((s) => s.chart);

  return (
    <div>
      {/* Page title */}
      <h1 className="text-xl font-bold text-gray-800 mb-6">
        Validate Design with Code and Unit Test — Summary View
      </h1>

      {/* Tab navigation */}
      <TabNav />

      {/* Two pie charts side by side */}
      <div className="flex gap-6 flex-wrap">
        {/* Chart 1: Validate Design with Source Code */}
        <PieChartCard
          title={validateDesign.title}
          data={validateDesign.data}
          linkHref="/development"
        />

        {/* Chart 2: Identify Gaps in Unit Test Checklist */}
        <PieChartCard
          title={identifyGaps.title}
          data={identifyGaps.data}
          linkHref="/development"
        />
      </div>
    </div>
  );
}
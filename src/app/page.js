"use client";
import { useSelector } from "react-redux";
import TabNav from "@/components/TabNav";
import PieChartCard from "@/components/PieChartCard";

export default function DashboardPage() {
  // Chart data
  const { validateDesign, identifyGaps } = useSelector((s) => s.chart);

  return (
    <div>
      {/* Page title */}
      <h1 className="text-xl font-bold text-gray-800 mb-6">
        Validate Design with Code and Unit Test — Summary View
      </h1>

      {/* Tabs */}
      <TabNav />

      {/* Charts */}
      <div className="flex gap-6 flex-wrap">
        <PieChartCard
          title={validateDesign.title}
          data={validateDesign.data}
          linkHref="/development"
        />
        <PieChartCard
          title={identifyGaps.title}
          data={identifyGaps.data}
          linkHref="/development"
        />
      </div>
    </div>
  );
}

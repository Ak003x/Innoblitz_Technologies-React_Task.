"use client";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "@/redux/chartSlice";

// Tab config
const tabs = [
  { label: "Requirements", color: "orange" },
  { label: "Design", color: "blue" },
  { label: "Development", color: "blue" },
  { label: "Testing", color: "blue" },
  { label: "Training", color: "orange" },
];

export default function TabNav() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.chart.activeTab);

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-1 md:pb-0 md:gap-3 md:flex-wrap">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <button
            key={tab.label}
            onClick={() => dispatch(setActiveTab(tab.label))}
            className={`
              shrink-0 md:flex-1 min-w-30 px-4 py-3 md:py-4 rounded-xl text-sm font-medium
              flex items-center justify-between transition-all
              ${isActive
                ? "bg-[#1a2057] text-white shadow-md"
                : tab.color === "orange"
                  ? "bg-orange-50 text-orange-500 hover:bg-orange-100"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100"
              }
            `}
          >
            <span>{tab.label}</span>
            <span className="text-current opacity-60">›</span>
          </button>
        );
      })}
    </div>
  );
}

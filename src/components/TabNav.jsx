// components/TabNav.jsx
// The 5 tab buttons at the top: Requirements, Design, Development, Testing, Training
"use client";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "@/redux/chartSlice";

// Tab configuration
const tabs = [
  { label: "Requirements", color: "orange" },
  { label: "Design", color: "blue" },
  { label: "Development", color: "navy", active: true },
  { label: "Testing", color: "blue" },
  { label: "Training", color: "orange" },
];

export default function TabNav() {
  const dispatch = useDispatch();
  // Read the active tab from Redux store
  const activeTab = useSelector((state) => state.chart.activeTab);

  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <button
            key={tab.label}
            onClick={() => dispatch(setActiveTab(tab.label))}
            className={`
              flex-1 min-w-[120px] px-4 py-4 rounded-xl text-sm font-medium
              flex items-center justify-between transition-all
              ${isActive
                ? "bg-[#1a2057] text-white shadow-md"          // active tab: dark navy
                : tab.color === "orange"
                  ? "bg-orange-50 text-orange-500 hover:bg-orange-100"  // orange tabs
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100"        // blue tabs
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
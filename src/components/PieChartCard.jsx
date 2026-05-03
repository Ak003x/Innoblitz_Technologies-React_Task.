// components/PieChartCard.jsx
// Shows one pie chart card — we use this twice on the dashboard.
// Recharts is the library. PieChart → Pie → Cell is how you build it.
"use client";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Link from "next/link";

export default function PieChartCard({ title, data, linkHref = "/development" }) {
  // data looks like: [{ name: "...", value: 84, color: "#1e2a6e" }, ...]
  const mainValue = data[0]?.value; // the big percentage in the center

  return (
    <div className="bg-gray-50 rounded-2xl p-6 flex-1">
      {/* Card title */}
      <h3 className="text-sm font-semibold text-gray-700 mb-4">{title}</h3>

      {/* Chart + Legend layout */}
      <div className="flex flex-col items-center">
        {/* Recharts Pie Chart */}
        {/* PieChart: container, must have width + height */}
        <div className="relative">
          <PieChart width={220} height={220}>
            <Pie
              data={data}
              cx={110}              // center X
              cy={110}              // center Y
              innerRadius={0}       // 0 = filled pie, >0 = donut
              outerRadius={100}     // size of pie
              startAngle={90}       // where the first slice starts
              endAngle={-270}       // full 360 degrees going clockwise
              dataKey="value"       // which field in data[] is the slice size
            >
              {/* Cell = one slice of the pie, each gets its own color */}
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>

          {/* Big number in center — positioned absolutely over the chart */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-3xl font-bold text-white drop-shadow">
              {mainValue}%
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 w-full space-y-2">
          {data.map((entry, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
              {/* Color dot */}
              <span
                className="w-3 h-3 rounded-sm mt-0.5 flex-shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <span>{entry.name}</span>
            </div>
          ))}
        </div>

        {/* View Details button */}
        <Link
          href={linkHref}
          className="mt-4 px-4 py-2 bg-[#1a2057] text-white text-xs rounded-lg hover:bg-[#2a3577] transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
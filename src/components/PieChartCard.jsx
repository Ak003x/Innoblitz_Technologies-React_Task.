"use client";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Link from "next/link";

export default function PieChartCard({ title, data, linkHref = "/development" }) {
  const mainValue = data[0]?.value;

  return (
    <div className="bg-gray-50 rounded-2xl p-6 flex-1">
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-700 mb-4">{title}</h3>

      <div className="flex flex-col items-center">
        {/* Pie chart */}
        <div className="relative">
          <PieChart width={220} height={220}>
            <Pie
              data={data}
              cx={110}
              cy={110}
              innerRadius={0}
              outerRadius={100}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
          </PieChart>

          {/* Center value */}
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
              <span
                className="w-3 h-3 rounded-sm mt-0.5 shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <span>{entry.name}</span>
            </div>
          ))}
        </div>

        {/* View details link */}
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

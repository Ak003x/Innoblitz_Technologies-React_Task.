// redux/chartSlice.js
// This slice manages the dashboard chart data.
// It's simpler — just stores the two pie chart datasets.

import { createSlice } from "@reduxjs/toolkit";
import { chartData } from "@/lib/dummyData";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    validateDesign: chartData.validateDesign,
    identifyGaps: chartData.identifyGaps,
    activeTab: "Development", // which tab is currently selected
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = chartSlice.actions;
export default chartSlice.reducer;
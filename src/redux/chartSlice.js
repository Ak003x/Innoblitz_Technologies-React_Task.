import { createSlice } from "@reduxjs/toolkit";
import { chartData } from "@/lib/dummyData";

// Chart slice — dashboard pie chart data + active tab
const chartSlice = createSlice({
  name: "chart",

  // Initial state
  initialState: {
    validateDesign: chartData.validateDesign,
    identifyGaps: chartData.identifyGaps,
    activeTab: "Development",
  },

  // Reducers
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

// Exports
export const { setActiveTab } = chartSlice.actions;
export default chartSlice.reducer;

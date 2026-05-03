// redux/store.js
// This is the ROOT store — it combines all slices together.
// Think of it as the "central brain" of your application's data.

import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice";
import chartReducer from "./chartSlice";

export const store = configureStore({
  reducer: {
    // Every key here becomes a "namespace" in your state
    // You access table data as: state.table.records
    // You access chart data as: state.chart.validateDesign
    table: tableReducer,
    chart: chartReducer,
  },
});

export default store;
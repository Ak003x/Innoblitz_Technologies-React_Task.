"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

// Wraps app with Redux Provider for client components
export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

// providers/ReduxProvider.jsx
// IMPORTANT: In Next.js App Router, components are "Server Components" by default.
// Redux store ONLY works in "Client Components".
// This wrapper adds "use client" and wraps our app with the Redux Provider.
// The Provider makes the store available to every component inside it.

"use client"; // 👈 This makes it a Client Component

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function ReduxProvider({ children }) {
  return (
    // Provider makes store available to ALL child components
    <Provider store={store}>
      {children}
    </Provider>
  );
}
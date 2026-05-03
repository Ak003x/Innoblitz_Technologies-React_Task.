// app/layout.jsx
// This is the ROOT layout. It wraps EVERY page in your app.
// Perfect place for Sidebar + Header that stay on every page.
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata = {
  title: "PyxisAI Dashboard",
  description: "Validate Design with Code and Unit Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        {/* ReduxProvider wraps everything so Redux is available everywhere */}
        <ReduxProvider>
          {/* Sidebar — fixed on the left */}
          <Sidebar />

          {/* Main content — offset to the right by sidebar width (w-40 = 160px) */}
          <div className="ml-40 min-h-screen flex flex-col">
            {/* Header — full width across top */}
            <Header />

            {/* Page content — each page's content renders here */}
            <main className="flex-1 p-6">
              <div className="bg-white rounded-2xl p-6 min-h-full shadow-sm">
                {children}
              </div>
            </main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
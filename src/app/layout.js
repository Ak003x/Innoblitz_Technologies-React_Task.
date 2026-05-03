import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ReduxProvider from "@/providers/ReduxProvider";

// Metadata
export const metadata = {
  title: "Pyxis Dashboard",
  description: "Validate Design with Code and Unit Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <ReduxProvider>
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="ml-40 min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Page content */}
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

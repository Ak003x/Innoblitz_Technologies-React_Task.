import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import ClientLayout from "@/components/ClientLayout";

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
          <ClientLayout>{children}</ClientLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}

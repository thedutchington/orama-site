import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { InteractionProvider } from "./components/InteractionProvider";

export const metadata: Metadata = {
  title: "Orama - Tutoring, Simplified",
  description: "Professional tutoring for Beaumont high school students in Math, Science, and English.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <InteractionProvider>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </InteractionProvider>
      </body>
    </html>
  );
}

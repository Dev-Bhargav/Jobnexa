import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContextProvider from "./Context/store";
import "./globals.css";
import Navbar from "@/app/ui/Navbar";
import Sidebar from "@/app/ui/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import Quicknav from "./ui/Quicknav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Latest free job alert for govt jobs, railway jobs, bank jobs, defence jobs | Jobnexa",
  description: "Stay updated with free job alerts: government, railway, bank, and defense opportunities. Your job awaits!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-screen overflow-hidden relative bg-background",
          inter.className
        )}
      >
        <ContextProvider>
          <section className="w-full">
            <main className="h-screen flex">
              <Sidebar />
              <div className="w-full overflow-x-hidden xl:overflow-y-hidden">
                <Navbar />
                <div className="py-5 xl:px-4 flex flex-col items-center justify-evenly overflow-y-auto xl:flex-row xl:items-start xl:h-[calc(100vh-49px)]">
                  {children}
                  <Quicknav />
                  <SpeedInsights/>
                  <Analytics />
                </div>
              </div>
            </main>
          </section>
        </ContextProvider>
        <Toaster />
      </body>
    </html>
  );
}

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContextProvider from "./Context/store";
import "./globals.css";
import Navbar from "@/app/ui/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Quicknav from "./ui/Quicknav";
import JobContextProvider from "./Context/JobContext";
import Footer from "./ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jobnexa.in"),
  title: {
    default:
      "Latest free job alert for govt jobs, railway jobs, bank jobs, defence jobs | Jobnexa",
    template: `%s | Jobnexa`,
  },
  description:
    "Stay updated with free job alerts: government, railway, bank, and defense opportunities. Your job awaits!",
  other: {
    "google-site-verification": "QSrAOhoyk0L3iQcdhRFFwDPkdnHCRSObFHGgbgSzCSg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(`relative `, inter.className)}>
        <ContextProvider>
          <JobContextProvider>
            <div className="flex">
              <div className="w-full relative">
                <Navbar />
                <div className="xs:mt-10 xl:px-4 flex flex-col items-center justify-around xl:flex-row xl:items-start">
                  {children}
                  <Quicknav />
                  <SpeedInsights />
                  <Analytics />
                </div>
                <Footer />
              </div>
            </div>
          </JobContextProvider>
        </ContextProvider>
      </body>
    </html>
  );
}

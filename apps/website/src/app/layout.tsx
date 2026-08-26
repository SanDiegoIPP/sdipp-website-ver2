import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const GrainientBackground = dynamic(() => import("@/components/ui/GrainientBackground"));

const rethinkSans = Rethink_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "San Diego Injury Prevention Program",
    template: "%s | SDIPP",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${rethinkSans.variable} font-sans antialiased relative bg-white`}>
        <GrainientBackground />
        {children}
      </body>
    </html>
  );
}

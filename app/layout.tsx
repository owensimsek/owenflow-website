import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "./components/AnalyticsProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OwenFlow — Know where your money goes",
  description:
    "Manual tracking for income, expenses, and debt. No bank connections — just a clear picture of where you stand.",
  metadataBase: new URL("https://owenflow.com"),
  alternates: {
    canonical: "https://owenflow.com",
  },
  openGraph: {
    title: "OwenFlow — Know where your money goes",
    description:
      "Manual tracking for income, expenses, and debt. No bank connections — just a clear picture of where you stand.",
    type: "website",
    url: "https://owenflow.com",
    siteName: "OwenFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "OwenFlow — Know where your money goes",
    description:
      "Manual tracking for income, expenses, and debt. No bank connections — just a clear picture of where you stand.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}

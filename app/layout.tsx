import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OwenFlow — Know where your money goes",
  description:
    "Track income, expenses, and debt in one simple, intentional flow. OwenFlow is a personal finance app built for clarity.",
  metadataBase: new URL("https://owenflow.com"),
  openGraph: {
    title: "OwenFlow — Know where your money goes",
    description:
      "Track income, expenses, and debt in one simple, intentional flow.",
    type: "website",
    url: "https://owenflow.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "OwenFlow — Know where your money goes",
    description:
      "Track income, expenses, and debt in one simple, intentional flow.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}

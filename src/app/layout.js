import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "XPO | One Step Solution for All Investment",
  description: "Your Gateway to FOREX, CFD, and CRYPTO Mutual Index Funds. High-performance, institutional-grade investment platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}

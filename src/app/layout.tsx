import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home Page - Zeeofor Technologies",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="font-trebuchetMs antialiased flex flex-col justify-center items-center h-full border-[10px] border-[#097969]"
    >
      <body className="flex flex-col h-full bg-[#097969]">
        <Header />
        <main className="flex-grow overflow-auto max-w-[1280px] border-x-[5px] border-black bg-[url('/background-green-square-pattern.jpg')] bg-contain bg-repeat bg-center p-4">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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
      className="font-trebuchetMs antialiased flex flex-col h-full border-[10px] border-[#097969]"
    >
      <body className="flex flex-col h-full border-[5px] border-black px-4 bg-[url('/background-green-square-pattern.jpg')] bg-contain bg-repeat bg-center">
        <Header />
        <main className="flex-grow overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

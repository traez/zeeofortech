import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "Zeeofor Technologies",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="border-[1rem] border-[bisque] h-full">
      <body className="font-trebuchetMs antialiased flex flex-col h-full border-[3px] border-black">
        {children}
      </body>
    </html>
  );
}

// <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
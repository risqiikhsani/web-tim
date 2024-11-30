import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "@/components/ui/toaster"

import Footer from "./_page/footer";
import NavBar from "@/components/navbar";
import TopNavbar from "@/components/top-navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <div className="bg-gradient-to-r bg-white dark:bg-gradient-to-r dark:from-black dark:to-slate-900 w-full min-h-screen">
          <TopNavbar/>
          <div className="container mx-auto py-28 p-2">
          {children}
          </div>
          <Footer/>
          <Toaster />
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}

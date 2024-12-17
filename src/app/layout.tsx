import { ThemeProvider } from "@/components/theme-provider";
import TopNavbar from "@/components/top-navbar";
import { Toaster } from "@/components/ui/sonner";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./(homepage)/_page/footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ChatBotButton from "@/components/chat-bot-button";

export const metadata: Metadata = {
  // title: {
  //   default: "TIMCorp",
  //   template: "%s | Your Brand",
  // },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
  title: "TIMCorp website",
  description: "The cloud consulting company.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body
        className={`
          subpixel-antialiased 
          min-h-screen 
          bg-gradient-to-br 
          from-white 
          via-gray-50 
          to-gray-100 
          dark:from-black 
          dark:via-slate-900 
          dark:to-slate-950 
          text-foreground 
          selection:bg-primary 
          selection:text-primary-foreground
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // defaultTheme="system"
          // enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col">
            <TopNavbar />

            <main className="container mx-auto py-28 px-2 md:px-0 max-w-7xl">{children}</main>
            <Analytics />
            <Footer />
            <ChatBotButton/>
            <Toaster />
          </div>
        </ThemeProvider>

        {/* Optional: Add smooth scroll behavior */}
        {/* <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style> */}
      </body>
    </html>
  );
}

import { ThemeProvider } from "@/components/theme-provider";
import TopNavbar from "@/components/top-navbar";
import { Toaster } from "@/components/ui/sonner";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Footer from "./_page/footer";
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  // title: {
  //   default: "TIMCorp",
  //   template: "%s | Your Brand",
  // },
  title:"TIMCorp website",
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body
        className={`
          antialiased 
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
          defaultTheme="dark"
          // defaultTheme="system"
          // enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col">
            <TopNavbar />

            <main className="container mx-auto py-24 px-2">{children}</main>
            <Analytics />
            <Footer />

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

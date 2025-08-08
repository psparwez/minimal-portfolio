import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'
import { Analytics } from "@vercel/analytics/next"

const inter = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Alex Developer - Portfolio",
    template: "%s | Alex Developer",
  },
  description: "Full Stack Developer & UI/UX Designer Portfolio of Alex — building scalable, elegant web apps with React, Node.js, and design precision.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "Portfolio",
    "Alex Developer",
    "Web Developer",
    "UI/UX Designer",
  ],
  authors: [{ name: "Ps Parwez", url: "https://github.com/psparwez" }],
  creator: "Ps Parwez",
  metadataBase: new URL("https://minimal-portfolio-ps.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://minimal-portfolio-ps.vercel.app",
    title: "Alex Developer - Portfolio",
    description:
      "Explore the portfolio of Alex, a full stack developer focused on performance, scalability, and clean UI/UX.",
    siteName: "Alex Developer Portfolio",
    images: [
      {
        url: "/og_bannerr.jpeg",
        width: 1200,
        height: 630,
        alt: "Alex Developer Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Developer - Portfolio",
    description:
      "Full Stack Developer & UI/UX Designer Portfolio of Alex.",
    creator: "@psparwez",
    images: ["/og_bannerr.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}

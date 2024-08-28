import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ProxyAgent, setGlobalDispatcher } from "undici";

import { cn } from "@randomkits/ui";
import { ThemeProvider, ThemeToggle } from "@randomkits/ui/theme";
import { Toaster } from "@randomkits/ui/toast";

import "~/app/globals.css";

import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { env } from "~/env";

// proxy agent for development
if (process.env.NODE_ENV === "development") {
  setGlobalDispatcher(new ProxyAgent("http://127.0.0.1:7890"));
}

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://turbo.t3.gg"
      : "http://localhost:3000",
  ),
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
  openGraph: {
    title: "Create T3 Turbo",
    description: "Simple monorepo with shared backend for web & mobile apps",
    url: "https://create-t3-turbo.vercel.app",
    siteName: "Create T3 Turbo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jullerino",
    creator: "@jullerino",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>
      </head>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="flex-1 bg-muted/40">
            <main className="container py-8">{props.children}</main>
          </div>
          <Footer />
          <div className="fixed bottom-4 right-4">
            <ThemeToggle />
          </div>

          <Toaster />
        </ThemeProvider>

        <GoogleAnalytics gaId="G-WXBWZ34FTM" />
      </body>
    </html>
  );
}

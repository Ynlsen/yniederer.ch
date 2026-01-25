"use client";

import { ThemeScript } from "@/components/ThemeScript";

export default function LandingLayout({
    children 
  }: { 
    children: React.ReactNode; 
  }) {
    return (
      <html suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <ThemeScript />
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }
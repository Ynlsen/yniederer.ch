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
          <ThemeScript />
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }
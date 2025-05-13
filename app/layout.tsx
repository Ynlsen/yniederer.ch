import type { Metadata } from "next";
import "./globals.css";

//english metadata
export const metadata: Metadata = {
  title: "Yannick Niederer - Website & Portfolio",
  description: "Portfolio and projects of Yannick Niederer, a Computer Science bachelor student at ETH Zurich.",
  keywords: [
    "Yannick Niederer",
    "ETH Zurich",
    "Computer Science",
    "Informatik",
    "CS student",
    "bachelor student",
    "portfolio",
    "projects",
    "software development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

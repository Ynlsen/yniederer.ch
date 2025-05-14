import type { Metadata } from "next";
import "../globals.css";

//german metadata
export const metadata: Metadata = {
  title: "Yannick Niederer - Webseite & Portfolio",
  description: "Portfolio und Projekte von Yannick Niederer, Bachelorstudent der Informatik an der ETH Zürich.",
  keywords: [
    "Yannick Niederer",
    "ETH Zürich",
    "Informatik",
    "Computer Science",
    "CS Student",
    "Bachelorstudent",
    "Portfolio",
    "Projekte",
    "Softwareentwicklung",
  ],
};

export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  );
}
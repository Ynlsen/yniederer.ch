import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yannick Niederer - Kontakt",
  description: "Kontaktseite von Yannick Niederer.",
  authors: [{ name: "Yannick Niederer", url: "https://yniederer.ch" }],
  alternates: {
    canonical: "https://yniederer.ch/de/contact",
    languages: {
      en: "https://yniederer.ch/en/contact",
      de: "https://yniederer.ch/de/contact",
    },
  },
  openGraph: {
    title: "Yannick Niederer - Kontakt",
    description: "Kontaktseite von Yannick Niederer.",
    url: "https://yniederer.ch/de/contact",
    siteName: "Yannick Niederer",
    images: [{ url: "/YannickNiederer.png", width: 3024, height: 4032, alt: "Yannick Niederer" }],
    locale: "de_CH",
    type: "website",
  },
};

export default function DeContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yannick Niederer - Contact",
  description: "Contact page of Yannick Niederer.",
  authors: [{ name: "Yannick Niederer", url: "https://yniederer.ch" }],
  alternates: {
    canonical: "https://yniederer.ch/en/contact",
    languages: {
      en: "https://yniederer.ch/en/contact",
      de: "https://yniederer.ch/de/contact",
    },
  },
  openGraph: {
    title: "Yannick Niederer - Contact",
    description: "Contact page of Yannick Niederer.",
    url: "https://yniederer.ch/en/contact",
    siteName: "Yannick Niederer",
    images: [{ url: "/YannickNiederer.png", width: 3024, height: 4032, alt: "Yannick Niederer" }],
    locale: "en_US",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
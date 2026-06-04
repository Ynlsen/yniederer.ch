import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kryptowährungen - Technologie und Anwendungsmöglichkeiten heute und in der Zukunft",
  description: "Diese Maturaarbeit untersucht die Technologie und Anwendungsmöglichkeiten von Kryptowährungen. Sie bietet eine tiefgehende Analyse der Technologie hinter Bitcoin und Ethereum, inklusive Kryptografie (Elliptic Curve Cryptography, SHA256), Smart Contracts und Konsensmechanismen (Proof of Work vs. Proof of Stake). Ein zentraler praktischer Teil der Arbeit ist die Programmierung einer eigenen Kryptowährung (YNL) als ERC-20 Token mittels Solidity. Der Token wurde erfolgreich auf der Polygon Sidechain veröffentlicht und auf der dezentralen Handelsplattform Uniswap in einem Liquiditätspool bereitgestellt. Abschliessend wird die zukünftige Rolle von Kryptowährungen in der Gesellschaft kritisch beleuchtet.",
  authors: [{ name: "Yannick Niederer", url: "https://yniederer.ch" }],
  openGraph: {
    title: "Kryptowährungen - Maturaarbeit Yannick Niederer",
    description: "Tiefgehende Analyse der Technologie hinter Bitcoin und Ethereum sowie die Programmierung des YNL Tokens auf der Polygon Sidechain.",
    url: "https://yniederer.ch/de/maturaarbeit",
    type: "article",
    publishedTime: "2022-12-05",
    authors: ["https://yniederer.ch"],
  },
};

const Schema = {
  "@context": "https://schema.org",
  "@type": "Thesis",
  "name": "Kryptowährungen - Technologie und Anwendungsmöglichkeiten heute und in der Zukunft",
  "author": { "@id": "https://yniederer.ch/#person" },
  "datePublished": "2022-12-05",
  "inSupportOf": "Matura",
  "encodingFormat": "application/pdf",
  "url": "https://yniederer.ch/Maturaarbeit_Kryptowährungen_YannickNiederer.pdf",
  "abstract": "Diese Maturaarbeit untersucht die Technologie und Anwendungsmöglichkeiten von Kryptowährungen. Sie bietet eine tiefgehende Analyse der Technologie hinter Bitcoin und Ethereum, inklusive Kryptografie (Elliptic Curve Cryptography, SHA256), Smart Contracts und Konsensmechanismen (Proof of Work vs. Proof of Stake). Ein zentraler praktischer Teil der Arbeit ist die Programmierung einer eigenen Kryptowährung (YNL) als ERC-20 Token mittels Solidity. Der Token wurde erfolgreich auf der Polygon Sidechain veröffentlicht und auf der dezentralen Handelsplattform Uniswap in einem Liquiditätspool bereitgestellt. Abschliessend wird die zukünftige Rolle von Kryptowährungen in der Gesellschaft kritisch beleuchtet.",
  "inLanguage": "de-CH"
};

export default function MaturaarbeitPage() {
  return (
    <div className="w-full h-screen m-0 p-0">
      <script
        id="thesis-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema) }}
      />
      <iframe
        src="/Maturaarbeit_Kryptowährungen_YannickNiederer.pdf"
        className="w-full h-full border-none"
        title="Kryptowährungen - Technologie und Anwendungsmöglichkeiten heute und in der Zukunft"
      ></iframe>
    </div>
  );
}
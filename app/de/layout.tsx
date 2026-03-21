import type { Metadata } from "next";
import Navbar from "./navbar";
import "../globals.css";

//german metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://yniederer.ch"),
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
    authors: [{ name: "Yannick Niederer", url: "https://yniederer.ch" }],
    openGraph: {
      title: "Yannick Niederer - Webseite & Portfolio",
      description: "Portfolio und Projekte von Yannick Niederer, Bachelorstudent der Informatik an der ETH Zürich.",
      url: "https://yniederer.ch/de",
      siteName: "Yannick Niederer",
      images: [
        {
          url: "/avatar.jpg",
          width: 1024,
          height: 1024,
          alt: "Yannick Niederer",
        },
      ],
      locale: "de_CH",
      type: "website",
    },
  };
}

const Schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://yniederer.ch/#person",
      name: "Yannick Niederer",
      givenName: "Yannick",
      familyName: "Niederer",
      image: "https://yniederer.ch/avatar.jpg",
      description: [
        { "@value": "Computer Science bachelor student at ETH Zurich", "@language": "en" },
        { "@value": "Bachelorstudent der Informatik an der ETH Zürich", "@language": "de" }
      ],
      jobTitle: [
        { "@value": "Bachelor Student", "@language": "en" },
        { "@value": "Bachelorstudent", "@language": "de" }
      ],
      email: "mailto:yannick.niederer@shinternet.ch",
      url: "https://yniederer.ch",
      sameAs: [
        "https://github.com/Ynlsen",
        "https://www.linkedin.com/in/yannick-niederer/"
      ],
      gender: "Male",
      birthDate: "2004-11-22",
      nationality: "Switzerland",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Schaffhausen",
        addressCountry: "CH"
      },
      memberOf: {
        "@type": "CollegeOrUniversity",
        name: "ETH Zurich",
        url: "https://ethz.ch"
      },
      knowsLanguage: ["de", "en", "de-CH"]
    },
    {
      "@type": "WebSite",
      "@id": "https://yniederer.ch/#website-de",
      "name": "Yannick Niederer - Webseite & Portfolio",
      "url": "https://yniederer.ch/de",
      "description": "Portfolio und Projekte von Yannick Niederer, Bachelorstudent der Informatik an der ETH Zürich.",
      "publisher": { "@id": "https://yniederer.ch/#person" },
      "inLanguage": "de"
    }
  ]
};

export default function DeRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema) }}
        />
        <link rel="canonical" href="https://yniederer.ch/de/" />
        <link rel="alternate" hrefLang="de" href="https://yniederer.ch/de/" />
        <link rel="alternate" hrefLang="en" href="https://yniederer.ch/en/" />
      </head>
      <body className="bg-black overflow-x-hidden">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
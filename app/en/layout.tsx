import type { Metadata } from "next";
import Navbar from "./navbar";
import "../globals.css";

//english metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
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
    authors: [{ name: "Yannick Niederer", url: "https://yniederer.ch" }],
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
        { "@value": "Bachelorstudent der Informatik an der ETH Zürich",  "@language": "de" }
      ],
      jobTitle: [
        { "@value": "Bachelor Student", "@language": "en" },
        { "@value": "Bachelorstudent",  "@language": "de" }
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
      knowsLanguage: ["de","en","de-CH"]
    },
    {
      "@type": "WebSite",
      "@id": "https://yniederer.ch/#website-en",
      "name": "Yannick Niederer - Website & Portfolio",
      "url": "https://yniederer.ch/en",
      "description": "Portfolio and projects of Yannick Niederer, a Computer Science bachelor student at ETH Zurich.",
      "publisher": { "@id": "https://yniederer.ch/#person" },
      "inLanguage": "en"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema) }}
        />
      </head>
      <body className="bg-black overflow-hidden">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
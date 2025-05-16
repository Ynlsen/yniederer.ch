import type { Metadata } from "next";
import "../globals.css";

//german metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
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
  };
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yannick Niederer",
  givenName: "Yannick",
  familyName: "Niederer",
  image: "/avatar.jpg",
  description: "Bachelorstudent der Informatik an der ETH Zürich",
  jobTitle: "Bachelorstudent",
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
};

export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
      <script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
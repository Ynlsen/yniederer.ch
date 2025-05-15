import type { Metadata } from "next";
import "../globals.css";

//english metadata
export async function generateMetadata(): Promise<Metadata> {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yannick Niederer",
    givenName: "Yannick",
    familyName: "Niederer",
    image: "/avatar.jpg",
    description: "Computer Science bachelor student at ETH Zurich",
    jobTitle: "Bachelor Student",
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
    other: {
      "application/ld+json": JSON.stringify(personSchema)
    }
  };
}

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

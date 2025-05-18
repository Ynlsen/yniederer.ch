import type { Metadata } from "next";
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yannick Niederer",
  givenName: "Yannick",
  familyName: "Niederer",
  image: "https://yniederer.ch/avatar.jpg",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-black">
        <nav className="fixed w-full top-0 left-0">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="space-x-8">
                <a href="/en" className="text-cyan hover:text-cyanL">Home</a>
                <a href="/en/projects" className="text-purple hover:text-purpleL">Projects</a>
              </div>
              <div className="space-x-8">
                <a href="/en" className="text-cyan hover:text-cyanL">EN</a>
                <a href="/de" className="text-purple hover:text-purpleL">DE</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

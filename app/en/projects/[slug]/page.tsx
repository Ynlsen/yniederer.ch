import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug, "en");
    return {
      metadataBase: new URL("https://yniederer.ch"),
      title: `${post.title} - Yannick Niederer`,
      description: post.description,
      authors: [{ name: "Yannick Niederer", url: "https://yniederer.ch" }],
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        authors: ["Yannick Niederer"],
        publishedTime: post.date,
        images: post.thumbnail ? [{ url: `https://yniederer.ch${post.thumbnail}` }] : [],
        locale: "en",
        url: `https://yniederer.ch/en/projects/${slug}`,
      },
      alternates: {
        canonical: `https://yniederer.ch/en/projects/${slug}`,
        languages: {
          en: `https://yniederer.ch/en/projects/${slug}`,
          de: `https://yniederer.ch/de/projects/${slug}`,
        },
      },
    };
  } catch {
    return { title: "Project Not Found" };
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug, "en");
  } catch {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.thumbnail ? `https://yniederer.ch${post.thumbnail}` : undefined,
    datePublished: post.date,
    author: {
      "@type": "Person",
      "@id": "https://yniederer.ch/#person",
      name: "Yannick Niederer",
      url: "https://yniederer.ch",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://yniederer.ch/#person",
      name: "Yannick Niederer",
    },
    inLanguage: "en",
    mainEntityOfPage: `https://yniederer.ch/en/projects/${slug}`,
  };

  return (
    <main className="min-h-screen flex flex-col items-center py-24 px-4">
      <div className="fixed -z-10 -top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]" />
      <div className="fixed -z-10 -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple/10 rounded-full blur-[100px] animate-[pulse_10s_ease_infinite]" />
      <div className="fixed -z-10 inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="w-full max-w-4xl">
        {post.thumbnail && (
          <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-2xl mb-8">
            <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan via-purple to-cyan">
            {post.title}
          </span>
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
          <span>Yannick Niederer</span>
          <div className="h-4 w-px bg-gray-600" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric", month: "long", day: "numeric",
            })}
          </time>
          {post.github && (
            <>
              <div className="h-4 w-px bg-gray-600" />
              <a href={post.github} className="text-purple hover:text-purpleL duration-300 text-base font-bold">
                GitHub Repo →
              </a>
            </>
          )}
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}

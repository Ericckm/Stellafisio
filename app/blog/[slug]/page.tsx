import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CTAFinal from "@/components/sections/CTAFinal";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { articleSchema } from "@/lib/schema";

const WHATSAPP = "5515996758942";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.keyword],
    alternates: {
      canonical: `https://stellasobral.com.br/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);
  const waMsg = encodeURIComponent(
    `Olá! Li o artigo "${post.title}" e gostaria de agendar uma avaliação domiciliar.`
  );

  return (
    <>
      <JsonLd schema={articleSchema(post)} />

      <div className="bg-creme min-h-screen">

        {/* Article header */}
        <header className="bg-verde py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="section-label text-terra mb-4 block">{post.keyword}</span>
            <h1
              className="font-heading font-300 text-creme leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-creme/60">
              <time dateTime={post.date} className="font-body text-sm">
                {formatDate(post.date)}
              </time>
              <span aria-hidden="true">·</span>
              <span className="font-body text-sm">{post.readTime} min de leitura</span>
              <span aria-hidden="true">·</span>
              <span className="font-body text-sm">Stella Sobral · Fisioterapeuta</span>
            </div>
          </div>
        </header>

        {/* Content + sidebar */}
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">

            {/* Article body */}
            <article>
              {/* Intro */}
              {post.intro.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`font-reading text-lg font-400 leading-relaxed mb-5 ${i === 0 ? "text-charcoal/90 border-l-4 border-terra pl-5" : "text-muted"}`}
                >
                  {para}
                </p>
              ))}

              {/* Sections */}
              <div className="mt-10 space-y-10">
                {post.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-reading text-2xl font-600 text-verde leading-tight mb-4">
                      {section.heading}
                    </h2>
                    {section.body.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="font-reading text-base font-400 text-charcoal/80 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{
                          __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                        }}
                      />
                    ))}
                  </section>
                ))}
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="mt-16 pt-10 border-t border-line">
                  <p className="section-label text-muted mb-6 block">Continue lendo</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="group p-5 rounded-xl border border-line hover:border-verde/30 hover:shadow-md transition-all duration-200 bg-white"
                      >
                        <p className="font-heading text-base font-700 text-verde group-hover:text-verde-light leading-tight mb-2 transition-colors">
                          {rel.title}
                        </p>
                        <p className="font-body text-xs text-muted">{rel.readTime} min de leitura</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-verde/15 bg-verde/5 p-6">
                <p className="font-heading text-lg font-600 text-verde leading-tight mb-2">
                  Pronto para tratar sua dor?
                </p>
                <p className="font-body text-sm text-muted leading-relaxed mb-5">
                  Avaliação domiciliar em São Paulo. Sem sair de casa, sem fila, sem encaminhamento.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-verde text-creme font-body font-500 text-sm px-5 py-3 rounded-full hover:bg-verde-light transition-colors duration-200 w-full"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar pelo WhatsApp
                </a>
                <p className="text-center font-body text-xs text-muted mt-3">Sem encaminhamento necessário</p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <CTAFinal />
    </>
  );
}

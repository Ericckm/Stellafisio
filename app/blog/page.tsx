import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Fisioterapia Domiciliar SP | Stella Sobral",
  description:
    "Artigos sobre fisioterapia domiciliar, dor lombar, reabilitação pós-cirúrgica e saúde para idosos em São Paulo. Conteúdo por Stella Sobral, fisioterapeuta.",
  alternates: {
    canonical: "https://stellasobralfisioterapia.com.br/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-creme min-h-screen pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-4xl mx-auto px-6">

        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Blog</span>
            <h1
              className="font-heading font-300 text-verde leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Fisioterapia na prática:<br />
              <em className="font-600 not-italic">artigos que orientam sua recuperação</em>
            </h1>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <article className="group rounded-2xl border border-line bg-white hover:shadow-lg hover:shadow-verde/5 transition-all duration-300 overflow-hidden">
                <div className="h-1 w-full" style={{ backgroundColor: "#0099CC" }} aria-hidden="true" />
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <time dateTime={post.date} className="section-label text-muted">
                      {formatDate(post.date)}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-line" aria-hidden="true" />
                    <span className="section-label text-muted">{post.readTime} min de leitura</span>
                  </div>
                  <h2 className="font-heading text-2xl font-700 text-verde leading-tight mb-3 group-hover:text-verde-light transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="font-reading text-base font-400 text-muted leading-relaxed mb-5 max-w-2xl">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-body text-sm font-500 text-verde hover:text-terra transition-colors duration-200 group/link"
                    aria-label={`Ler artigo completo: ${post.title}`}
                  >
                    Ler artigo completo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

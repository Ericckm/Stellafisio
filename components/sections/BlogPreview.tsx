import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-creme-2 py-20 md:py-28" aria-label="Artigos sobre fisioterapia">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Blog</span>
            <h2
              className="font-heading font-300 text-verde leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Artigos sobre fisioterapia<br />
              <em className="font-600 not-italic">para ajudar na sua recuperação</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <article className="group flex flex-col h-full rounded-2xl border border-line bg-white hover:shadow-xl hover:shadow-verde/5 transition-all duration-300 overflow-hidden">
                <div
                  className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: "#0099CC" }}
                  aria-hidden="true"
                />
                <div className="flex flex-col flex-1 p-6">
                  <time
                    dateTime={post.date}
                    className="section-label text-muted mb-3 block"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h3 className="font-heading text-xl font-700 text-verde leading-tight mb-3">
                    {post.title}
                  </h3>
                  <p className="font-reading text-[0.875rem] font-400 text-muted leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-body text-sm font-500 text-verde hover:text-terra transition-colors duration-200 group/link"
                    aria-label={`Ler artigo: ${post.title}`}
                  >
                    Ler artigo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350}>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-sm font-500 text-verde border border-verde/30 hover:border-verde hover:bg-verde hover:text-creme px-6 py-2.5 rounded-full transition-all duration-200"
            >
              Ver todos os artigos
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

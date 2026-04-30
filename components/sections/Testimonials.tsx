import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Maria Clara F.",
    specialty: "Pós-cirúrgica — Joelho",
    quote: "Fiz a cirurgia do LCA e em duas semanas já estava recebendo a Stella em casa. A recuperação foi muito mais rápida do que eu esperava. Sem o cansaço do deslocamento, conseguia focar 100% no tratamento.",
    rating: 5,
  },
  {
    name: "Roberto A.",
    specialty: "Geriatria — meu pai, 82 anos",
    quote: "Meu pai teve muito medo de sair de casa após a fratura. A Stella trouxe toda a confiança e profissionalismo até a nossa porta. Em dois meses ele voltou a caminhar com segurança.",
    rating: 5,
  },
  {
    name: "Priscila M.",
    specialty: "Dores Crônicas — Lombalgia",
    quote: "Convivia com dor lombar há três anos. A Stella identificou a causa em poucas sessões e montou um plano que finalmente fez diferença. Hoje tenho qualidade de vida de volta.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-creme py-20 md:py-28" aria-label="Depoimentos de pacientes">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Histórias reais</span>
            <h2
              className="font-heading font-300 text-verde leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              O que dizem<br />
              <em className="font-600 not-italic">nossos pacientes</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex flex-col h-full p-7 rounded-2xl bg-creme-2 border border-line hover:border-verde/20 transition-all duration-300 hover:shadow-lg hover:shadow-verde/5">

                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${t.rating} estrelas`} role="img">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#C4714A" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="font-reading text-[1.05rem] font-400 text-charcoal leading-relaxed flex-1 mb-6">
                  <span className="text-terra font-600 text-2xl leading-none mr-1" aria-hidden="true">"</span>
                  {t.quote}
                  <span className="text-terra font-600 text-2xl leading-none ml-1" aria-hidden="true">"</span>
                </blockquote>

                <figcaption className="border-t border-line pt-4">
                  <p className="font-body font-500 text-sm text-verde">{t.name}</p>
                  <p className="font-body text-xs text-muted">{t.specialty}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

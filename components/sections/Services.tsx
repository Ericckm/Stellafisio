import Link from "next/link";
import Reveal from "@/components/Reveal";

const WHATSAPP = "5515996758942";

const services = [
  {
    slug: "reabilitacao",
    accent: "#003854",
    tag: "Traumato-Ortopedia",
    title: "Reabilitação Especializada no seu Lar",
    description:
      "Cada lesão deixa uma marca — e cada recuperação merece um plano feito só para ela. Conduzimos reabilitação traumato-ortopédica estruturada em fases, com critérios clínicos que avançam no ritmo da sua biologia, não do calendário.",
    bullets: ["Fraturas e luxações", "Rupturas ligamentares (LCA, LCP)", "Lesões musculares e tendinopatias", "Dor lombar mecânica aguda"],
    cta: "Quero me reabilitar em casa",
  },
  {
    slug: "fisioterapia-pos-operatoria",
    accent: "#0099CC",
    tag: "Pós-Cirúrgica",
    title: "Pós-Operatório Sem Sair de Casa",
    description:
      "A cirurgia é o começo — a fisioterapia é o que define o resultado final. Cada sessão em domicílio elimina o desgaste dos deslocamentos e mantém você focado no que realmente importa: recuperar função e ganhar qualidade de vida.",
    bullets: ["Artroplastia de joelho e quadril", "Reconstrução de LCA", "Cirurgias de ombro e coluna", "Osteossínteses e fraturas"],
    cta: "Recuperar em casa",
  },
  {
    slug: "fisioterapia-para-idosos",
    accent: "#006E90",
    tag: "Geriatria",
    title: "Autonomia e Segurança para a Terceira Idade",
    description:
      "Perder mobilidade não é inevitável — é tratável. Trabalhamos equilíbrio, força e confiança nos movimentos do dia a dia diretamente no ambiente onde o risco de queda é real.",
    bullets: ["Prevenção e medo de cair", "Marcha e equilíbrio funcional", "Força e resistência muscular", "Condicionamento e independência funcional"],
    cta: "Cuidar de quem eu amo",
  },
  {
    slug: "dores-cronicas-e-agudas",
    accent: "#2D7DA0",
    tag: "Dores Crônicas e Agudas",
    title: "Dor Crônica Tem Tratamento — Tem Causa",
    description:
      "Anos convivendo com lombalgia, cervicalgia ou fibromialgia não significam que isso é \"normal para você\". Identificamos o que sustenta a dor e tratamos com abordagem multimodal — exercício, terapia manual e educação.",
    bullets: ["Lombalgia e hérnia de disco", "Cervicalgia e tensão muscular", "Fibromialgia e sensibilização central", "Tendinites e bursites crônicas"],
    cta: "Acabar com a dor crônica",
  },
  {
    slug: "mobilizacao-neural",
    accent: "#0085B8",
    tag: "Mobilização Neural",
    title: "Quando a Dor Segue o Caminho do Nervo",
    description:
      "Nervos com mobilidade reduzida causam dor que irradia, queima e formiga. A mobilização neural restaura o deslizamento adequado entre nervo e tecidos — com especialização em coluna lombar e cervical.",
    bullets: ["Ciatalgia e lombociatalgia", "Cervicobranquialgia (dor irradiada para o braço)", "Síndrome do túnel do carpo", "Dor neuropática pós-lesão ou pós-cirúrgica"],
    cta: "Tratar minha dor irradiada",
  },
];

const featuredServices = [
  {
    slug: "quiropraxia-instrumental",
    accent: "#005578",
    tag: "Quiropraxia Instrumental",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22V12M12 12C12 12 8 10 8 6a4 4 0 0 1 8 0c0 4-4 6-4 6z" />
        <path d="M8 16c-2 1-3 2.5-3 4h14c0-1.5-1-3-3-4" />
      </svg>
    ),
    title: "Ajuste Articular de Alta Precisão",
    description:
      "Sem estalidos, sem força excessiva — apenas precisão. Instrumentos quiropráxicos modernos permitem ajustes milimétricos e controlados que restauram a mobilidade articular e aliviam a tensão muscular compensatória que você carrega há meses.",
    bullets: [
      { text: "Bloqueios vertebrais — cervical, torácico e lombar", detail: "Ajustes segmentares precisos para liberar restrições de movimento" },
      { text: "Cefaleia tensional de origem cervical", detail: "Tratamento direto na causa: a tensão cervical que provoca a dor de cabeça" },
      { text: "Rigidez articular e sensação de travamento", detail: "Restauração da amplitude de movimento perdida com técnica controlada" },
      { text: "Integração com protocolo fisioterapêutico", detail: "Combinado a exercícios e terapia manual para resultado duradouro" },
    ],
    benefits: ["Sem estalidos forçados", "Alta precisão milimétrica", "Alívio imediato da tensão"],
    cta: "Destravar minha coluna",
  },
  {
    slug: "liberacao-miofascial-instrumental",
    accent: "#0099CC",
    tag: "Liberação Miofascial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 12h16" />
        <path d="M4 6c4 0 4 6 8 6s4-6 8-6" />
        <path d="M4 18c4 0 4-6 8-6s4 6 8 6" />
      </svg>
    ),
    title: "Quando a Fáscia Trava, o Corpo Responde",
    description:
      "A fáscia é o tecido que conecta tudo — e quando endurece, leva junto a mobilidade, o conforto e o movimento livre. Com instrumentos de liberação miofascial, trabalhamos aderências, cicatrizes e restrições fasciais de forma menos dolorosa e mais eficaz do que o trabalho manual convencional.",
    bullets: [
      { text: "Tensões musculares em geral", detail: "Liberação de pontos de tensão acumulada em toda a musculatura" },
      { text: "Aderências e cicatrizes pós-cirúrgicas", detail: "Trabalho específico no tecido cicatricial que restringe movimento" },
      { text: "Síndrome do trato iliotibial", detail: "Liberação da fáscia lateral do joelho e coxa com resultado rápido" },
      { text: "Tendinopatias com fibrose tecidual", detail: "Tratamento da fibrose que mantém a tendinopatia crônica ativa" },
    ],
    benefits: ["Menos doloroso que o manual", "Ação mais profunda e eficaz", "Indicado para qualquer região"],
    cta: "Liberar minhas restrições",
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill={`${color}18`} />
      <path d="M8 12l3 3 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="bg-creme py-20 md:py-28" aria-label="Serviços de fisioterapia domiciliar Stella Sobral">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Especialidades</span>
            <h2
              className="font-heading font-300 text-verde leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              <span className="relative inline-block">
                Tratamento especializado
                <span
                  className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #0099CC 0%, #0099CC44 100%)" }}
                  aria-hidden="true"
                />
              </span>,<br />
              <em className="font-600 not-italic">com a tranquilidade e praticidade do atendimento domiciliar</em>
            </h2>
            <p className="font-body text-sm text-muted mt-4 max-w-xl leading-relaxed">
              Atendimento domiciliar especializado no Itaim Bibi, Jardins, Moema, Vila Olímpia e Zona Sul de São Paulo.
            </p>
          </div>
        </Reveal>

        {/* ── Featured 2-column cards (above grid) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featuredServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 120}>
              <article
                className="group flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl"
                style={{ borderColor: `${service.accent}30` }}
              >
                {/* Card header band */}
                <div
                  className="relative px-7 pt-7 pb-6 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${service.accent}18 0%, ${service.accent}06 100%)` }}
                >
                  <div
                    className="absolute -right-8 -top-8 w-36 h-36 rounded-full opacity-[0.07]"
                    style={{ backgroundColor: service.accent }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute right-6 bottom-0 w-20 h-20 rounded-full opacity-[0.04]"
                    style={{ backgroundColor: service.accent }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <span
                        className="inline-block text-[10px] font-body font-600 tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2"
                        style={{ backgroundColor: `${service.accent}20`, color: service.accent }}
                      >
                        {service.tag}
                      </span>
                      <h3
                        className="font-heading font-700 leading-tight"
                        style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", color: service.accent }}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-7 bg-white">
                  <p className="font-body text-sm text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-4 mb-7 flex-1" aria-label={`Condições tratadas em ${service.tag}`}>
                    {service.bullets.map((b) => (
                      <li key={b.text} className="flex gap-3">
                        <CheckIcon color={service.accent} />
                        <div>
                          <p className="font-body text-sm font-600 text-charcoal leading-snug">{b.text}</p>
                          <p className="font-body text-xs text-muted mt-0.5 leading-relaxed">{b.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.benefits.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center gap-1.5 text-[11px] font-body font-500 px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: `${service.accent}10`, color: service.accent }}
                      >
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: service.accent }} aria-hidden="true" />
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Tenho interesse em ${service.tag} — gostaria de agendar uma avaliação.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 font-body font-600 text-sm py-3 px-6 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ backgroundColor: service.accent }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {service.cta}
                    </a>
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="flex items-center justify-center font-body text-xs text-muted hover:text-verde border border-line hover:border-verde/30 px-5 py-3 rounded-full transition-all duration-200"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── Divider ── */}
        <Reveal delay={80}>
          <div className="my-10">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-line" />
              <span className="section-label text-muted">Outras Especialidades</span>
              <div className="h-px flex-1 bg-line" />
            </div>
          </div>
        </Reveal>

        {/* ── 5-card regular grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <article className="group flex flex-col h-full rounded-2xl border border-line bg-white hover:shadow-xl hover:shadow-verde/5 transition-all duration-300 overflow-hidden">
                <div
                  className="h-1 w-full transition-all duration-300 group-hover:h-[5px]"
                  style={{ backgroundColor: service.accent }}
                  aria-hidden="true"
                />
                <div className="flex flex-col flex-1 p-6">
                  <span
                    className="inline-block text-[11px] font-body font-600 tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit"
                    style={{ backgroundColor: `${service.accent}14`, color: service.accent }}
                  >
                    {service.tag}
                  </span>
                  <h3 className="font-heading text-xl font-700 text-verde leading-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-1.5 mb-6 flex-1" aria-label={`Condições tratadas em ${service.tag}`}>
                    {service.bullets.map((c) => (
                      <li key={c} className="flex items-center gap-2 font-body text-xs text-charcoal/70">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.accent }} aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-2 mt-auto">
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Tenho interesse em ${service.tag} — gostaria de agendar uma avaliação.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center font-body font-500 text-sm py-2.5 px-5 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                      style={{ backgroundColor: service.accent }}
                    >
                      {service.cta} →
                    </a>
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="text-center font-body text-xs text-muted hover:text-verde transition-colors duration-200 py-1"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <Reveal delay={300}>
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-muted mb-4">
              Não encontrou o que procura? Cada caso é avaliado individualmente.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Olá! Gostaria de saber se você trata meu caso — posso descrever minha situação?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-500 text-verde border border-verde/30 hover:border-verde hover:bg-verde hover:text-creme px-6 py-2.5 rounded-full transition-all duration-200"
            >
              Perguntar sobre meu caso
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal";

const WHATSAPP = "5515996758942";

const services = [
  {
    slug: "reabilitacao",
    accent: "#1C3D2E",
    tag: "Traumato-Ortopedia",
    title: "Reabilitação Especializada no seu Lar",
    description:
      "Cada lesão deixa uma marca — e cada recuperação merece um plano feito só para ela. Conduzimos reabilitação traumato-ortopédica estruturada em fases, com critérios clínicos que avançam no ritmo da sua biologia, não do calendário.",
    bullets: ["Fraturas e luxações", "Rupturas ligamentares (LCA, LCP)", "Lesões musculares e tendinopatias", "Dor lombar mecânica aguda"],
    cta: "Quero me reabilitar em casa",
  },
  {
    slug: "fisioterapia-pos-operatoria",
    accent: "#C4714A",
    tag: "Pós-Cirúrgica",
    title: "Pós-Operatório Sem Sair de Casa",
    description:
      "A cirurgia é o começo — a fisioterapia é o que define o resultado final. Cada sessão em domicílio elimina o desgaste dos deslocamentos e mantém você focado no que realmente importa: recuperar função e ganhar qualidade de vida.",
    bullets: ["Artroplastia de joelho e quadril", "Reconstrução de LCA", "Cirurgias de ombro e coluna", "Osteossínteses e fraturas"],
    cta: "Recuperar em casa",
  },
  {
    slug: "fisioterapia-para-idosos",
    accent: "#2A5A40",
    tag: "Geriatria",
    title: "Autonomia e Segurança para a Terceira Idade",
    description:
      "Perder mobilidade não é inevitável — é tratável. Trabalhamos equilíbrio, força e confiança nos movimentos do dia a dia diretamente no ambiente onde o risco de queda é real. Porque o lugar certo para tratar prevenção de quedas é onde elas acontecem.",
    bullets: ["Prevenção e medo de cair", "Marcha e equilíbrio funcional", "Força e resistência muscular", "Pós-AVC e sequelas neurológicas"],
    cta: "Cuidar de quem eu amo",
  },
  {
    slug: "dores-cronicas",
    accent: "#6B7B72",
    tag: "Dores Crônicas",
    title: "Dor Crônica Tem Tratamento — Tem Causa",
    description:
      "Anos convivendo com lombalgia, cervicalgia ou fibromialgia não significam que isso é \"normal para você\". Com avaliação que vai além do sintoma, identificamos o que sustenta a dor e tratamos com abordagem multimodal — exercício, terapia manual e educação.",
    bullets: ["Lombalgia e hérnia de disco", "Cervicalgia e tensão muscular", "Fibromialgia e sensibilização central", "Tendinites e bursites crônicas"],
    cta: "Acabar com a dor crônica",
  },
  {
    slug: "quiropraxia-instrumental",
    accent: "#8B5E3C",
    tag: "Quiropraxia Instrumental",
    title: "Ajuste Articular de Alta Precisão",
    description:
      "Sem estalidos, sem força excessiva — apenas precisão. Instrumentos quiropráxicos modernos permitem ajustes milimétricos e controlados que restauram a mobilidade articular e aliviam a tensão muscular compensatória que você carrega há meses.",
    bullets: ["Bloqueios vertebrais (cervical, torácico, lombar)", "Cefaleia tensional de origem cervical", "Rigidez articular e travamento", "Integração com protocolo fisioterapêutico"],
    cta: "Destravar minha coluna",
  },
  {
    slug: "liberacao-miofascial-instrumental",
    accent: "#4A6741",
    tag: "Liberação Miofascial",
    title: "Quando a Fáscia Trava, o Corpo Responde",
    description:
      "A fáscia é o tecido que conecta tudo — e quando endurece, leva junto a mobilidade, o conforto e o movimento livre. Com instrumentos IASTM de aço, trabalhamos aderências, cicatrizes e restrições fasciais profundas onde a mão não chega.",
    bullets: ["Aderências e cicatrizes pós-cirúrgicas", "Síndrome do trato iliotibial", "Fasciíte plantar", "Tendinopatias com fibrose tecidual"],
    cta: "Liberar minhas restrições",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-creme py-20 md:py-28" aria-label="Serviços de fisioterapia domiciliar Stella Sobral">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Especialidades</span>
            <h2
              className="font-heading font-300 text-verde leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Seis especialidades,<br />
              <em className="font-600 not-italic">uma única saída de casa — a sua</em>
            </h2>
            <p className="font-body text-sm text-muted mt-4 max-w-xl leading-relaxed">
              Atendimento domiciliar especializado no Itaim Bibi, Jardins, Moema, Vila Olímpia e Zona Sul de São Paulo.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 90}>
              <article className="group flex flex-col h-full rounded-2xl border border-line bg-white hover:shadow-xl hover:shadow-verde/5 transition-all duration-300 overflow-hidden">

                {/* Accent top bar */}
                <div
                  className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: service.accent }}
                  aria-hidden="true"
                />

                <div className="flex flex-col flex-1 p-6">
                  <span
                    className="inline-block text-[9px] font-body font-600 tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit"
                    style={{ backgroundColor: `${service.accent}15`, color: service.accent }}
                  >
                    {service.tag}
                  </span>

                  <h3 className="font-heading text-xl font-600 text-verde leading-tight mb-3">
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
                      className="block text-center font-body font-500 text-sm py-2.5 px-5 rounded-full text-creme transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
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

        <Reveal delay={550}>
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

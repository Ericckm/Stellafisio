import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { posCircurgicaSchema, faqSchema } from "@/lib/schema";
import { serviceMeta } from "@/lib/metadata";
import CTAFinal from "@/components/sections/CTAFinal";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = serviceMeta["fisioterapia-pos-operatoria"];

const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Tenho interesse em fisioterapia pós-operatória domiciliar — gostaria de agendar uma avaliação.");

const conditions = [
  { name: "Artroplastia de joelho e quadril", description: "Recuperação após prótese total ou parcial, restabelecendo amplitude de movimento, força e marcha." },
  { name: "Reconstrução de LCA / LCP", description: "Protocolo progressivo de reabilitação ligamentar para retorno seguro às atividades cotidianas e esportivas." },
  { name: "Lesões de menisco", description: "Pós-cirúrgico de meniscectomia ou sutura meniscal, com foco em estabilidade e propriocepção." },
  { name: "Cirurgias de ombro", description: "Reabilitação após manguito rotador, SLAP e instabilidades — recuperando força e amplitude." },
  { name: "Fraturas e osteossínteses", description: "Mobilização precoce segura após fixação cirúrgica de fraturas de membros." },
  { name: "Coluna vertebral", description: "Pós-operatório de hérnias, estenoses e artrodeses com abordagem funcional e controle da dor." },
];

const benefits = [
  { title: "Recuperação mais rápida", description: "A fisioterapia precoce reduz o tempo de recuperação ao controlar edema, dor e prevenir rigidez articular desde os primeiros dias." },
  { title: "Sem desgaste de deslocamento", description: "Atendimento 100% domiciliar — sem sair de casa no momento mais delicado da recuperação, sem trânsito, sem espera." },
  { title: "Protocolo personalizado", description: "Cada cirurgia é diferente. O plano é construído para a sua cirurgia, seu corpo e seu ritmo — não para uma média." },
  { title: "Acompanhamento próximo", description: "Evolução avaliada em cada sessão. Critérios clínicos definem quando avançar — não o calendário." },
];

const posOpFaqs = [
  {
    q: "Quando começar a fisioterapia pós-operatória?",
    a: "Na maioria dos casos, a fisioterapia pode ser iniciada no primeiro ou segundo dia após a alta hospitalar. Quanto mais precoce o início, melhor o controle do edema, da dor e a prevenção de rigidez articular. O timing ideal depende do tipo de cirurgia e da orientação do cirurgião.",
  },
  {
    q: "Quanto tempo dura o tratamento de fisioterapia pós-operatória?",
    a: "A duração varia conforme o tipo de cirurgia e a evolução do paciente. Reabilitações pós-artroplastia levam em geral de 8 a 16 semanas; pós-LCA de 4 a 9 meses; cirurgias de ombro de 3 a 6 meses. O protocolo é revisado em cada sessão e adaptado ao seu ritmo de recuperação.",
  },
  {
    q: "A fisioterapia acelera a recuperação pós-cirúrgica?",
    a: "Sim. A fisioterapia iniciada precocemente reduz significativamente o tempo de recuperação, controla dor e edema, previne rigidez articular e perda muscular, e aumenta as chances de retorno completo às atividades. Pacientes com acompanhamento estruturado evoluem de forma muito mais rápida e segura.",
  },
  {
    q: "Preciso de encaminhamento médico para começar?",
    a: "Não é obrigatório. O fisioterapeuta realiza avaliação independente. Um relatório ou laudo cirúrgico pode complementar o plano, mas não é pré-requisito para iniciar o tratamento.",
  },
];

export default function PosCircurgicaPage() {
  return (
    <>
      <JsonLd schema={posCircurgicaSchema} />
      <JsonLd schema={faqSchema} />

      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 0% 30%, #005E80 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 100% 0%, #003D5C 0%, transparent 55%), #003D5C",
        }}
        aria-label="Fisioterapia pós-operatória domiciliar em São Paulo"
      >
        <div className="relative max-w-5xl mx-auto px-6">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-xs text-creme/40">
              <li><Link href="/" className="hover:text-creme/70 transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#servicos" className="hover:text-creme/70 transition-colors">Serviços</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-terra" aria-current="page">Pós-Cirúrgica</li>
            </ol>
          </nav>

          <span className="inline-block font-body text-[10px] font-600 tracking-widest uppercase text-terra bg-terra/20 px-3 py-1 rounded-full mb-6">
            Fisioterapia Domiciliar · São Paulo
          </span>
          <h1
            className="font-heading font-300 text-creme leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Fisioterapia Pós-Operatória<br />
            <em className="font-600 not-italic text-terra">em São Paulo</em><br />
            <span className="font-300 text-creme/80" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
              Reabilitação domiciliar no Itaim Bibi, Jardins e Moema
            </span>
          </h1>
          <p className="font-body font-300 text-creme/88 text-lg leading-relaxed max-w-xl mb-8">
            Recuperação especializada após cirurgias ortopédicas — no conforto da sua casa, sem deslocamento, no ritmo certo para o seu corpo.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-terra hover:bg-terra-light text-creme font-body font-500 text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terra/30 hover:-translate-y-0.5"
          >
            Agendar Avaliação
          </a>
        </div>
      </section>

      {/* ── H2: Benefícios ── */}
      <section className="bg-creme py-20 md:py-24" aria-label="Benefícios da fisioterapia pós-operatória domiciliar">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Benefícios da fisioterapia<br />
              <em className="font-600 not-italic">pós-operatória domiciliar</em>
            </h2>
            <p className="font-body text-sm text-muted mb-12 max-w-xl leading-relaxed">
              A reabilitação no próprio lar elimina o desgaste dos deslocamentos e coloca você no ambiente onde a recuperação funcional realmente acontece.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="p-6 rounded-xl border border-line bg-white hover:border-verde/20 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-terra/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" fill="#0099CC18" />
                        <path d="M8 12l3 3 5-5" stroke="#0099CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-body text-base font-700 text-verde mb-1">{b.title}</h3>
                      <p className="font-body text-sm text-muted leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2: Condições ── */}
      <section className="bg-creme-2 py-20 md:py-24" aria-label="Para quem é indicado">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Para quem é indicado<br />
              <em className="font-600 not-italic">este tratamento</em>
            </h2>
            <p className="font-body text-sm text-muted mb-12 max-w-xl leading-relaxed">
              Cada pós-cirúrgico é único. A avaliação individualizada define o protocolo ideal para a sua recuperação — com acompanhamento próximo em cada etapa.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="p-6 rounded-xl border border-line bg-white hover:border-verde/20 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terra mt-2 shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-body text-base font-700 text-verde mb-1">{c.name}</h3>
                      <p className="font-body text-sm text-muted leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2: Como funciona ── */}
      <section className="bg-verde py-20 md:py-24" aria-label="Como funciona o atendimento domiciliar">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-creme mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Como funciona o<br />
              <em className="font-600 not-italic">atendimento domiciliar</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { num: "01", title: "Contato pelo WhatsApp", desc: "Você descreve sua cirurgia e situação atual. Agendamos a avaliação inicial no seu domicílio." },
              { num: "02", title: "Avaliação domiciliar", desc: "Avaliação fisioterapêutica completa em casa, análise do histórico cirúrgico e definição do protocolo." },
              { num: "03", title: "Tratamento e evolução", desc: "Sessões de 60 minutos exclusivas, com protocolo revisado a cada etapa da sua recuperação." },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="flex flex-col gap-3">
                  <span className="font-heading text-4xl font-300 text-terra-light opacity-60">{step.num}</span>
                  <h3 className="font-heading text-xl font-600 text-creme">{step.title}</h3>
                  <p className="font-body text-sm text-creme/65 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── H2: FAQ ── */}
      <section className="bg-creme-2 py-20 md:py-24" aria-label="Perguntas frequentes sobre fisioterapia pós-operatória">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-12"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Perguntas frequentes sobre<br />
              <em className="font-600 not-italic">fisioterapia pós-operatória</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl border border-line overflow-hidden px-7 divide-y divide-line mb-10">
              {posOpFaqs.map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer list-none">
                    <span className="font-reading text-[1.05rem] font-600 text-verde group-hover:text-verde-light transition-colors">
                      {faq.q}
                    </span>
                    <span className="faq-icon shrink-0 w-7 h-7 rounded-full border border-verde/20 flex items-center justify-center text-verde" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="pb-5 font-reading text-base font-400 text-muted leading-relaxed max-w-2xl">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="text-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-terra hover:bg-terra-light text-creme font-body font-500 text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terra/30 hover:-translate-y-0.5"
              >
                Agendar minha avaliação
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}

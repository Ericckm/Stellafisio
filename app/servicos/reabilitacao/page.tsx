import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { reabilitacaoSchema } from "@/lib/schema";
import CTAFinal from "@/components/sections/CTAFinal";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reabilitação Domiciliar Traumato-Ortopédica SP | Stella Sobral",
  description:
    "Reabilitação traumato-ortopédica domiciliar especializada em SP. Recupere função, mobilidade e força após lesões, cirurgias e traumas musculoesqueléticos. Itaim Bibi, Jardins e Moema.",
  alternates: {
    canonical: "https://stellasobral.com.br/servicos/reabilitacao",
  },
  openGraph: {
    title: "Reabilitação Domiciliar Traumato-Ortopédica SP | Stella Sobral",
    description:
      "Reabilitação traumato-ortopédica domiciliar especializada em São Paulo. Recupere função, mobilidade e força após lesões, cirurgias e traumas.",
  },
};

const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Tenho interesse em reabilitação domiciliar — gostaria de agendar uma avaliação.");

const phases = [
  {
    phase: "Fase Aguda",
    title: "Controle da dor e proteção tecidual",
    desc: "Modulação da dor, controle do edema, mobilização precoce segura e proteção das estruturas em cicatrização. O objetivo desta fase é criar condições para a recuperação sem comprometer o reparo.",
  },
  {
    phase: "Fase Subaguda",
    title: "Restauração da mobilidade e função básica",
    desc: "Exercícios progressivos de amplitude de movimento, início do fortalecimento e reeducação da marcha — com progressão cuidadosa e baseada em critérios clínicos, não em tempo arbitrário.",
  },
  {
    phase: "Fase Funcional",
    title: "Fortalecimento e padrões de movimento",
    desc: "Fortalecimento progressivo, treino proprioceptivo e neuromuscular e reintegração das cadeias musculares comprometidas pela lesão ou cirurgia.",
  },
  {
    phase: "Fase de Retorno",
    title: "Preparação para atividades e prevenção de recidiva",
    desc: "Progressão para as demandas específicas do paciente — trabalho, esporte ou atividades domésticas — com orientação de prevenção para reduzir o risco de nova lesão.",
  },
];

const conditions = [
  "Fraturas e luxações de membros",
  "Entorses e rupturas ligamentares",
  "Lesões musculares (distensões, roturas)",
  "Pós-operatório ortopédico",
  "Lesões por esforço repetitivo (LER/DORT)",
  "Síndrome do impacto do ombro",
  "Instabilidade patelofemoral",
  "Tendinopatias (patelar, calcânea, manguito)",
  "Síndrome do piriforme",
  "Dor lombar mecânica aguda e crônica",
];

export default function ReabilitacaoPage() {
  return (
    <>
      <JsonLd schema={reabilitacaoSchema} />
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 30%, #005E80 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 100% 0%, #003D5C 0%, transparent 55%), #003D5C",
        }}
        aria-label="Reabilitação traumato-ortopédica domiciliar"
      >
        <div className="relative max-w-5xl mx-auto px-6">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-xs text-creme/40">
              <li><Link href="/" className="hover:text-creme/70 transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#servicos" className="hover:text-creme/70 transition-colors">Serviços</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-terra" aria-current="page">Reabilitação</li>
            </ol>
          </nav>

          <span className="inline-block font-body text-[10px] font-600 tracking-widest uppercase text-terra bg-terra/20 px-3 py-1 rounded-full mb-6">
            Traumato-Ortopedia · Domiciliar · SP
          </span>
          <h1
            className="font-heading font-300 text-creme leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Reabilitação<br />
            <em className="font-600 not-italic text-terra">Traumato-Ortopédica</em><br />
            <span className="font-300">no seu domicílio</span>
          </h1>
          <p className="font-body font-300 text-creme/70 text-lg leading-relaxed max-w-xl mb-8">
            Não existe atalho para uma reabilitação bem feita — mas existe um caminho mais humano. Tratamento especializado em lesões e traumas musculoesqueléticos, estruturado em fases e conduzido onde você está: em casa, no Itaim Bibi, Jardins, Moema e Zona Sul de SP.
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

      {/* Phases */}
      <section className="bg-creme py-20 md:py-28" aria-label="Fases da reabilitação">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Reabilitação em fases <em className="font-600 not-italic">— cada etapa no momento certo</em>
            </h2>
            <p className="font-body text-sm text-muted mb-12 max-w-xl leading-relaxed">
              A recuperação de uma lesão ortopédica não é linear nem igual para todos. O protocolo é estruturado em fases progressivas, com critérios clínicos — não apenas o calendário — para avançar com segurança.
            </p>
          </Reveal>

          <div className="flex flex-col gap-5">
            {phases.map((p, i) => (
              <Reveal key={p.phase} delay={i * 100}>
                <div className="flex gap-5 p-6 rounded-xl border border-line bg-white hover:border-verde/20 hover:shadow-md transition-all duration-200">
                  <div className="shrink-0 flex flex-col items-center gap-1 pt-1">
                    <span className="w-8 h-8 rounded-full bg-verde flex items-center justify-center text-creme font-heading font-600 text-sm">
                      {i + 1}
                    </span>
                    {i < phases.length - 1 && (
                      <div className="w-px flex-1 bg-line mt-1" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <span className="font-body text-[10px] font-600 tracking-widest uppercase text-terra mb-1 block">
                      {p.phase}
                    </span>
                    <h3 className="font-heading text-xl font-600 text-verde mb-2">{p.title}</h3>
                    <p className="font-body text-sm text-muted leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-creme-2 py-16 md:py-20" aria-label="Condições e lesões tratadas">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-8"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              Lesões e condições <em className="font-600 not-italic">que reabilitamos</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {conditions.map((c) => (
                <div key={c} className="flex items-center gap-3 font-body text-sm text-charcoal/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-terra shrink-0" aria-hidden="true" />
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}

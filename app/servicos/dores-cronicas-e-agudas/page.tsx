import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { doresCronicasSchema } from "@/lib/schema";
import { serviceMeta } from "@/lib/metadata";
import CTAFinal from "@/components/sections/CTAFinal";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = serviceMeta["dores-cronicas-e-agudas"];

const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Tenho interesse em fisioterapia para dores crônicas domiciliar — gostaria de agendar uma avaliação.");

const conditions = [
  { title: "Lombalgia e hérnia de disco", desc: "Tratamento da dor lombar crônica, com abordagem multimodal: mobilização, terapia manual, exercícios de estabilização e educação em dor." },
  { title: "Cervicalgia e dor cervical", desc: "Manejo da dor no pescoço e região cervical, frequentemente associada à tensão muscular, postura e sobrecarga ocupacional." },
  { title: "Tendinites e bursites", desc: "Tratamento de processos inflamatórios tendíneos e bursais — ombro, cotovelo, quadril, joelho e tornozelo." },
  { title: "Fibromialgia", desc: "Abordagem específica para síndrome dolorosa difusa com exercício terapêutico gradual, educação em dor e melhora da funcionalidade." },
  { title: "Síndrome do impacto do ombro", desc: "Reequilíbrio muscular escapular e fortalecimento para alívio do impacto subacromial e recuperação da função." },
  { title: "Dor patelofemoral", desc: "Tratamento da dor anterior do joelho com fortalecimento do quadríceps, ajuste biomecânico e orientação de atividades." },
];

export default function DoresCronicasPage() {
  return (
    <>
      <JsonLd schema={doresCronicasSchema} />

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 0% 30%, #005E80 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 100% 0%, #003D5C 0%, transparent 55%), #003D5C",
        }}
        aria-label="Fisioterapia para dores crônicas e agudas domiciliar"
      >
        <div className="relative max-w-5xl mx-auto px-6">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-xs text-creme/40">
              <li><Link href="/" className="hover:text-creme/70 transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#servicos" className="hover:text-creme/70 transition-colors">Serviços</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-terra" aria-current="page">Dores Crônicas e Agudas</li>
            </ol>
          </nav>

          <span className="inline-block font-body text-[10px] font-600 tracking-widest uppercase text-terra bg-terra/20 px-3 py-1 rounded-full mb-6">
            Fisioterapia Domiciliar · SP
          </span>
          <h1
            className="font-heading font-300 text-creme leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Fisioterapia para<br />
            <em className="font-600 not-italic text-terra">Dores Crônicas e Agudas</em><br />
            <span className="font-300">Domiciliar em SP</span>
          </h1>
          <p className="font-body font-300 text-creme/88 text-lg leading-relaxed max-w-xl mb-8">
            Tratamento da causa — não apenas do sintoma. Fisioterapia domiciliar para dores crônicas e agudas: lombalgia, cervicalgia, fibromialgia, tendinites e lesões recentes no Itaim Bibi, Jardins e Pinheiros em São Paulo.
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

      <section className="bg-creme py-20 md:py-28" aria-label="Condições de dor crônica tratadas">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Paramos de <em className="font-600 not-italic">conviver com a dor</em>
            </h2>
            <p className="font-body text-sm text-muted mb-12 max-w-xl leading-relaxed">
              A dor crônica não precisa ser uma sentença. Com avaliação precisa e protocolo individualizado, identificamos a causa e tratamos com efetividade — sem sair de casa.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="p-6 rounded-xl border border-line bg-white hover:border-verde/20 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terra mt-2 shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-body text-base font-700 text-verde mb-1">{c.title}</h3>
                      <p className="font-body text-sm text-muted leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  );
}

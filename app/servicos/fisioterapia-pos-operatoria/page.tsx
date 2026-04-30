import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { posCircurgicaSchema } from "@/lib/schema";
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

export default function PosCircurgicaPage() {
  return (
    <>
      <JsonLd schema={posCircurgicaSchema} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 0% 30%, #005E80 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 100% 0%, #003D5C 0%, transparent 55%), #003D5C",
        }}
        aria-label="Fisioterapia pós-operatória domiciliar"
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
            Fisioterapia Domiciliar · SP
          </span>
          <h1
            className="font-heading font-300 text-creme leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Fisioterapia<br />
            <em className="font-600 not-italic text-terra">Pós-Operatória</em><br />
            <span className="font-300">Domiciliar em SP</span>
          </h1>
          <p className="font-body font-300 text-creme/88 text-lg leading-relaxed max-w-xl mb-8">
            Recuperação especializada após cirurgias ortopédicas — no conforto da sua casa, no Itaim Bibi, Vila Olímpia e Brooklin em São Paulo.
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

      {/* Content */}
      <section className="bg-creme py-20 md:py-28" aria-label="Condições tratadas">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Condições que tratamos <em className="font-600 not-italic">em casa</em>
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

      <CTAFinal />
    </>
  );
}

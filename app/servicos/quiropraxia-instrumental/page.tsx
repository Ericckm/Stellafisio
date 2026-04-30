import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { quiropraxiaSchema } from "@/lib/schema";
import CTAFinal from "@/components/sections/CTAFinal";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Quiropraxia Instrumental Domiciliar SP | Stella Sobral",
  description:
    "Quiropraxia com instrumentos de alta precisão no domicílio. Alívio de bloqueios articulares, dores vertebrais e tensões musculares. Itaim Bibi, Jardins e Moema — SP.",
  alternates: {
    canonical: "https://stellasobralfisioterapia.com.br/servicos/quiropraxia-instrumental",
  },
  openGraph: {
    title: "Quiropraxia Instrumental Domiciliar SP | Stella Sobral",
    description:
      "Quiropraxia com instrumentos de alta precisão no domicílio. Alívio de bloqueios articulares, dores vertebrais e tensões musculares em São Paulo.",
  },
};

const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Tenho interesse em quiropraxia instrumental domiciliar — gostaria de agendar uma avaliação.");

const benefits = [
  {
    title: "Alinhamento vertebral preciso",
    desc: "O uso de instrumentos de ajuste articular permite manipulações suaves e direcionadas, sem os ruídos característicos dos ajustes manuais — ideal para quem tem resistência às técnicas tradicionais.",
  },
  {
    title: "Alívio de bloqueios articulares",
    desc: "Bloqueios na coluna cervical, torácica e lombar respondem rápido ao ajuste instrumental, restaurando a mobilidade segmentar e reduzindo a tensão muscular compensatória.",
  },
  {
    title: "Tratamento de cefaleia tensional",
    desc: "Disfunções da coluna cervical alta são uma causa frequente de dor de cabeça. A quiropraxia instrumental aborda essa origem com eficácia e segurança.",
  },
  {
    title: "Controle da dor cervical e lombar",
    desc: "Rigidez matinal, sensação de travamento e dor irradiada para membros respondem bem à abordagem quiropráxica instrumental dentro do protocolo correto.",
  },
  {
    title: "Pós-cirúrgico e hipersensibilidade",
    desc: "A suavidade do instrumento viabiliza o atendimento em casos que não toleram força manual — pós-operatórios, idosos frágeis e pacientes com hipersensibilidade articular.",
  },
  {
    title: "Integração com fisioterapia",
    desc: "A quiropraxia instrumental é aplicada de forma integrada ao protocolo de fisioterapia, potencializando os resultados do tratamento funcional e muscular.",
  },
];

export default function QuiropraxiaInstrumentalPage() {
  return (
    <>
      <JsonLd schema={quiropraxiaSchema} />
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 30%, #005E80 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 100% 0%, #003D5C 0%, transparent 55%), #003D5C",
        }}
        aria-label="Quiropraxia instrumental domiciliar"
      >
        <div className="relative max-w-5xl mx-auto px-6">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-xs text-creme/40">
              <li><Link href="/" className="hover:text-creme/70 transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#servicos" className="hover:text-creme/70 transition-colors">Serviços</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-terra" aria-current="page">Quiropraxia Instrumental</li>
            </ol>
          </nav>

          <span className="inline-block font-body text-[10px] font-600 tracking-widest uppercase text-terra bg-terra/20 px-3 py-1 rounded-full mb-6">
            Fisioterapia Domiciliar · SP
          </span>
          <h1
            className="font-heading font-300 text-creme leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Quiropraxia<br />
            <em className="font-600 not-italic text-terra">Instrumental</em><br />
            <span className="font-300">Domiciliar em SP</span>
          </h1>
          <p className="font-body font-300 text-creme/88 text-lg leading-relaxed max-w-xl mb-8">
            Ajuste articular de alta precisão com instrumentos especializados — sem estalidos, sem desconforto, com resultados perceptíveis já nas primeiras sessões. Atendimento no Itaim Bibi, Vila Madalena e Jardins em São Paulo.
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

      <section className="bg-creme py-20 md:py-28" aria-label="Benefícios da quiropraxia instrumental">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Precisão articular <em className="font-600 not-italic">sem forças manuais brutas</em>
            </h2>
            <p className="font-body text-sm text-muted mb-12 max-w-xl leading-relaxed">
              Instrumentos quiropráxicos modernos permitem ajustes milimétricos e controlados. O resultado é um tratamento gentil, eficaz e adaptável a qualquer perfil de paciente — de atletas a idosos.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="p-6 rounded-xl border border-line bg-white hover:border-verde/20 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-terra mt-2 shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-body text-base font-700 text-verde mb-1">{b.title}</h3>
                      <p className="font-body text-sm text-muted leading-relaxed">{b.desc}</p>
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

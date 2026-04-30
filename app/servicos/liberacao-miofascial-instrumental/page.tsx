import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { liberacaoMiofascialSchema } from "@/lib/schema";
import CTAFinal from "@/components/sections/CTAFinal";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Liberação Miofascial Instrumental Domiciliar SP | Stella Sobral",
  description:
    "Liberação miofascial com instrumentos IASTM no domicílio. Tratamento de aderências, cicatrizes e tensões fasciais crônicas. Itaim Bibi, Jardins e Moema — SP.",
  alternates: {
    canonical: "https://stellasobralfisioterapia.com.br/servicos/liberacao-miofascial-instrumental",
  },
  openGraph: {
    title: "Liberação Miofascial Instrumental Domiciliar SP | Stella Sobral",
    description:
      "Liberação miofascial com instrumentos IASTM no domicílio. Tratamento de aderências, cicatrizes e tensões fasciais crônicas em São Paulo.",
  },
};

const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Tenho interesse em liberação miofascial instrumental domiciliar — gostaria de agendar uma avaliação.");

const benefits = [
  {
    title: "Quebra de aderências fasciais",
    desc: "Instrumentos de aço inoxidável permitem identificar e tratar áreas de fibrose e aderência com precisão superior à mão — restaurando o deslizamento entre tecidos moles.",
  },
  {
    title: "Tratamento de cicatrizes pós-cirúrgicas",
    desc: "Cicatrizes de cirurgias ortopédicas, cesarianas e procedimentos abdominais frequentemente criam tensões fasciais que comprometem o movimento. A liberação instrumental dissolve essas restrições.",
  },
  {
    title: "Síndrome do trato iliotibial",
    desc: "A tensão da fáscia lateral do joelho e quadril responde significativamente à mobilização instrumental — especialmente em corredores e ciclistas.",
  },
  {
    title: "Tendinopatias crônicas",
    desc: "A técnica IASTM estimula a reorganização do colágeno em tendões sobrecarregados — patelar, calcâneo, supraespinhoso — acelerando a regeneração tecidual.",
  },
  {
    title: "Fasciíte plantar",
    desc: "Instrumentos permitem trabalhar a fáscia plantar e o complexo gastrocnêmio-sóleo com força modulada, sem o desconforto excessivo do trabalho manual direto.",
  },
  {
    title: "Pós-operatório e mobilidade articular",
    desc: "Após cirurgias, a fáscia pericapsular frequentemente restringe a amplitude de movimento. A liberação instrumental do tecido periarticular acelera o retorno funcional.",
  },
];

export default function LiberacaoMiofascialPage() {
  return (
    <>
      <JsonLd schema={liberacaoMiofascialSchema} />
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 30%, #005E80 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 100% 0%, #003D5C 0%, transparent 55%), #003D5C",
        }}
        aria-label="Liberação miofascial instrumental domiciliar"
      >
        <div className="relative max-w-5xl mx-auto px-6">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-xs text-creme/40">
              <li><Link href="/" className="hover:text-creme/70 transition-colors">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#servicos" className="hover:text-creme/70 transition-colors">Serviços</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-terra" aria-current="page">Liberação Miofascial</li>
            </ol>
          </nav>

          <span className="inline-block font-body text-[10px] font-600 tracking-widest uppercase text-terra bg-terra/20 px-3 py-1 rounded-full mb-6">
            Fisioterapia Domiciliar · SP
          </span>
          <h1
            className="font-heading font-300 text-creme leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            Liberação Miofascial<br />
            <em className="font-600 not-italic text-terra">Instrumental</em><br />
            <span className="font-300">Domiciliar em SP</span>
          </h1>
          <p className="font-body font-300 text-creme/88 text-lg leading-relaxed max-w-xl mb-8">
            Quando a fáscia endurece, o corpo trava. Com instrumentos IASTM de alta precisão, desbloqueamos aderências, cicatrizes e tensões profundas — onde a mão não alcança, o instrumento resolve. Atendimento no Itaim Bibi, Brooklin e Moema em São Paulo.
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

      <section className="bg-creme py-20 md:py-28" aria-label="O que a liberação miofascial instrumental trata">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2
              className="font-heading font-300 text-verde mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              O tecido mole <em className="font-600 not-italic">tem memória — e nós a reescrevemos</em>
            </h2>
            <p className="font-body text-sm text-muted mb-12 max-w-xl leading-relaxed">
              A Terapia de Mobilização de Tecidos Moles Assistida por Instrumento (IASTM) utiliza ferramentas ergonômicas de aço para detectar e tratar restrições fasciais com uma sensibilidade que a mão humana não consegue replicar.
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

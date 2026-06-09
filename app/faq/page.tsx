import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import CTAFinal from "@/components/sections/CTAFinal";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes — Fisioterapia Domiciliar SP | Stella Sobral",
  description:
    "Tire todas as dúvidas sobre fisioterapia domiciliar particular em São Paulo: valores, área de atendimento, duração das sessões e encaminhamento médico.",
  alternates: {
    canonical: "https://stellasobralfisioterapia.com.br/faq",
  },
};

const faqs = [
  {
    category: "Agendamento e Processo",
    items: [
      {
        q: "Como funciona o primeiro contato?",
        a: "Basta enviar uma mensagem pelo WhatsApp. Respondemos rapidamente para entender a sua situação, tirar dúvidas iniciais e — se fizer sentido para o seu caso — agendar a avaliação domiciliar. Sem compromisso e sem burocracia.",
      },
      {
        q: "O que acontece na avaliação?",
        a: "A avaliação fisioterapêutica é realizada na sua residência e inclui histórico clínico detalhado, exame físico funcional e definição do plano de tratamento individualizado. Ela dura em média 60 minutos e já é terapêutica por natureza.",
      },
      {
        q: "Com quanto tempo de antecedência devo agendar?",
        a: "A disponibilidade varia conforme a agenda, mas trabalhamos para atender com agilidade. Entre em contato pelo WhatsApp e verificamos os horários disponíveis em tempo real.",
      },
    ],
  },
  {
    category: "Valores e Pagamento",
    items: [
      {
        q: "Qual o valor da sessão de fisioterapia domiciliar?",
        a: "Os valores variam conforme a especialidade, a frequência de atendimento e o plano de tratamento acordado. Entre em contato pelo WhatsApp para receber um orçamento transparente, sem surpresas e sem compromisso.",
      },
      {
        q: "O atendimento é particular?",
        a: "Sim. Todo o atendimento é particular, sem convênios. Isso garante liberdade total para definir o protocolo mais adequado para cada caso — sem limitações impostas por planos de saúde.",
      },
      {
        q: "Quais formas de pagamento são aceitas?",
        a: "Aceitamos PIX, cartão de crédito, débito e dinheiro. O pagamento é combinado no momento do agendamento.",
      },
    ],
  },
  {
    category: "Área e Logística",
    items: [
      {
        q: "Quais bairros de São Paulo são atendidos?",
        a: "Atendemos com prioridade no Itaim Bibi, Jardins, Moema, Vila Olímpia, Brooklin, Pinheiros e Vila Mariana. Para outras regiões da Zona Sul e Zona Oeste, entre em contato — avaliamos disponibilidade caso a caso.",
      },
      {
        q: "Quanto tempo dura cada sessão?",
        a: "Cada sessão tem duração de 60 minutos — tempo inteiramente dedicado ao seu tratamento, sem compartilhamento com outros pacientes e sem olhar pro relógio.",
      },
      {
        q: "Vocês atendem fins de semana?",
        a: "Atendemos de segunda a sexta-feira, com horários a combinar. Consulte disponibilidade pelo WhatsApp.",
      },
    ],
  },
  {
    category: "Técnicas e Indicações",
    items: [
      {
        q: "Preciso de encaminhamento médico para começar?",
        a: "Não. O fisioterapeuta possui autonomia profissional para avaliar e tratar independentemente. Um relatório ou laudo médico enriquece o histórico clínico, mas não é pré-requisito para iniciar o tratamento.",
      },
      {
        q: "O que é quiropraxia instrumental? É a mesma coisa que fisioterapia?",
        a: "A quiropraxia instrumental é uma técnica utilizada dentro do escopo da fisioterapia — especialmente para ajuste articular com instrumentos de precisão, sem as manipulações de alta velocidade características das clínicas tradicionais. É aplicada de forma integrada ao protocolo fisioterapêutico.",
      },
      {
        q: "O que é liberação miofascial instrumental (IASTM)?",
        a: "IASTM (Instrument-Assisted Soft Tissue Mobilization) é uma técnica que utiliza instrumentos de aço inoxidável para detectar e tratar restrições nos tecidos moles — fáscia, tendões, cicatrizes — com precisão superior à terapia manual convencional. É indicada para aderências pós-cirúrgicas, tendinopatias e restrições fasciais crônicas.",
      },
      {
        q: "Quantas sessões preciso para ter resultado?",
        a: "Depende da condição, da fase de evolução e dos objetivos do tratamento. Algumas condições agudas respondem em poucas sessões; quadros crônicos ou pós-cirúrgicos costumam exigir acompanhamento mais prolongado. Na avaliação inicial, definimos uma estimativa realista para o seu caso.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 30%, #005E80 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 100% 0%, #003D5C 0%, transparent 55%), #003D5C",
        }}
        aria-label="Perguntas frequentes sobre fisioterapia domiciliar"
      >
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block font-body text-[10px] font-600 tracking-widest uppercase text-terra bg-terra/20 px-3 py-1 rounded-full mb-6">
            Fisioterapia Domiciliar · São Paulo
          </span>
          <h1
            className="font-heading font-300 text-creme leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
          >
            Perguntas<br />
            <em className="font-600 not-italic text-terra">frequentes</em>
          </h1>
          <p className="font-body font-300 text-creme/60 text-base leading-relaxed max-w-lg">
            Tudo o que você quer saber antes de agendar a sua avaliação de fisioterapia domiciliar em São Paulo.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-creme py-16 md:py-24" aria-label="Categorias de perguntas frequentes">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
          {faqs.map((category, ci) => (
            <Reveal key={category.category} delay={ci * 80}>
              <div>
                <h2 className="font-heading text-2xl font-600 text-verde mb-6 pb-4 border-b border-line">
                  {category.category}
                </h2>
                <div className="flex flex-col gap-5">
                  {category.items.map((item) => (
                    <div
                      key={item.q}
                      className="p-6 rounded-xl bg-white border border-line hover:border-verde/20 transition-all duration-200"
                    >
                      <h3 className="font-heading text-lg font-600 text-verde mb-3">{item.q}</h3>
                      <p className="font-body text-sm text-muted leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="max-w-4xl mx-auto px-6 mt-12 p-7 rounded-2xl bg-verde/5 border border-verde/10 text-center">
            <p className="font-heading text-xl font-600 text-verde mb-2">Ainda ficou com dúvida?</p>
            <p className="font-body text-sm text-muted mb-5">
              Cada situação é única. Fale diretamente com a Stella pelo WhatsApp — sem filtros, sem chatbot.
            </p>
            <a
              href="https://wa.me/5515996758942?text=Ol%C3%A1%21+Tenho+uma+d%C3%BAvida+sobre+fisioterapia+domiciliar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-verde text-creme font-body font-500 text-sm px-6 py-3 rounded-full hover:bg-verde-light transition-colors"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <CTAFinal />
    </>
  );
}

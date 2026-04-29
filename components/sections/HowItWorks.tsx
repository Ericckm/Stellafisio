import Reveal from "@/components/Reveal";

const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar.");

const steps = [
  {
    num: "01",
    title: "Primeiro Contato",
    description: "Envie uma mensagem pelo WhatsApp. Respondemos rapidamente para entender sua situação e tirar dúvidas iniciais sem compromisso.",
    detail: "Via WhatsApp · Resposta rápida",
  },
  {
    num: "02",
    title: "Avaliação Domiciliar",
    description: "A Stella vai até sua casa para realizar uma avaliação fisioterapêutica completa — histórico, exame físico e definição do plano de tratamento.",
    detail: "Na sua residência · ~60 minutos",
  },
  {
    num: "03",
    title: "Tratamento Personalizado",
    description: "Sessões regulares com protocolo individualizado, reavaliações periódicas e acompanhamento da sua evolução — até você atingir seus objetivos.",
    detail: "Frequência conforme necessidade",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-creme-2 py-20 md:py-28" aria-label="Como funciona o atendimento">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Processo</span>
            <h2
              className="font-heading font-300 text-verde leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Como funciona<br />
              <em className="font-600 not-italic">o atendimento</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-line" aria-hidden="true" />

          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 150}>
              <div className="relative flex flex-col items-start md:items-center md:text-center px-0 md:px-6 pb-10 md:pb-0">

                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-verde bg-creme-2 flex items-center justify-center mb-6">
                  <span className="font-heading text-verde font-600 text-lg">{step.num}</span>
                </div>

                <h3 className="font-heading text-2xl font-600 text-verde mb-3">{step.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed mb-4 max-w-xs">
                  {step.description}
                </p>
                <span className="inline-block font-body text-xs text-terra bg-terra/10 px-3 py-1 rounded-full">
                  {step.detail}
                </span>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-line absolute left-8 top-16 mt-0" aria-hidden="true" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={450}>
          <div className="mt-16 flex justify-center">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-verde hover:bg-verde-light text-creme font-body font-500 text-base px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-verde/20 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Começar agora — passo 1
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

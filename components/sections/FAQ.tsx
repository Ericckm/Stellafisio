import Reveal from "@/components/Reveal";
import Link from "next/link";

const faqs = [
  {
    q: "Qual o valor da sessão de fisioterapia domiciliar?",
    a: "Os valores variam conforme o plano de tratamento, a frequência e a especialidade. Entre em contato pelo WhatsApp para receber um orçamento personalizado, sem compromisso. Trabalhamos com pacotes individuais e planos de acompanhamento.",
  },
  {
    q: "O atendimento é particular?",
    a: "Sim. Todo o atendimento é particular — sem convênios. Isso garante total independência na escolha do protocolo e do tempo de dedicação a cada paciente, sem interferência de planos de saúde.",
  },
  {
    q: "Quando começar a fisioterapia pós-operatória?",
    a: "Na maioria dos casos, a fisioterapia pode ser iniciada no primeiro ou segundo dia após a alta hospitalar. Quanto mais precoce o início, melhor o controle do edema, da dor e a prevenção de rigidez articular. O timing ideal depende do tipo de cirurgia e da orientação do cirurgião — entre em contato para orientação específica ao seu caso.",
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
    q: "Quais bairros de São Paulo são atendidos?",
    a: "Atendemos no Itaim Bibi, Jardins, Moema, Vila Olímpia, Campo Belo, Pinheiros, Vila Mariana e regiões adjacentes da Zona Sul e Zona Oeste. Entre em contato para verificar disponibilidade na sua localização.",
  },
  {
    q: "Quanto tempo dura cada sessão de fisioterapia domiciliar?",
    a: "Cada sessão tem duração de 60 minutos. O tempo é inteiramente dedicado ao seu tratamento — sem compartilhamento com outros pacientes.",
  },
  {
    q: "Preciso de encaminhamento médico para iniciar o tratamento?",
    a: "Não é obrigatório. O fisioterapeuta realiza avaliação independente e possui autonomia profissional para indicar e conduzir o tratamento. Um relatório ou laudo médico pode complementar o histórico, mas não é pré-requisito para começar.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-creme-2 py-20 md:py-28" aria-label="Perguntas frequentes">
      <div className="max-w-4xl mx-auto px-6">

        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Dúvidas</span>
            <h2
              className="font-heading font-300 text-verde leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Perguntas<br />
              <em className="font-600 not-italic">frequentes</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white rounded-2xl border border-line overflow-hidden px-7 divide-y divide-line">
            {faqs.map((faq) => (
              <details key={faq.q} className="group">
                <summary className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer list-none">
                  <span className="font-reading text-[1.05rem] font-600 text-verde group-hover:text-verde-light transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className="faq-icon shrink-0 w-7 h-7 rounded-full border border-verde/20 flex items-center justify-center text-verde group-open:rotate-45 group-open:bg-verde group-open:text-creme group-open:border-verde transition-all duration-300"
                    aria-hidden="true"
                  >
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
          <p className="mt-8 text-center font-body text-sm text-muted">
            Tem outra dúvida?{" "}
            <Link href="/faq" className="text-verde hover:underline">
              Veja todas as perguntas
            </Link>{" "}
            ou{" "}
            <a href="https://wa.me/5515996758942" target="_blank" rel="noopener noreferrer" className="text-verde hover:underline">
              fale pelo WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

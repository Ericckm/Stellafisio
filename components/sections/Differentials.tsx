import Image from "next/image";
import Reveal from "@/components/Reveal";

const items = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Conforto e segurança do lar",
    description: "Sem estacionamento, sem sala de espera, sem exposição a outros pacientes. A recuperação começa no ambiente onde você se sente mais à vontade.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Atenção totalmente individualizada",
    description: "Cada sessão dedicada 100% a você. Avaliação precisa, protocolo personalizado e evolução acompanhada de perto — sem dividir atenção.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Sem esperas, sem burocracia",
    description: "Agendamento direto pelo WhatsApp, horários flexíveis e atendimento pontual. Seu tempo de recuperação é precioso — e respeitamos isso.",
  },
];

export default function Differentials() {
  return (
    <section className="relative bg-verde py-20 md:py-28 overflow-hidden" aria-label="Vantagens do atendimento domiciliar">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/stella-differentials.png"
          alt=""
          fill
          quality={90}
          className="object-cover object-[55%_center] scale-105"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right,
                rgba(0,56,84,0.95) 0%,
                rgba(0,56,84,0.88) 40%,
                rgba(0,56,84,0.60) 65%,
                rgba(0,56,84,0.30) 100%
              ),
              linear-gradient(to top,
                rgba(0,30,50,0.70) 0%,
                transparent 30%
              )
            `,
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Fisioterapia Domiciliar vs. Clínica</span>
            <h2
              className="font-heading font-300 text-creme leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Por que tratar em casa<br />
              <em className="italic">faz toda a diferença</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <article className="group p-7 rounded-2xl border border-creme/10 hover:border-creme/20 hover:bg-creme/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-terra/20 flex items-center justify-center text-terra mb-5 group-hover:bg-terra/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-600 text-creme mb-3">{item.title}</h3>
                <p className="font-body text-sm text-creme/60 leading-relaxed">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

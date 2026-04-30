import Image from "next/image";
import Reveal from "@/components/Reveal";

const stats = [
  {
    value: "100%",
    label: "Domiciliar",
    description: "Atendimento exclusivamente na sua residência — sem clínica, sem deslocamento.",
  },
  {
    value: "CREFITO",
    label: "Registrada",
    description: "Profissional habilitada pelo Conselho Regional de Fisioterapia — CREFITO-3 SP.",
  },
  {
    value: "60",
    label: "min / sessão",
    description: "Cada sessão dedicada exclusivamente a você, com tempo real de tratamento.",
  },
];

export default function Credibility() {
  return (
    <section className="bg-creme-2 py-16 md:py-20" aria-label="Credenciais e diferenciais">
      <div className="max-w-6xl mx-auto px-6">

        {/* Divider label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-line" />
            <span className="section-label text-muted">Por que Stella Sobral</span>
            <div className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="flex flex-col gap-2">
                <p
                  className="font-heading font-600 text-verde leading-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  {stat.value}
                </p>
                <p className="font-body font-500 text-sm text-terra tracking-wide uppercase">
                  {stat.label}
                </p>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stella bio strip */}
        <Reveal delay={300}>
          <div className="mt-16 p-6 md:p-8 rounded-2xl bg-verde/5 border border-verde/10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <Image
              src="/stella.jpg"
              alt="Stella Sobral, fisioterapeuta domiciliar em São Paulo"
              width={72}
              height={72}
              className="shrink-0 w-16 h-16 rounded-full object-cover border-2 border-verde/20"
              priority
              unoptimized
            />
            <div>
              <p className="font-heading text-xl font-600 text-verde mb-1">Stella Sobral</p>
              <p className="font-body text-xs tracking-widest uppercase text-terra mb-2">
                Fisioterapeuta · CREFITO-3 · São Paulo
              </p>
              <p className="font-body text-sm text-muted leading-relaxed max-w-2xl">
                Especializada em reabilitação domiciliar, com foco em pacientes pós-cirúrgicos, idosos e quadros de dor crônica. Atendo no Itaim Bibi, Jardins, Moema e região — levando cuidado profissional até a sua casa.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

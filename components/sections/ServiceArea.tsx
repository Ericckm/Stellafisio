import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";

const zones = [
  {
    name: "Itaim Bibi e entorno",
    neighborhoods: ["Itaim Bibi", "Vila Olímpia", "Vila Nova Conceição", "Campo Belo"],
    primary: true,
    accent: "#0099CC",
  },
  {
    name: "Jardins e Pinheiros",
    neighborhoods: ["Jardins", "Cerqueira César", "Pinheiros", "Vila Madalena", "Sumarezinho"],
    primary: true,
    accent: "#005578",
  },
  {
    name: "Moema e adjacências",
    neighborhoods: ["Moema", "Ibirapuera", "Vila Mariana", "Aclimação"],
    primary: false,
    accent: "#0085B8",
  },
  {
    name: "Outras regiões",
    neighborhoods: ["Consulte disponibilidade para seu bairro"],
    primary: false,
    accent: "#004A68",
  },
];

export default function ServiceArea() {
  return (
    <section id="area" className="bg-verde py-20 md:py-28" aria-label="Área de atendimento domiciliar em São Paulo">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="mb-14">
            <span className="section-label text-terra mb-3 block">Atendimento</span>
            <h2
              className="font-heading font-300 text-creme leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Onde atendemos<br />
              <em className="font-600 not-italic text-terra">em São Paulo</em>
            </h2>
            <p className="font-body text-sm text-creme/78 mt-4 max-w-lg">
              Atendimento domiciliar com deslocamento até você. Cobertura principal na Zona Sul e Zona Oeste de São Paulo.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {zones.map((zone, i) => (
            <Reveal key={zone.name} delay={i * 100} className="h-full">
              <GlowCard
                accentHex={zone.accent}
                restingBorder="#005578"
                bg="bg-white"
                className="flex flex-col"
              >
                {/* Header band */}
                <div
                  className="relative px-5 pt-5 pb-4 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${zone.accent}18 0%, ${zone.accent}06 100%)` }}
                >
                  <div
                    className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-[0.07]"
                    style={{ backgroundColor: zone.accent }}
                    aria-hidden="true"
                  />
                  {zone.primary && (
                    <span
                      className="inline-block text-[9px] font-body font-600 tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2"
                      style={{ backgroundColor: `${zone.accent}20`, color: zone.accent }}
                    >
                      Principal
                    </span>
                  )}
                  <h3
                    className="font-heading text-lg font-600 leading-tight"
                    style={{ color: zone.accent }}
                  >
                    {zone.name}
                  </h3>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5 pt-4">
                  <ul className="flex flex-col gap-2" aria-label={`Bairros em ${zone.name}`}>
                    {zone.neighborhoods.map((n) => (
                      <li key={n} className="flex items-center gap-2 font-body text-xs text-charcoal/70">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: zone.accent }}
                          aria-hidden="true"
                        />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={450}>
          <p className="mt-10 font-body text-sm text-creme/60 text-center">
            Seu bairro não está na lista? Entre em contato — avaliamos atendimento em outras regiões conforme disponibilidade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

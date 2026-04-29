import Reveal from "@/components/Reveal";

const zones = [
  {
    name: "Itaim Bibi e entorno",
    neighborhoods: ["Itaim Bibi", "Vila Olímpia", "Vila Nova Conceição", "Brooklin"],
    primary: true,
  },
  {
    name: "Jardins e Pinheiros",
    neighborhoods: ["Jardins", "Cerqueira César", "Pinheiros", "Vila Madalena", "Sumarezinho"],
    primary: true,
  },
  {
    name: "Moema e adjacências",
    neighborhoods: ["Moema", "Ibirapuera", "Vila Mariana", "Aclimação"],
    primary: false,
  },
  {
    name: "Outras regiões",
    neighborhoods: ["Consulte disponibilidade para seu bairro"],
    primary: false,
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
            <Reveal key={zone.name} delay={i * 100}>
              <article
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  zone.primary
                    ? "border-terra/30 bg-terra/10"
                    : "border-creme/10 bg-creme/5"
                }`}
              >
                {zone.primary && (
                  <span className="inline-block text-[9px] font-body font-600 tracking-widest uppercase text-terra bg-terra/20 px-2 py-0.5 rounded-full mb-3">
                    Principal
                  </span>
                )}
                <h3 className="font-heading text-lg font-600 text-creme mb-3">{zone.name}</h3>
                <ul className="flex flex-col gap-1.5" aria-label={`Bairros em ${zone.name}`}>
                  {zone.neighborhoods.map((n) => (
                    <li key={n} className="flex items-center gap-2 font-body text-xs text-creme/75">
                      <span className="w-1 h-1 rounded-full bg-terra/60 flex-shrink-0" aria-hidden="true" />
                      {n}
                    </li>
                  ))}
                </ul>
              </article>
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

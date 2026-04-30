import Link from "next/link";

const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar.");

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      aria-label="Apresentação — Fisioterapia Domiciliar Stella Sobral"
    >
      {/* Background gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 0% 20%, #2A5A40 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 100% 10%, #1C3D2E 0%, transparent 55%),
            radial-gradient(ellipse 100% 50% at 50% 100%, #0F2419 0%, transparent 65%),
            #1C3D2E
          `,
        }}
        aria-hidden="true"
      />

      {/* Decorative large italic background text */}
      <span
        className="absolute right-0 bottom-16 font-heading italic text-[18vw] leading-none text-creme/[0.04] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        Fisioterapia
      </span>

      {/* Decorative circle */}
      <div
        className="absolute top-24 right-[10%] w-64 h-64 rounded-full border border-creme/10 hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-36 right-[12%] w-40 h-40 rounded-full border border-creme/5 hidden lg:block"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-3xl">

          {/* Location badge */}
          <div className="hero-headline">
            <span className="inline-flex items-center gap-2 bg-terra/20 text-terra border border-terra/30 text-xs font-body font-500 tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Itaim Bibi · Jardins · Moema · São Paulo
            </span>
          </div>

          {/* H1 */}
          <h1 className="hero-headline font-heading font-300 text-creme leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            Fisioterapia<br />
            <em className="not-italic font-600 text-terra">Domiciliar</em><br />
            no Itaim Bibi<br />
            <span className="font-300">e Zona Sul de SP</span>
          </h1>

{/* Subheadline */}
<p className="hero-sub font-body font-300 text-creme/88 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
  <span className="relative inline-block">
    Recuperação especializada
    <span
      className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full"
      style={{ background: "linear-gradient(90deg, #C4714A 0%, #C4714A88 100%)" }}
      aria-hidden="true"
    />
  </span>{" "}
  no conforto da sua casa — mais tranquilidade, menos desgaste e um cuidado totalmente individualizado.
</p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-terra hover:bg-terra-light text-creme font-body font-500 text-base px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terra/30 hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Avaliação Gratuita
            </a>

            <Link
              href="/#servicos"
              className="font-body text-sm text-creme/80 hover:text-creme transition-colors duration-200 flex items-center gap-2 group"
            >
              Ver serviços
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="hero-trust flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-creme/10">
            {[
              { icon: "✓", text: "Sem necessidade de encaminhamento" },
              { icon: "✓", text: "Atendimento 100% particular e domiciliar" },
              { icon: "✓", text: "Sessões de 60 minutos exclusivas" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-terra text-base font-600" aria-hidden="true">{item.icon}</span>
                <span className="font-body text-sm text-creme/88">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-creme/30" aria-hidden="true">
        <span className="font-body text-[10px] tracking-widest uppercase">Rolar</span>
        <div className="w-px h-12 bg-gradient-to-b from-creme/30 to-transparent" />
      </div>
    </section>
  );
}

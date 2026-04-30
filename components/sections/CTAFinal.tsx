const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar.");

export default function CTAFinal() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0099CC 0%, #007BA8 100%)",
      }}
      aria-label="Agendar fisioterapia domiciliar"
    >
      {/* Background decorative element */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, white 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <span
        className="absolute left-0 bottom-0 font-heading italic text-[20vw] leading-none text-white/5 pointer-events-none select-none"
        aria-hidden="true"
      >
        Saúde
      </span>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-white/60 mb-5">
          Fisioterapia Domiciliar · São Paulo
        </p>

        <h2
          className="font-heading font-300 text-white leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Pronto para se recuperar<br />
          <em className="font-600 not-italic">no conforto da sua casa?</em>
        </h2>

        <p className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Entre em contato agora e agende sua avaliação. A Stella cuida do resto.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-terra font-body font-600 text-base px-8 py-4 rounded-full hover:bg-creme transition-all duration-200 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendar pelo WhatsApp
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            "Sem encaminhamento necessário",
            "Resposta rápida",
          ].map((item) => (
            <span key={item} className="font-body text-sm text-white/75 flex items-center gap-2">
              <span className="text-white/90" aria-hidden="true">✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const WHATSAPP = "5515996758942";
const WA_MSG = encodeURIComponent("Olá! Gostaria de agendar uma avaliação de fisioterapia domiciliar.");

export default function Footer() {
  return (
    <footer className="bg-charcoal text-creme/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <p className="font-heading text-2xl font-300 text-creme tracking-wide mb-2">
            Stella Sobral
          </p>
          <p className="text-xs font-body tracking-widest uppercase text-creme/65 mb-4">
            Fisioterapia Domiciliar
          </p>
          <p className="font-body text-sm leading-relaxed text-creme/78 max-w-xs">
            Cuidado especializado no conforto do seu lar. Itaim Bibi, Jardins, Moema e Zona Sul de São Paulo.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="section-label text-creme/60 mb-5">Navegação</p>
          <nav className="flex flex-col gap-3" aria-label="Rodapé">
            {[
              { href: "/servicos/reabilitacao", label: "Reabilitação Traumato-Ortopédica" },
              { href: "/servicos/fisioterapia-pos-operatoria", label: "Fisioterapia Pós-Cirúrgica" },
              { href: "/servicos/fisioterapia-para-idosos", label: "Fisioterapia para Idosos" },
              { href: "/servicos/dores-cronicas-e-agudas", label: "Dores Crônicas e Agudas" },
              { href: "/servicos/quiropraxia-instrumental", label: "Quiropraxia Instrumental" },
              { href: "/servicos/liberacao-miofascial-instrumental", label: "Liberação Miofascial" },
              { href: "/faq", label: "Perguntas Frequentes" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-creme/78 hover:text-creme transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="section-label text-creme/60 mb-5">Contato</p>
          <div className="flex flex-col gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-sm text-creme/85 hover:text-creme transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              WhatsApp — Agende sua sessão
            </a>

            <div className="flex items-start gap-3 font-body text-sm text-creme/78">
              <span className="w-8 h-8 rounded-full bg-creme/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              <span>
                Itaim Bibi, Jardins, Moema<br />
                Vila Madalena, Pinheiros, Brooklin<br />
                São Paulo — SP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-creme/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-creme/50">
            © {new Date().getFullYear()} Stella Sobral Fisioterapia Domiciliar. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-creme/50">
            CREFITO-3 297082 · São Paulo — SP
          </p>
        </div>
      </div>
    </footer>
  );
}

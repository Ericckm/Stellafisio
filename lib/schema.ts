import type { Post } from "./blog";

const BASE_URL = "https://stellasobral.com.br";
const PHONE = "+55 15 99675-8942";
const WHATSAPP = "5515996758942";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Stella Sobral Fisioterapia Domiciliar",
  description:
    "Fisioterapia domiciliar especializada em reabilitação pós-cirúrgica, geriatria e dores crônicas. Atendimento em Vila Nova Conceição, Itaim Bibi, Jardins, Faria Lima e Zona Sul de São Paulo.",
  url: BASE_URL,
  telephone: PHONE,
  image: `${BASE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
    description: "Atendimento domiciliar em Vila Nova Conceição, Itaim Bibi, Jardins, Faria Lima e Moema",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5884,
    longitude: -46.6758,
  },
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Cartão de Crédito, Débito, PIX, Dinheiro",
  medicalSpecialty: [
    "https://schema.org/PhysicalTherapy",
    "https://schema.org/Geriatric",
    "https://schema.org/Osteopathic",
  ],
  areaServed: [
    { "@type": "City", name: "São Paulo" },
    { "@type": "Place", name: "Vila Nova Conceição" },
    { "@type": "Place", name: "Itaim Bibi" },
    { "@type": "Place", name: "Faria Lima" },
    { "@type": "Place", name: "Jardins" },
    { "@type": "Place", name: "Moema" },
    { "@type": "Place", name: "Vila Olímpia" },
    { "@type": "Place", name: "Brooklin" },
    { "@type": "Place", name: "Pinheiros" },
    { "@type": "Place", name: "Vila Mariana" },
    { "@type": "Place", name: "Vila Madalena" },
    { "@type": "Place", name: "Sumarezinho" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "08:00",
    closes: "19:00",
  },
  founder: {
    "@type": "Person",
    name: "Stella Sobral",
    jobTitle: "Fisioterapeuta",
    description:
      "Fisioterapeuta especializada em reabilitação ortopédica e atendimento domiciliar em São Paulo.",
    sameAs: [`https://wa.me/${WHATSAPP}`],
  },
  sameAs: [`https://wa.me/${WHATSAPP}`],
};

export const posCircurgicaSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fisioterapia Pós-Operatória Domiciliar",
  description:
    "Reabilitação especializada após cirurgias ortopédicas, incluindo artroplastia de joelho e quadril, ligamentoplastia e cirurgias de ombro, realizada no domicílio do paciente em São Paulo.",
  procedureType: "Physical Therapy",
  bodyLocation: "Musculoskeletal",
  followup: "Protocolo individualizado de reabilitação com reavaliações periódicas",
  provider: {
    "@type": "MedicalBusiness",
    name: "Stella Sobral Fisioterapia Domiciliar",
    url: BASE_URL,
  },
};

export const geriatriaSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fisioterapia Geriátrica Domiciliar para Idosos",
  description:
    "Fisioterapia especializada para idosos com foco em equilíbrio, marcha, prevenção de quedas e manutenção da independência funcional, realizada no domicílio em São Paulo.",
  procedureType: "Physical Therapy",
  bodyLocation: "Musculoskeletal",
  followup: "Avaliação funcional periódica e adaptação do protocolo",
  provider: {
    "@type": "MedicalBusiness",
    name: "Stella Sobral Fisioterapia Domiciliar",
    url: BASE_URL,
  },
};

export const doresCronicasSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Fisioterapia para Dores Crônicas Domiciliar",
  description:
    "Tratamento fisioterapêutico domiciliar para lombalgia, cervicalgia, fibromialgia e tendinites crônicas, com abordagem multimodal e educação do paciente em São Paulo.",
  procedureType: "Physical Therapy",
  bodyLocation: "Musculoskeletal",
  followup: "Plano de exercícios domiciliares e reavaliação de dor",
  provider: {
    "@type": "MedicalBusiness",
    name: "Stella Sobral Fisioterapia Domiciliar",
    url: BASE_URL,
  },
};

export const reabilitacaoSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Reabilitação Traumato-Ortopédica Domiciliar",
  description:
    "Reabilitação domiciliar estruturada em fases para lesões musculoesqueléticas, fraturas, luxações e traumas ortopédicos em São Paulo.",
  procedureType: "Physical Therapy",
  bodyLocation: "Musculoskeletal",
  followup: "Protocolo progressivo em fases com critérios clínicos de progressão",
  provider: {
    "@type": "MedicalBusiness",
    name: "Stella Sobral Fisioterapia Domiciliar",
    url: BASE_URL,
  },
};

export const quiropraxiaSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Quiropraxia Instrumental Domiciliar",
  description:
    "Ajuste articular de alta precisão com instrumentos especializados no domicílio, indicado para bloqueios vertebrais, dor cervical e lombar, e cefaleia tensional em São Paulo.",
  procedureType: "Physical Therapy",
  bodyLocation: "Spine",
  followup: "Reavaliação postural e manutenção da mobilidade articular",
  provider: {
    "@type": "MedicalBusiness",
    name: "Stella Sobral Fisioterapia Domiciliar",
    url: BASE_URL,
  },
};

export const liberacaoMiofascialSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Liberação Miofascial Instrumental (IASTM) Domiciliar",
  description:
    "Terapia de mobilização de tecidos moles assistida por instrumento (IASTM) no domicílio, para aderências fasciais, cicatrizes pós-cirúrgicas e tendinopatias crônicas em São Paulo.",
  procedureType: "Physical Therapy",
  bodyLocation: "Musculoskeletal",
  followup: "Exercícios de alongamento fascial e prevenção de recidivas",
  provider: {
    "@type": "MedicalBusiness",
    name: "Stella Sobral Fisioterapia Domiciliar",
    url: BASE_URL,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual o valor da sessão de fisioterapia domiciliar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os valores variam conforme o plano de tratamento, a frequência e a especialidade. Entre em contato pelo WhatsApp para receber um orçamento personalizado, sem compromisso.",
      },
    },
    {
      "@type": "Question",
      name: "O atendimento de fisioterapia domiciliar é particular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todo o atendimento é particular, sem convênios. Isso permite total liberdade na definição do protocolo e no tempo dedicado exclusivamente a cada paciente.",
      },
    },
    {
      "@type": "Question",
      name: "Quais bairros de São Paulo são atendidos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos em Vila Nova Conceição, Itaim Bibi, Faria Lima, Jardins, Moema, Vila Olímpia, Brooklin, Pinheiros, Vila Mariana e regiões adjacentes. Entre em contato para verificar disponibilidade na sua localização.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo dura cada sessão de fisioterapia domiciliar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada sessão tem duração de 60 minutos, tempo inteiramente dedicado ao seu tratamento — sem compartilhamento com outros pacientes.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso de encaminhamento médico para a fisioterapia domiciliar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não é obrigatório. O fisioterapeuta realiza avaliação independente. Um relatório ou laudo médico pode enriquecer o histórico clínico, mas não é pré-requisito para iniciar o tratamento.",
      },
    },
  ],
};

export function articleSchema(post: Pick<Post, "slug" | "title" | "excerpt" | "date">) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Stella Sobral",
      jobTitle: "Fisioterapeuta",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Stella Sobral Fisioterapia Domiciliar",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

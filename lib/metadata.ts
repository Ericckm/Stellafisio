import type { Metadata } from "next";

const BASE_URL = "https://stellasobral.com.br";

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Stella Sobral Fisioterapia",
    default: "Fisioterapia Domiciliar no Itaim Bibi: Agende Agora | Stella Sobral",
  },
  description:
    "Pós-graduada em ortopedia e traumatologia. Fisioterapia domiciliar em Itaim Bibi, Jardins e Moema — disfunções ortopédicas agudas e crônicas, reabilitação pós-cirúrgica e geriatria. Sem sair de casa.",
  keywords: [
    // Geral domiciliar
    "fisioterapia domiciliar São Paulo",
    "fisioterapeuta domiciliar SP",
    "fisioterapeuta em casa São Paulo",
    "fisioterapia em casa São Paulo",

    // Bairros
    "fisioterapia domiciliar Itaim Bibi",
    "fisioterapia domiciliar Vila Nova Conceição",
    "fisioterapia Faria Lima domiciliar",
    "fisioterapia em casa Jardins SP",
    "fisioterapia Moema domiciliar",
    "fisioterapia Vila Madalena domiciliar",
    "fisioterapia Sumarezinho domiciliar",
    "fisioterapia zona sul SP domiciliar",

    // Ortopedia geral
    "fisioterapia ortopédica domiciliar SP",
    "disfunções ortopédicas fisioterapia domiciliar SP",
    "reabilitação ortopédica domiciliar São Paulo",
    "pós-graduada ortopedia e traumatologia fisioterapia SP",

    // Dores agudas e crônicas
    "fisioterapia dores crônicas e agudas domiciliar SP",
    "fisioterapia dor aguda domiciliar São Paulo",
    "dores crônicas fisioterapia domiciliar SP",
    "fisioterapia para dor nas costas São Paulo",
    "fisioterapia para dor lombar SP",
    "fisioterapia hérnia de disco São Paulo",
    "fisioterapia cervicalgia São Paulo",
    "fisioterapia fibromialgia domiciliar SP",
    "fisioterapia tendinite domiciliar SP",
    "fisioterapia bursite domiciliar SP",
    "fisioterapia artrose domiciliar SP",

    // Ombro, joelho, quadril
    "fisioterapia lesão de ombro domiciliar SP",
    "fisioterapia manguito rotador São Paulo",
    "fisioterapia síndrome do impacto ombro SP",
    "fisioterapia dor no joelho São Paulo",
    "fisioterapia lesão de quadril domiciliar SP",
    "fisioterapia dor patelofemoral SP",

    // Pós-operatório
    "fisioterapia pós-operatória domiciliar SP",
    "reabilitação pós-cirúrgica zona sul SP",
    "reabilitação pós artroplastia domiciliar SP",
    "fisioterapia pós cirurgia de joelho domiciliar SP",
    "fisioterapia pós cirurgia de quadril domiciliar SP",
    "reabilitação pós ligamentoplastia domiciliar SP",
    "fisioterapia pós operatório joelho SP",
    "reabilitação LCA domiciliar São Paulo",
    "fisioterapia pós cirurgia coluna domiciliar SP",
    "fisioterapia pós fratura domiciliar SP",

    // Geriatria
    "fisioterapia para idosos domiciliar SP",
    "fisioterapia para idosos zona sul SP",
    "fisioterapia geriátrica domiciliar SP",
    "prevenção de quedas idosos fisioterapia SP",
    "fisioterapia equilíbrio e marcha domiciliar SP",

    // Técnicas
    "quiropraxia instrumental domiciliar SP",
    "liberação miofascial IASTM domiciliar SP",

    // Marca
    "Stella Sobral fisioterapia",
    "Stella Sobral fisioterapeuta Itaim Bibi",
  ],
  authors: [{ name: "Stella Sobral" }],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Stella Sobral Fisioterapia Domiciliar",
    title: "Fisioterapia Domiciliar no Itaim Bibi: Agende Agora | Stella Sobral",
    description:
      "Pós-graduada em ortopedia e traumatologia. Fisioterapia domiciliar em Itaim Bibi, Jardins e Moema — disfunções ortopédicas agudas e crônicas, reabilitação pós-cirúrgica e geriatria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia Domiciliar no Itaim Bibi: Agende Agora | Stella Sobral",
    description:
      "Pós-graduada em ortopedia e traumatologia. Fisioterapia domiciliar em Itaim Bibi, Jardins e Moema — disfunções ortopédicas agudas e crônicas, reabilitação pós-cirúrgica e geriatria.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const serviceMeta: Record<string, Metadata> = {
  "fisioterapia-pos-operatoria": {
    title: "Fisioterapia Pós-Operatória Domiciliar SP",
    description:
      "Reabilitação pós-cirúrgica ortopédica em casa — artroplastias, ligamentoplastias, cirurgias de coluna e fraturas. Atendimento domiciliar no Itaim Bibi, Jardins e Moema.",
    alternates: {
      canonical: `${BASE_URL}/servicos/fisioterapia-pos-operatoria`,
    },
    openGraph: {
      title: "Fisioterapia Pós-Operatória Domiciliar SP | Stella Sobral",
      description:
        "Reabilitação pós-cirúrgica ortopédica em casa — artroplastias, ligamentoplastias, cirurgias de coluna e fraturas. Atendimento no Itaim Bibi, Jardins e Moema.",
    },
  },
  "fisioterapia-para-idosos": {
    title: "Fisioterapia Domiciliar para Idosos SP",
    description:
      "Fisioterapia geriátrica domiciliar em São Paulo. Equilíbrio, marcha, força muscular e prevenção de quedas. Atendimento especializado no Itaim Bibi e Zona Sul.",
    alternates: {
      canonical: `${BASE_URL}/servicos/fisioterapia-para-idosos`,
    },
    openGraph: {
      title: "Fisioterapia Domiciliar para Idosos SP | Stella Sobral",
      description:
        "Fisioterapia geriátrica domiciliar em São Paulo. Equilíbrio, marcha, força muscular e prevenção de quedas.",
    },
  },
  "dores-cronicas-e-agudas": {
    title: "Fisioterapia para Dores Crônicas e Agudas Domiciliar SP",
    description:
      "Tratamento de lombalgia, cervicalgia, dores musculares agudas e crônicas em casa. Fisioterapeuta domiciliar no Itaim Bibi, Jardins e Pinheiros — SP.",
    alternates: {
      canonical: `${BASE_URL}/servicos/dores-cronicas-e-agudas`,
    },
    openGraph: {
      title: "Fisioterapia para Dores Crônicas e Agudas Domiciliar SP | Stella Sobral",
      description:
        "Tratamento de lombalgia, cervicalgia, dores musculares agudas e crônicas em casa. Fisioterapeuta domiciliar no Itaim Bibi, Jardins e Pinheiros.",
    },
  },
};

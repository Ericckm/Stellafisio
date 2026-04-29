import type { Metadata } from "next";

const BASE_URL = "https://stellasobral.com.br";

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Stella Sobral Fisioterapia",
    default: "Fisioterapia Domiciliar no Itaim Bibi: Agende Agora | Stella Sobral",
  },
  description:
    "Fisioterapia domiciliar especializada em Vila Nova Conceição, Itaim Bibi, Jardins e Faria Lima. Pós-cirúrgica, Idosos e Dores Crônicas. Agende sua avaliação — sem sair de casa.",
  keywords: [
    "fisioterapia domiciliar São Paulo",
    "fisioterapeuta domiciliar SP",
    "fisioterapia domiciliar Itaim Bibi",
    "fisioterapia domiciliar Vila Nova Conceição",
    "fisioterapia Faria Lima domiciliar",
    "fisioterapia em casa Jardins SP",
    "fisioterapia Moema domiciliar",
    "fisioterapia Vila Madalena domiciliar",
    "fisioterapia Sumarezinho domiciliar",
    "fisioterapia para idosos domiciliar SP",
    "fisioterapia pós-operatória domiciliar SP",
    "dores crônicas fisioterapia domiciliar",
    "quiropraxia instrumental domiciliar SP",
    "liberação miofascial IASTM domiciliar SP",
    "Stella Sobral fisioterapia",
  ],
  authors: [{ name: "Stella Sobral" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Stella Sobral Fisioterapia Domiciliar",
    title: "Fisioterapia Domiciliar no Itaim Bibi: Agende Agora | Stella Sobral",
    description:
      "Fisioterapia domiciliar especializada em Vila Nova Conceição, Itaim Bibi, Jardins e Faria Lima. Pós-cirúrgica, Idosos e Dores Crônicas. Agende sua avaliação — sem sair de casa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia Domiciliar no Itaim Bibi: Agende Agora | Stella Sobral",
    description:
      "Fisioterapia domiciliar especializada em Vila Nova Conceição, Itaim Bibi, Jardins e Faria Lima. Pós-cirúrgica, Idosos e Dores Crônicas.",
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
      "Recuperação pós-cirúrgica ortopédica no conforto do lar. Atendimento domiciliar no Itaim Bibi, Jardins e Moema. Agende pelo WhatsApp.",
    alternates: {
      canonical: `${BASE_URL}/servicos/fisioterapia-pos-operatoria`,
    },
    openGraph: {
      title: "Fisioterapia Pós-Operatória Domiciliar SP | Stella Sobral",
      description:
        "Recuperação pós-cirúrgica ortopédica no conforto do lar. Atendimento domiciliar no Itaim Bibi, Jardins e Moema.",
    },
  },
  "fisioterapia-para-idosos": {
    title: "Fisioterapia Domiciliar para Idosos SP",
    description:
      "Fisioterapia geriátrica domiciliar em São Paulo. Equilíbrio, mobilidade e prevenção de quedas. Atendimento especializado no Itaim Bibi e Zona Sul.",
    alternates: {
      canonical: `${BASE_URL}/servicos/fisioterapia-para-idosos`,
    },
    openGraph: {
      title: "Fisioterapia Domiciliar para Idosos SP | Stella Sobral",
      description:
        "Fisioterapia geriátrica domiciliar em São Paulo. Equilíbrio, mobilidade e prevenção de quedas.",
    },
  },
  "dores-cronicas": {
    title: "Fisioterapia para Dores Crônicas Domiciliar SP",
    description:
      "Tratamento de lombalgia, cervicalgia e dores musculares em casa. Fisioterapeuta domiciliar no Itaim Bibi, Jardins e Pinheiros — SP.",
    alternates: {
      canonical: `${BASE_URL}/servicos/dores-cronicas`,
    },
    openGraph: {
      title: "Fisioterapia para Dores Crônicas Domiciliar SP | Stella Sobral",
      description:
        "Tratamento de lombalgia, cervicalgia e dores musculares em casa. Fisioterapeuta domiciliar no Itaim Bibi, Jardins e Pinheiros.",
    },
  },
};

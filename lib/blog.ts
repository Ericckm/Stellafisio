const BASE_URL = "https://stellasobralfisioterapia.com.br";

export type Section = {
  heading: string;
  body: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  keyword: string;
  readTime: number;
  intro: string;
  sections: Section[];
};

export const posts: Post[] = [
  {
    slug: "dor-lombar-sao-paulo",
    title: "Fisioterapia para Dor Lombar em São Paulo: o que realmente funciona",
    excerpt:
      "Tem dor lombar em São Paulo e não sabe por onde começar? Entenda as causas, os tratamentos que funcionam e como a fisioterapia domiciliar pode resolver o problema sem você sair de casa.",
    date: "2026-04-29",
    keyword: "fisioterapia para dor lombar São Paulo",
    readTime: 7,
    intro:
      "A dor lombar é a queixa mais comum nos consultórios de fisioterapia no Brasil — e também uma das mais mal tratadas. Muita gente convive anos com dor nas costas tomando analgésico, fazendo repouso e esperando melhorar por conta própria. Raramente funciona.\n\nSe você mora em São Paulo e está nessa situação, este artigo é para você. Vamos explicar o que causa a dor lombar, quais tratamentos têm respaldo científico e por que a fisioterapia domiciliar pode ser a opção mais eficaz — e mais prática — para quem vive na cidade.",
    sections: [
      {
        heading: "O que é dor lombar e por que ela não some sozinha",
        body: "A lombar é a região inferior da coluna vertebral, responsável por sustentar a maior parte do peso do corpo e permitir movimentos como sentar, levantar e se inclinar. Por isso, é uma das regiões mais sobrecarregadas do organismo.\n\nA dor lombar pode ser aguda (aparece de repente, dura até 6 semanas) ou crônica (persiste por mais de 3 meses). A crônica é a mais preocupante — e a mais comum entre quem deixa de tratar adequadamente.\n\nAs causas mais frequentes incluem:\n\n**Hérnia de disco:** o disco intervertebral se desloca e pressiona nervos, causando dor intensa, às vezes irradiada para as pernas.\n\n**Lombalgia mecânica:** sobrecarga muscular por má postura, sedentarismo ou movimentos repetitivos.\n\n**Espondiloartrose:** desgaste das articulações da coluna, mais comum a partir dos 40 anos.\n\n**Contratura muscular:** tensão prolongada nos músculos paravertebrais, muitas vezes ligada ao estresse e à postura inadequada no trabalho.\n\nEm todos esses casos, repouso absoluto não é a solução. O movimento correto — guiado por um profissional — é.",
      },
      {
        heading: "Por que a fisioterapia é o tratamento mais indicado",
        body: "A fisioterapia para dor lombar é recomendada pelas principais diretrizes clínicas mundiais, incluindo as da OMS e da Sociedade Brasileira de Reumatologia. Não porque seja uma alternativa \"natural\", mas porque os estudos mostram resultados superiores aos de medicamentos isolados na maioria dos casos crônicos.\n\nO tratamento fisioterapêutico age em múltiplas frentes:\n\n**1. Avaliação da causa real da dor.** O primeiro passo é entender por que a dor existe. Um fisioterapeuta especialista em coluna faz uma avaliação postural, funcional e de mobilidade para identificar a origem do problema — não apenas aliviar o sintoma.\n\n**2. Técnicas manuais e manipulação vertebral.** Mobilizações e manipulações articulares realizadas pelo fisioterapeuta ajudam a restaurar a mobilidade das vértebras, reduzem a compressão nervosa e aliviam a dor de forma imediata em muitos casos.\n\n**3. Exercício terapêutico individualizado.** Diferente do que acontece em academias ou aplicativos genéricos, o exercício terapêutico é prescrito especificamente para o seu caso. Fortalecimento do core, estabilização lombar e reeducação postural são pilares do tratamento.\n\n**4. Recursos complementares.** Dependendo do caso, o fisioterapeuta pode utilizar eletroterapia, termoterapia, dry needling ou outras técnicas para potencializar os resultados.\n\n**5. Educação em dor.** Um aspecto muitas vezes negligenciado: entender como a dor funciona ajuda o paciente a sair do ciclo de medo e evitação que cronifica o quadro. Fisioterapeutas especializados incluem isso no tratamento.",
      },
      {
        heading: "Casos complexos exigem um olhar mais especializado",
        body: "Nem toda dor lombar responde da mesma forma ao tratamento. Pacientes com hérnia de disco volumosa, estenose do canal vertebral, cirurgia prévia na coluna ou dor crônica de longa data precisam de uma abordagem diferenciada.\n\nNesses casos, a experiência clínica do fisioterapeuta faz toda a diferença. Saber identificar padrões de movimento compensatório, adaptar as técnicas para limitações específicas e ajustar o plano terapêutico ao longo do processo são habilidades que se desenvolvem com anos de prática em casos desafiadores.\n\nSe você já fez fisioterapia antes e não obteve resultado satisfatório, o problema pode não ter sido o tratamento em si — mas a falta de personalização para o seu caso.",
      },
      {
        heading: "Por que fazer fisioterapia domiciliar em São Paulo faz sentido",
        body: "São Paulo tem mais de 12 milhões de habitantes, trânsito imprevisível e uma rotina que consome horas do dia. Para quem tem dor lombar, deslocar-se até uma clínica pode ser um obstáculo real — e às vezes até piorar o quadro.\n\nA fisioterapia domiciliar resolve esse problema de forma prática, mas vai além da comodidade:\n\n**Avaliação no ambiente real.** O fisioterapeuta observa sua postura no sofá, na cadeira de trabalho, no colchão — e identifica fatores que em uma clínica passariam despercebidos.\n\n**Maior aderência ao tratamento.** Estudos mostram que pacientes que fazem fisioterapia em casa faltam menos e seguem melhor as orientações. Isso se traduz em resultados mais rápidos e duradouros.\n\n**Atendimento individual e sem interrupções.** Sem sala de espera, sem divisão de atenção com outros pacientes. A sessão inteira é dedicada a você.\n\n**Horários flexíveis.** O atendimento se adapta à sua agenda, não o contrário.\n\nPara moradores de São Paulo que buscam fisioterapia para dor lombar, o atendimento domiciliar é frequentemente a escolha mais inteligente — tanto em termos de resultado quanto de qualidade de vida.",
      },
      {
        heading: "Quanto tempo leva o tratamento?",
        body: "Depende da causa e da gravidade do caso. Uma lombalgia mecânica aguda pode responder bem em 4 a 8 sessões. Casos crônicos ou mais complexos geralmente requerem entre 12 e 20 sessões, com progressão gradual dos exercícios.\n\nO que é certo: quanto mais cedo você começa, mais rápido e completo é o resultado. Adiar o tratamento costuma transformar uma dor aguda em um problema crônico — e tornar o caminho de volta mais longo.",
      },
      {
        heading: "O que esperar da primeira sessão",
        body: "Na primeira sessão, o fisioterapeuta realiza uma avaliação completa: histórico de saúde, exame de postura, testes de mobilidade e força, análise de exames de imagem (se houver) e compreensão da rotina do paciente.\n\nCom base nisso, é elaborado um plano terapêutico personalizado, com objetivos claros e prazos realistas. Você sai da primeira sessão sabendo exatamente o que tem, o que será feito e o que esperar.",
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function postUrl(slug: string): string {
  return `${BASE_URL}/blog/${slug}`;
}

export type ServiceIcon =
  | "activity"
  | "brush"
  | "calendar"
  | "clipboard"
  | "disc"
  | "droplets"
  | "gauge"
  | "heartPulse"
  | "scissors"
  | "sparkles"
  | "wind"
  | "wrench";

export type LocalReview = {
  name: string;
  rating: number;
  text: string;
};

export type LandingPageConfig = {
  slug: string;
  businessName: string;
  niche: string;
  category: string;
  city: string;
  state: string;
  neighborhood: string;
  phone: string;
  address: string;
  hours: string;
  openingHours: string;
  rating: number;
  reviewCount: string;
  reviews: LocalReview[];
  googleMapsUrl: string;
  googleReviewUrl: string;
  whatsappMessage: string;
  heroTitle: string;
  heroSubtitle: string;
  googleProfileText: string;
  services: Array<{
    name: string;
    description: string;
    icon: ServiceIcon;
  }>;
  differentiators: string[];
  theme: {
    accent: string;
    accentStrong: string;
    accentSoft: string;
    contrast: string;
    heroOne: string;
    heroTwo: string;
    heroThree: string;
    paper: string;
  };
};

export const landingPages = {
  bellaForma: {
    slug: "bella-forma",
    businessName: "Bella Forma Estética",
    niche: "estética",
    category: "Clínica de estética",
    city: "Maceió",
    state: "AL",
    neighborhood: "Ponta Verde",
    phone: "5582999999999",
    address: "Ponta Verde, Maceió - AL",
    hours: "Seg a Sáb, 09h às 18h",
    openingHours: "Seg a Sáb, 09h às 18h",
    rating: 4.9,
    reviewCount: "+120 avaliações",
    reviews: [
      {
        name: "Mariana S.",
        rating: 5,
        text: "Atendimento muito cuidadoso e ambiente super agradável.",
      },
      {
        name: "Camila R.",
        rating: 5,
        text: "Consegui tirar dúvidas pelo WhatsApp e agendar rapidinho.",
      },
      {
        name: "Juliana A.",
        rating: 5,
        text: "A clínica passa muita confiança desde o primeiro contato.",
      },
    ],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ponta+Verde,+Macei%C3%B3,+AL",
    googleReviewUrl: "#avaliar-no-google",
    whatsappMessage:
      "Olá, vim pela página e gostaria de agendar uma avaliação estética.",
    heroTitle: "Agende sua avaliação estética em Maceió pelo WhatsApp",
    heroSubtitle:
      "Uma página objetiva para apresentar serviços, destacar confiança local e levar a conversa direto para o WhatsApp com mensagem pronta.",
    googleProfileText:
      "O Perfil da Empresa no Google pode receber ajustes básicos de endereço, horário, telefone, categoria e botão de rota para ajudar clientes locais a encontrar e chamar o negócio com mais facilidade.",
    services: [
      {
        name: "Limpeza de pele",
        description: "Atendimento para renovar a pele com cuidado e orientação.",
        icon: "sparkles",
      },
      {
        name: "Design de sobrancelhas",
        description: "Formato alinhado ao rosto com acabamento delicado.",
        icon: "brush",
      },
      {
        name: "Drenagem linfática",
        description: "Sessões com foco em bem-estar e leveza corporal.",
        icon: "activity",
      },
      {
        name: "Depilação",
        description: "Opções práticas para rotina de cuidado pessoal.",
        icon: "scissors",
      },
      {
        name: "Massagem relaxante",
        description: "Pausa de relaxamento com atendimento por horário marcado.",
        icon: "heartPulse",
      },
      {
        name: "Avaliação estética",
        description: "Primeiro contato para entender objetivos e indicar serviços.",
        icon: "calendar",
      },
    ],
    differentiators: [
      "Atendimento por agendamento para evitar espera",
      "Serviços apresentados de forma clara para decisão rápida",
      "Mensagem de WhatsApp pronta para reduzir atrito no contato",
      "Dados locais organizados para reforçar confiança",
    ],
    theme: {
      accent: "#d9467d",
      accentStrong: "#9d174d",
      accentSoft: "#fdf2f8",
      contrast: "#0f172a",
      heroOne: "#fdf2f8",
      heroTwo: "#ecfeff",
      heroThree: "#fff7ed",
      paper: "#fffafa",
    },
  },
  autoPrime: {
    slug: "autoprime-oficina",
    businessName: "AutoPrime Oficina",
    niche: "oficina mecânica",
    category: "Oficina mecânica",
    city: "Maceió",
    state: "AL",
    neighborhood: "Tabuleiro do Martins",
    phone: "5582999999999",
    address: "Tabuleiro do Martins, Maceió - AL",
    hours: "Seg a Sex, 08h às 18h / Sáb, 08h às 12h",
    openingHours: "Seg a Sex, 08h às 18h / Sáb, 08h às 12h",
    rating: 4.8,
    reviewCount: "+90 avaliações",
    reviews: [
      {
        name: "Carlos M.",
        rating: 5,
        text: "Expliquei o problema pelo WhatsApp e recebi orientação rápida antes de levar o carro.",
      },
      {
        name: "Renato A.",
        rating: 5,
        text: "Atendimento direto, orçamento claro e revisão feita no prazo combinado.",
      },
      {
        name: "Bruno S.",
        rating: 5,
        text: "A oficina passou confiança e explicou o diagnóstico sem enrolação.",
      },
    ],
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Tabuleiro+do+Martins,+Macei%C3%B3,+AL",
    googleReviewUrl: "#avaliar-no-google",
    whatsappMessage:
      "Olá, vim pela página e gostaria de solicitar um orçamento para meu veículo.",
    heroTitle: "Solicite orçamento para seu veículo pelo WhatsApp",
    heroSubtitle:
      "Um modelo direto para oficina local mostrar serviços, orientar o cliente e receber pedidos de orçamento com uma mensagem pronta.",
    googleProfileText:
      "O Perfil da Empresa no Google pode ser ajustado com endereço, horário, telefone, serviços e link de rota, mantendo o contato local mais simples para quem pesquisa por oficina perto de casa.",
    services: [
      {
        name: "Troca de óleo",
        description: "Serviço rápido com orientação sobre o melhor intervalo.",
        icon: "droplets",
      },
      {
        name: "Revisão preventiva",
        description: "Checklist para identificar pontos de atenção antes da falha.",
        icon: "clipboard",
      },
      {
        name: "Freios",
        description: "Verificação de pastilhas, discos e segurança de frenagem.",
        icon: "disc",
      },
      {
        name: "Suspensão",
        description: "Avaliação de ruídos, estabilidade e conforto ao dirigir.",
        icon: "wrench",
      },
      {
        name: "Diagnóstico automotivo",
        description: "Leitura e análise de sinais do veículo para orçamento.",
        icon: "gauge",
      },
      {
        name: "Ar-condicionado automotivo",
        description: "Inspeção do sistema para melhorar desempenho e conforto.",
        icon: "wind",
      },
    ],
    differentiators: [
      "Pedido de orçamento enviado com contexto pelo WhatsApp",
      "Lista de serviços organizada para o cliente escolher rápido",
      "Presença local com endereço e rota em destaque",
      "Página responsiva para quem pesquisa pelo celular",
    ],
    theme: {
      accent: "#f59e0b",
      accentStrong: "#92400e",
      accentSoft: "#fffbeb",
      contrast: "#111827",
      heroOne: "#f8fafc",
      heroTwo: "#ecfeff",
      heroThree: "#fff7ed",
      paper: "#ffffff",
    },
  },
} satisfies Record<string, LandingPageConfig>;

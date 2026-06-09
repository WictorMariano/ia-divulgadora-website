export type FaqCategoryId = "afiliados" | "whatsapp" | "automacao" | "seguranca" | "planos";

export type FaqCategory = {
  id: FaqCategoryId;
  label: string;
  emoji: string;
};

export type FaqItem = {
  id: string;
  category: FaqCategoryId;
  question: string;
  answer: string;
};

export const faqCategories: FaqCategory[] = [
  { id: "afiliados", label: "Afiliados", emoji: "🔗" },
  { id: "whatsapp", label: "WhatsApp", emoji: "📱" },
  { id: "automacao", label: "Automação", emoji: "⚙️" },
  { id: "seguranca", label: "Segurança", emoji: "🛡️" },
  { id: "planos", label: "Planos", emoji: "💰" },
];

export const faqItems: FaqItem[] = [
  {
    id: "af-1",
    category: "afiliados",
    question: "Como a IA Divulgadora ajuda afiliados a vender mais?",
    answer:
      "A plataforma monitora ofertas nos marketplaces, gera links de afiliado, cria mensagens otimizadas e dispara automaticamente nos seus grupos — tudo em um único painel.",
  },
  {
    id: "af-2",
    category: "afiliados",
    question: "Preciso ter experiência para começar?",
    answer:
      "Não. A ferramenta foi pensada para iniciantes e avançados. Você configura em poucos minutos e já pode divulgar ofertas sem trabalho manual.",
  },
  {
    id: "af-3",
    category: "afiliados",
    question: "Quais marketplaces são suportados?",
    answer:
      "Shopee, Amazon, Mercado Livre, Magalu, Natura, Avon, Shein e outros. Novas integrações são adicionadas com frequência.",
  },
  {
    id: "wa-1",
    category: "whatsapp",
    question: "Posso conectar mais de um número de WhatsApp?",
    answer:
      "Sim. Dependendo do plano, você pode conectar múltiplos números e gerenciar disparos de forma centralizada.",
  },
  {
    id: "wa-2",
    category: "whatsapp",
    question: "A ferramenta envia mensagens automaticamente nos grupos?",
    answer:
      "Sim. Você define grupos, filas, intervalos e horários. A IA Divulgadora envia as ofertas automaticamente conforme sua configuração.",
  },
  {
    id: "wa-3",
    category: "whatsapp",
    question: "Existe risco de bloqueio no WhatsApp?",
    answer:
      "Utilizamos boas práticas de envio com intervalos inteligentes, filas e modos de disparo seguros para reduzir riscos. Recomendamos seguir as políticas do WhatsApp.",
  },
  {
    id: "au-1",
    category: "automacao",
    question: "O que é o Modo Clone?",
    answer:
      "Permite replicar estruturas de envio e configurações entre grupos ou operações, acelerando a escala sem refazer tudo manualmente.",
  },
  {
    id: "au-2",
    category: "automacao",
    question: "Como funcionam as filas de envio?",
    answer:
      "Você organiza ofertas em filas com prioridade, horários e intervalos. O sistema processa automaticamente respeitando suas regras.",
  },
  {
    id: "au-3",
    category: "automacao",
    question: "Posso agendar disparos?",
    answer:
      "Sim. Agende envios para horários estratégicos e deixe a operação rodando 24 horas por dia.",
  },
  {
    id: "se-1",
    category: "seguranca",
    question: "Meus dados estão protegidos?",
    answer:
      "Sim. Utilizamos criptografia, ambientes seguros e políticas rigorosas de privacidade para proteger suas informações e credenciais.",
  },
  {
    id: "se-2",
    category: "seguranca",
    question: "A plataforma usa conexão segura?",
    answer:
      "Toda comunicação com a plataforma é feita via HTTPS e protocolos seguros de autenticação.",
  },
  {
    id: "se-3",
    category: "seguranca",
    question: "Vocês compartilham meus dados com terceiros?",
    answer:
      "Não vendemos seus dados. Informações são usadas apenas para operar o serviço e melhorar sua experiência.",
  },
  {
    id: "pl-1",
    category: "planos",
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Não há fidelidade. Você pode cancelar a assinatura a qualquer momento diretamente pelo painel.",
  },
  {
    id: "pl-2",
    category: "planos",
    question: "Existe plano gratuito para testar?",
    answer:
      "Sim. Você pode criar sua conta gratuita e começar a explorar a plataforma antes de assinar um plano pago.",
  },
  {
    id: "pl-3",
    category: "planos",
    question: "Qual a diferença entre os planos?",
    answer:
      "Os planos variam em quantidade de grupos, recursos avançados como filas, SubID, multiconexão e suporte. Consulte a seção de planos para comparar.",
  },
];

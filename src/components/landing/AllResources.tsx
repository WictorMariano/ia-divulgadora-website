"use client";

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarClock,
  CalendarRange,
  ChevronDown,
  Clock,
  Copy,
  ImageIcon,
  Instagram,
  Layers,
  LayoutDashboard,
  LayoutTemplate,
  Link2,
  Megaphone,
  MessageCircle,
  Radar,
  Send,
  ShoppingBag,
  Sparkles,
  Tags,
  Timer,
  Users,
  Wand2,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { SectionContainer } from "./SectionContainer";
import { cn } from "@/lib/utils";

type Badge = "Novo" | "Exclusivo" | "Mais usado";

type Resource = {
  title: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
  badge?: Badge;
};

const badgeStyles: Record<Badge, string> = {
  Novo: "bg-orange-500 text-white",
  Exclusivo: "bg-violet-500/90 text-white",
  "Mais usado": "bg-sky-500/90 text-white",
};

const resources: Resource[] = [
  {
    title: "Geração Instantânea de Links",
    description:
      "Permite colar URLs de marketplaces compatíveis e converter automaticamente para o link de afiliado configurado na plataforma.",
    benefit: "Elimina processos manuais e reduz erros na divulgação de ofertas.",
    icon: Link2,
  },
  {
    title: "Disparo em Massa no WhatsApp",
    description:
      "Envia mensagens para múltiplos grupos de WhatsApp simultaneamente utilizando regras configuradas pelo usuário.",
    benefit: "Aumenta o alcance das campanhas com mínimo esforço operacional.",
    icon: Send,
    badge: "Mais usado",
  },
  {
    title: "Espelhamento Inteligente 24h",
    description:
      "Monitora grupos e canais configurados e replica automaticamente promoções para os destinos definidos.",
    benefit: "Mantém os grupos ativos continuamente sem necessidade de intervenção manual.",
    icon: Radar,
    badge: "Mais usado",
  },
  {
    title: "Mercado Livre Automático",
    description:
      "Detecta promoções relevantes, converte os links para afiliado e realiza a publicação automaticamente.",
    benefit: "Reduz o tempo entre a descoberta da oferta e sua divulgação.",
    icon: ShoppingBag,
  },
  {
    title: "Sistema de Filas Inteligente",
    description:
      "Gerencia publicações através de filas automáticas para garantir estabilidade e distribuição adequada das mensagens.",
    benefit: "Evita excesso de envios simultâneos e melhora a segurança operacional.",
    icon: Layers,
  },
  {
    title: "Agendamento de Publicações",
    description:
      "Permite definir horários específicos para publicação automática de promoções e campanhas.",
    benefit: "Mantém consistência nas divulgações mesmo quando o usuário está offline.",
    icon: CalendarClock,
  },
  {
    title: "Conteúdo Pronto para Instagram",
    description:
      "Gera automaticamente textos, legendas e estruturas de publicação voltadas para divulgação de ofertas.",
    benefit: "Aumenta a produtividade e reduz dependência de criação manual.",
    icon: Instagram,
  },
  {
    title: "Segmentação por Nicho",
    description:
      "Classifica promoções por categoria e nicho para distribuição mais eficiente.",
    benefit: "Melhora taxas de engajamento e conversão.",
    icon: Tags,
  },
  {
    title: "CTAs Persuasivos com IA",
    description:
      "Cria automaticamente chamadas para ação otimizadas para diferentes tipos de ofertas.",
    benefit: "Eleva o potencial de conversão das campanhas.",
    icon: Wand2,
  },
  {
    title: "Modo Clone",
    description:
      "Replica mensagens existentes substituindo apenas os links necessários.",
    benefit: "Reduz significativamente o tempo de publicação.",
    icon: Copy,
    badge: "Mais usado",
  },
  {
    title: "MultiConexão WhatsApp",
    description:
      "Permite conectar múltiplos números de WhatsApp à mesma conta da plataforma.",
    benefit: "Aumenta a capacidade de distribuição e reduz limitações operacionais.",
    icon: Users,
    badge: "Novo",
  },
  {
    title: "Fura Fila Inteligente",
    description:
      "Permite que determinadas ofertas assumam prioridade máxima nas filas de publicação.",
    benefit: "Evita perda de oportunidades em promoções relâmpago.",
    icon: Zap,
    badge: "Novo",
  },
  {
    title: "Marcar Todos",
    description:
      "Realiza menções coletivas aos participantes dos grupos em campanhas específicas.",
    benefit: "Aumenta alcance e taxa de visualização das promoções.",
    icon: Megaphone,
    badge: "Novo",
  },
  {
    title: "Link Preview Profissional",
    description:
      "Gera pré-visualizações atrativas contendo imagem, título e descrição da oferta.",
    benefit: "Aumenta a taxa de cliques dos compartilhamentos.",
    icon: ImageIcon,
    badge: "Novo",
  },
  {
    title: "SubID por Marketplace",
    description:
      "Permite rastrear cliques e vendas através de identificadores personalizados por canal e marketplace.",
    benefit: "Facilita análises e otimizações de performance.",
    icon: BarChart3,
    badge: "Exclusivo",
  },
  {
    title: "Gestão de Leads",
    description:
      "Disponibiliza painel com informações sobre cliques, conversões, desempenho e indicadores de campanhas.",
    benefit: "Permite decisões baseadas em dados reais.",
    icon: LayoutDashboard,
    badge: "Exclusivo",
  },
  {
    title: "Intervalos Personalizados",
    description:
      "Permite definir intervalos específicos entre publicações e disparos.",
    benefit: "Garante comportamento mais natural e seguro.",
    icon: Timer,
    badge: "Novo",
  },
  {
    title: "Horário de Funcionamento",
    description:
      "Define horários de início e encerramento das automações.",
    benefit: "Permite adequar as campanhas ao comportamento do público.",
    icon: Clock,
  },
  {
    title: "Vitrine / Landing Page",
    description:
      "Permite criar uma página personalizada contendo produtos, promoções e links de afiliado.",
    benefit: "Facilita a divulgação e organização das ofertas.",
    icon: LayoutTemplate,
  },
  {
    title: "Instagram Responde",
    description:
      "Responde automaticamente comentários e mensagens recebidas no Instagram.",
    benefit: "Mantém o perfil ativo e melhora o relacionamento com a audiência.",
    icon: MessageCircle,
  },
  {
    title: "Agendamento para Instagram",
    description:
      "Permite programar posts, stories, reels e publicações de feed com antecedência.",
    benefit: "Mantém consistência nas redes sociais sem necessidade de atuação manual.",
    icon: CalendarRange,
  },
];

const INITIAL_VISIBLE = 6;

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#0a0f18] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-500/25 hover:shadow-lg">
      {resource.badge && (
        <span
          className={cn(
            "absolute right-3 top-3 rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide",
            badgeStyles[resource.badge],
          )}
        >
          {resource.badge}
        </span>
      )}

      <div className="flex items-start gap-3 pr-14">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
          <Icon className="size-5" strokeWidth={2} />
        </div>
        <h3 className="min-w-0 text-base font-bold leading-snug text-white sm:text-lg">
          {resource.title}
        </h3>
      </div>

      <p className="on-dark-copy-muted mt-3 text-sm leading-relaxed">
        {resource.description}
      </p>
      <p className="on-dark-copy-subtle mt-2 text-xs leading-relaxed sm:text-sm">
        {resource.benefit}
      </p>
    </article>
  );
}

export function AllResources() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? resources : resources.slice(0, INITIAL_VISIBLE);
  const hiddenCount = resources.length - INITIAL_VISIBLE;

  return (
    <section
      id="todos-os-recursos"
      className="relative overflow-hidden border-t border-white/8 py-16 md:py-24"
    >
      <SectionContainer>
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
            <Sparkles className="size-3.5 text-orange-400" strokeWidth={2.5} />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-300">
              Todos os recursos
            </span>
          </div>

          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Arsenal Completo de Automação{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              para Afiliados
            </span>
          </h2>
          <p className="on-dark-copy-muted mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            Enquanto você dorme, a IA Divulgadora trabalha. Cada recurso foi desenvolvido para
            maximizar suas conversões e eliminar tarefas repetitivas.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {visible.map((resource, index) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-orange-500/40 hover:bg-orange-500/10"
          >
            {expanded ? (
              <>
                Ver menos recursos
                <ChevronDown className="size-4 rotate-180" />
              </>
            ) : (
              <>
                Ver mais recursos ({hiddenCount})
                <ChevronDown className="size-4" />
              </>
            )}
          </button>
        </div>
      </SectionContainer>
    </section>
  );
}

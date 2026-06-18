import {

  AlarmClock,

  Banknote,

  BarChart3,

  ChartNoAxesColumnDecreasing,

  Search,

  TrendingDown,

  Zap,

} from "lucide-react";

import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

import { SectionContainer } from "./SectionContainer";

import { SectionCta } from "./SectionCta";



const realityItems: BentoItem[] = [

  {

    title: "Monitoramento manual",

    meta: "70% perdidas",

    description:

      "Horas pesquisando ofertas em dezenas de marketplaces — sem garantia de pegar as melhores oportunidades a tempo.",

    icon: <Search className="size-4 text-cta" strokeWidth={2} />,

    status: "Crítico",

    tags: ["Marketplaces", "24h", "Manual"],

    colSpan: 2,

    hasPersistentHover: true,

  },

  {

    title: "Perda de tempo",

    meta: "4h+/dia",

    description:

      "Criar links, formatar posts e disparar em grupos manualmente consome o dia que deveria ir para escala.",

    icon: <AlarmClock className="size-4 text-orange-400" strokeWidth={2} />,

    status: "Diário",

    tags: ["Links", "Posts", "Grupos"],

  },

  {

    title: "Baixa conversão",

    meta: "−40% comissões",

    description:

      "Sem divulgação constante e estratégica, o potencial de receita fica muito abaixo do que você poderia ter.",

    icon: <ChartNoAxesColumnDecreasing className="size-4 text-amber-400" strokeWidth={2} />,

    status: "Recorrente",

    tags: ["Divulgação", "Escala"],

  },

  {

    title: "Dinheiro na mesa",

    meta: "todo dia",

    description:

      "Afiliados perdem até 70% das melhores ofertas por não conseguirem acompanhar todos os canais o tempo todo.",

    icon: <TrendingDown className="size-4 text-red-400" strokeWidth={2} />,

    status: "Alto risco",

    tags: ["Receita", "Oportunidades"],

    colSpan: 2,

    cta: "Ver impacto →",

  },

  {

    title: "Automação resolve",

    meta: "24/7",

    description:

      "Monitoramento contínuo, envios inteligentes e mais conversões — sem você ficar preso na operação manual.",

    icon: <Zap className="size-4 text-cta" strokeWidth={2} />,

    status: "Com IA Divulgadora",

    tags: ["Automação", "IA", "Escala"],

    colSpan: 3,

    hasPersistentHover: true,

    cta: "Começar →",

  },

];



export function AffiliateReality() {

  return (

    <section className="panel-showcase relative overflow-hidden border-t border-white/8 py-12 md:py-24">

      <div aria-hidden className="panel-showcase-lights pointer-events-none absolute inset-0 overflow-hidden">

        <div className="panel-showcase-light panel-showcase-light--blue" />

        <div className="panel-showcase-light panel-showcase-light--orange" />

        <div className="panel-showcase-light panel-showcase-light--blue-soft" />

        <div className="panel-showcase-vignette" />

      </div>

      <div

        aria-hidden

        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,color-mix(in_oklab,var(--cta)_8%,transparent),transparent_55%)]"

      />



      <SectionContainer className="relative z-10">

        <div className="mx-auto max-w-3xl text-center">

          <div className="section-badge mx-auto mb-5 w-fit backdrop-blur-sm">

            <BarChart3 className="size-3.5" strokeWidth={2.5} />

            <span>A realidade do afiliado hoje</span>

          </div>



          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">

            Você está perdendo{" "}

            <span className="section-title-gradient">dinheiro todos os dias</span>

          </h2>



          <p className="site-lead mx-auto mt-4 max-w-2xl text-pretty text-sm sm:text-base">

            Pesquisas mostram que afiliados perdem até{" "}

            <span className="font-bold text-orange-400">70%</span> das melhores ofertas por não

            conseguirem acompanhar todos os marketplaces 24 horas por dia.

          </p>

        </div>



        <BentoGrid items={realityItems} className="mt-10 md:mt-14" />



        <div className="mx-auto mt-8 max-w-3xl md:mt-10">

          <div className="summary-callout relative z-10 flex flex-col items-center gap-4 rounded-2xl border border-cta/25 bg-black/40 px-5 py-5 text-center shadow-[0_0_40px_-20px_color-mix(in_oklab,var(--cta)_35%,transparent)] backdrop-blur-sm sm:flex-row sm:gap-5 sm:px-6 sm:text-left md:py-6">

            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cta/25 bg-cta/10 text-cta shadow-[0_0_24px_-6px_color-mix(in_oklab,var(--cta)_40%,transparent)]">

              <Banknote className="size-6" strokeWidth={1.75} />

            </div>

            <p className="summary-callout-text text-sm leading-relaxed sm:text-base">

              <span>Não é falta de esforço.</span>{" "}

              <span className="summary-callout-highlight">É falta de automação.</span>{" "}

              <span>A IA Divulgadora resolve isso para você.</span>

            </p>

          </div>

        </div>



        <SectionCta />

      </SectionContainer>

    </section>

  );

}



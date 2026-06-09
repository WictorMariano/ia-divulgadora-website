import { ContainerScroll } from "@/components/ui/container-scroll";
import dashboardImg from "@/assets/dashboard-preview.png";
import { Results } from "./Results";

export function HeroScroll() {
  const title = (
    <div className="flex flex-col items-center px-4 sm:px-6">
      <h2 className="max-w-4xl text-balance text-center text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-[1.12] lg:text-6xl">
        Monitore Grupos e gerencie tudo em{" "}
        <span className="section-title-gradient">um só painel</span>
      </h2>

      <p className="mt-6 mb-4 max-w-3xl text-pretty text-center text-base leading-relaxed text-zinc-300 sm:mt-8 sm:mb-5 sm:text-lg sm:leading-[1.7] md:mb-6">
        Organize promoções, cupons, lojas e links de afiliados de forma simples,
        centralizada e eficiente. Dispare posts de alta conversão automaticamente.{" "}
        <span className="text-zinc-500">
          A inteligência artificial que trabalha enquanto você dorme.
        </span>
      </p>
    </div>
  );

  return (
    <section id="demonstracao" className="panel-showcase relative overflow-hidden">
      <div aria-hidden className="panel-showcase-lights pointer-events-none absolute inset-0 overflow-hidden">
        <div className="panel-showcase-light panel-showcase-light--blue" />
        <div className="panel-showcase-light panel-showcase-light--orange" />
        <div className="panel-showcase-light panel-showcase-light--blue-soft" />
        <div className="panel-showcase-vignette" />
      </div>

      <div className="relative z-10">
        <ContainerScroll titleComponent={title}>
          <img
            src={dashboardImg}
            alt="Painel da IA Divulgadora com métricas de afiliados, conversão e disparos automáticos"
            width={1600}
            height={900}
            draggable={false}
            className="block h-full w-full object-contain object-center"
          />
        </ContainerScroll>

        <Results embedded />
      </div>
    </section>
  );
}

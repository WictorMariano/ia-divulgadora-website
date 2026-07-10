import { ContainerScroll } from "@/components/ui/container-scroll";
import shopeeSlideImg from "@/assets/slide-shopee.jpeg";
import { Results } from "./Results";
import { SectionCta } from "./SectionCta";

export function HeroScroll() {
  const title = (
    <div className="flex flex-col items-center px-4 sm:px-6">
      <h2 className="max-w-4xl text-balance text-center text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-[1.12] lg:text-6xl">
        Ganhe mais em cada venda com a{" "}
        <span className="section-title-gradient">Shopee Vantagens</span>
      </h2>

      <p className="mt-6 max-w-3xl text-pretty text-center text-base leading-relaxed site-copy sm:mt-8 sm:text-lg sm:leading-[1.7]">
        Uma vantagem exclusiva para clientes da IA Divulgadora. Acesse produtos com
        comissões extras na Shopee, descubra quanto você pode ganhar por venda e
        divulgue tudo em poucos cliques.
      </p>
      <p className="mt-4 mb-10 max-w-3xl text-pretty text-center text-base font-medium leading-relaxed site-copy sm:mt-5 sm:mb-14 sm:text-lg sm:leading-[1.7] md:mb-16">
        Mais comissão em cada venda. Mais oportunidades para aumentar seus ganhos.
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
            src={shopeeSlideImg}
            alt="Shopee Vantagens — produtos com comissões extras exclusivos para clientes da IA Divulgadora"
            width={1600}
            height={819}
            draggable={false}
            className="block h-auto w-full object-contain object-center"
          />
        </ContainerScroll>

        <Results embedded />
        <SectionCta className="pb-16 md:pb-24" />
      </div>
    </section>
  );
}

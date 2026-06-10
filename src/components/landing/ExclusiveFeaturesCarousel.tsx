import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel";

type ExclusiveCarouselContextValue = {
  pauseOnCardClick: () => void;
  resumeOnCardLeave: () => void;
};

const ExclusiveCarouselContext = React.createContext<ExclusiveCarouselContextValue | null>(null);

export function useExclusiveCarouselPause() {
  return React.useContext(ExclusiveCarouselContext);
}

type ExclusiveFeaturesCarouselProps = {
  children: React.ReactNode;
};

/** Embla só ativa loop quando há slides suficientes para preencher a viewport. */
const LOOP_SLIDE_COPIES = 4;

function duplicateForInfiniteLoop(children: React.ReactNode) {
  const items = React.Children.toArray(children);

  return Array.from({ length: LOOP_SLIDE_COPIES }, (_, copyIndex) =>
    items.map((child, index) => {
      if (!React.isValidElement(child)) return child;

      const baseKey = child.key ?? index;
      return React.cloneElement(child, {
        key: `${String(baseKey)}-loop-${copyIndex}`,
      });
    }),
  ).flat();
}

export function ExclusiveFeaturesCarousel({ children }: ExclusiveFeaturesCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const loopedChildren = React.useMemo(() => duplicateForInfiniteLoop(children), [children]);
  const plugins = React.useMemo(
    () => [
      AutoScroll({
        speed: 0.8,
        stopOnMouseEnter: false,
        stopOnInteraction: false,
      }),
    ],
    [],
  );

  const pauseOnCardClick = React.useCallback(() => {
    api?.plugins()?.autoScroll?.stop();
  }, [api]);

  const resumeOnCardLeave = React.useCallback(() => {
    api?.plugins()?.autoScroll?.play();
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const ensurePlaying = () => {
      const loopEnabled = api.internalEngine().options.loop;
      const autoScroll = api.plugins()?.autoScroll;
      if (loopEnabled && autoScroll && !autoScroll.isPlaying()) {
        autoScroll.play();
      }
    };

    ensurePlaying();
    api.on("reInit", ensurePlaying);

    return () => {
      api.off("reInit", ensurePlaying);
    };
  }, [api]);

  const contextValue = React.useMemo(
    () => ({ pauseOnCardClick, resumeOnCardLeave }),
    [pauseOnCardClick, resumeOnCardLeave],
  );

  return (
    <ExclusiveCarouselContext.Provider value={contextValue}>
      <div className="exclusive-carousel-bleed relative mt-12 w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 exclusive-carousel-fade sm:w-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 exclusive-carousel-fade exclusive-carousel-fade--right sm:w-20"
        />

        <Carousel
          opts={{ loop: true, align: "start", dragFree: true, watchSlides: true }}
          plugins={plugins}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-0">{loopedChildren}</CarouselContent>
        </Carousel>

        <div className="exclusive-carousel-controls">
          <button
            type="button"
            className="exclusive-carousel-btn exclusive-carousel-btn--orange"
            onClick={() => api?.scrollPrev()}
            aria-label="Anterior"
          >
            <ArrowLeft className="size-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            className="exclusive-carousel-btn exclusive-carousel-btn--blue"
            onClick={() => api?.scrollNext()}
            aria-label="Próximo"
          >
            <ArrowRight className="size-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </ExclusiveCarouselContext.Provider>
  );
}

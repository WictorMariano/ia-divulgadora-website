import React, { useRef, useState, useEffect } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function ContainerScroll({
  titleComponent,
  children,
  scrollClassName,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  scrollClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 28,
    mass: 0.35,
    restDelta: 0.0008,
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.82, 0.96] : [1.04, 1]);
  const rotate = useTransform(smoothProgress, [0, 1], [16, 0]);
  const scale = useTransform(smoothProgress, [0, 1], scaleDimensions());
  const translate = useTransform(smoothProgress, [0, 1], [0, -50]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative mb-4 h-[52rem] md:mb-5 md:h-[68rem] lg:h-[72rem]",
        scrollClassName,
      )}
    >
      <div className="sticky top-0 flex min-h-svh w-full items-start justify-center overflow-visible p-2 pb-6 pt-[5.5rem] sm:pt-28 md:p-16 md:pb-8 md:pt-32 lg:pt-36">
        <div
          className="relative w-full py-2 md:py-4"
          style={{ perspective: "1000px" }}
        >
          <ScrollHeader translate={translate} titleComponent={titleComponent} />
          <ScrollCard rotate={rotate} scale={scale}>
            {children}
          </ScrollCard>
        </div>
      </div>
    </div>
  );
}

function ScrollHeader({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
}

function ScrollCard({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformStyle: "preserve-3d",
        willChange: "transform",
        boxShadow:
          "0 -1px 0 rgb(56 189 248 / 0.25), 0 0 60px -10px rgb(56 189 248 / 0.35), 0 0 80px -15px rgb(251 146 60 / 0.28), 0 24px 48px -12px rgb(0 0 0 / 0.65), 0 48px 80px -24px rgb(0 0 0 / 0.5)",
      }}
      className="panel-showcase-card relative mx-auto -mt-8 flex h-auto w-full max-w-5xl max-h-[min(32rem,calc(100svh-20rem))] flex-col rounded-[30px] border border-white/20 bg-black/95 p-2 sm:max-h-[min(36rem,calc(100svh-19rem))] md:-mt-10 md:max-h-[min(44rem,calc(100svh-18rem))] md:p-6"
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-zinc-950 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
}

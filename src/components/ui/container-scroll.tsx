import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <div
      ref={containerRef}
      className="relative mb-20 h-[70rem] md:mb-28 md:h-[90rem]"
    >
      <div className="sticky top-0 flex min-h-svh w-full items-start justify-center overflow-visible p-2 pb-8 pt-[5.5rem] sm:pt-28 md:p-20 md:pb-12 md:pt-32 lg:pt-36">
        <div
          className="relative w-full py-2 md:py-8"
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
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mx-auto -mt-8 flex h-auto w-full max-w-5xl max-h-[min(32rem,calc(100svh-20rem))] flex-col rounded-[30px] border border-white/15 bg-black/90 p-2 shadow-[0_0_80px_-20px_rgba(251,146,60,0.15)] sm:max-h-[min(36rem,calc(100svh-19rem))] md:-mt-10 md:max-h-[min(44rem,calc(100svh-18rem))] md:p-6"
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-zinc-950 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
}

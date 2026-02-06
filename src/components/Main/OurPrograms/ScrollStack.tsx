import { ReactNode, useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({
  children,
  itemClassName = "",
}: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lastTransformsRef = useRef<
    Map<number, { translateY: number; scale: number; rotation: number }>
  >(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    [],
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return Number(value);
    },
    [],
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current!;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll],
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight,
    );

    const endElement = useWindowScroll
      ? document.querySelector(".scroll-stack-end")
      : scrollerRef.current?.querySelector(".scroll-stack-end");

    const endElementTop = endElement
      ? getElementOffset(endElement as HTMLElement)
      : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd,
      );
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let opacity = 1;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart =
            jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          opacity = Math.max(0.1, 1 - (topCardIndex - i) * 0.4);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(
          (card.style.opacity ? parseFloat(card.style.opacity) : 1) - opacity,
        ) > 0.01;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        card.style.transform = transform;
        card.style.opacity = opacity.toString(); // замість blur
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const contentEl: HTMLElement | undefined = useWindowScroll
      ? undefined
      : ((scroller.querySelector(
          ".scroll-stack-inner",
        ) as HTMLElement | null) ?? undefined);

    const lenis = new Lenis({
      wrapper: useWindowScroll ? undefined : scroller,
      content: contentEl,
      duration: 1.4, // збільшуємо, щоб скрол був м’якший
      easing: (t) => t, // лінійне або можна легке прискорення
      smoothWheel: true,
      wheelMultiplier: 1, // зменшити різкість прокрутки коліщатком
      touchMultiplier: 1.2, // плавніше для тачпада
      lerp: 0.15, // трохи більше, щоб анімація була м’яка
    });

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller.querySelectorAll(".scroll-stack-card"),
    ) as HTMLDivElement[];

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.perspective = "1000px";
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      lenisRef.current?.destroy();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [itemDistance, setupLenis, updateCardTransforms, useWindowScroll]);

  return (
    <div
      className={`scroll-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;

// import { ReactNode, useLayoutEffect, useRef, useCallback } from "react";
// import "./ScrollStack.css";

// interface ScrollStackItemProps {
//   children: ReactNode;
//   itemClassName?: string;
// }

// export const ScrollStackItem = ({
//   children,
//   itemClassName = "",
// }: ScrollStackItemProps) => (
//   <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
// );

// interface ScrollStackProps {
//   children: ReactNode;
//   className?: string;
//   itemScale?: number;
//   itemStackDistance?: number;
//   baseScale?: number;
//   blurAmount?: number;
//   onStackComplete?: () => void;
// }

// const ScrollStack = ({
//   children,
//   className = "",
//   itemScale = 0.03,
//   itemStackDistance = 30,
//   baseScale = 0.85,
//   blurAmount = 0,
// }: ScrollStackProps) => {
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);
//   const lastTransformsRef = useRef<
//     Map<number, { scale: number; opacity: number }>
//   >(new Map());

//   const updateTransforms = useCallback(() => {
//     if (!cardsRef.current.length) return;

//     const scrollTop = scrollerRef.current?.scrollTop || 0;
//     const containerHeight = scrollerRef.current?.clientHeight || 0;

//     cardsRef.current.forEach((card, i) => {
//       const cardOffset = card.offsetTop;
//       const progress = Math.min(
//         1,
//         Math.max(
//           0,
//           (scrollTop - cardOffset + containerHeight / 2) / containerHeight,
//         ),
//       );

//       const scale = 1 - progress * (1 - (baseScale + i * itemScale));
//       let opacity = 1;
//       if (blurAmount) {
//         opacity = Math.max(0.2, 1 - progress * (i + 1) * 0.3);
//       }

//       const last = lastTransformsRef.current.get(i);
//       if (
//         !last ||
//         Math.abs(last.scale - scale) > 0.001 ||
//         Math.abs(last.opacity - opacity) > 0.01
//       ) {
//         card.style.transform = `scale(${scale})`;
//         card.style.opacity = opacity.toString();
//         lastTransformsRef.current.set(i, { scale, opacity });
//       }
//     });
//   }, [baseScale, itemScale, blurAmount]);

//   useLayoutEffect(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     const cards = Array.from(
//       scroller.querySelectorAll(".scroll-stack-card"),
//     ) as HTMLDivElement[];
//     cardsRef.current = cards;

//     cards.forEach((card) => {
//       card.style.marginBottom = `${itemStackDistance}px`;
//       card.style.willChange = "transform, opacity";
//       card.style.transformOrigin = "top center";
//       card.style.backfaceVisibility = "hidden";
//     });

//     scroller.addEventListener("scroll", updateTransforms);
//     updateTransforms();

//     return () => {
//       scroller.removeEventListener("scroll", updateTransforms);
//       cardsRef.current = [];
//       lastTransformsRef.current.clear();
//     };
//   }, [updateTransforms, itemStackDistance]);

//   return (
//     <div
//       className={`scroll-stack-scroller ${className}`.trim()}
//       ref={scrollerRef}
//     >
//       <div className="scroll-stack-inner">
//         {children}
//         <div className="scroll-stack-end" />
//       </div>
//     </div>
//   );
// };

// export default ScrollStack;

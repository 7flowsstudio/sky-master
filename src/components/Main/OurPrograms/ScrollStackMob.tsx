import React, { ReactNode, useLayoutEffect, useRef, useCallback } from "react";
import "./ScrollStackMob.css";

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}
// export const ScrollStackContext =
//   React.createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export const ScrollStackItemMob = ({
  children,
  itemClassName = "",
}: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemScale?: number;
  itemStackDistance?: number;
  baseScale?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
}

const ScrollStackMob = ({
  children,
  className = "",
  itemScale = 0.03,
  itemStackDistance = 30,
  baseScale = 0.85,
  blurAmount = 0,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lastTransformsRef = useRef<
    Map<number, { scale: number; opacity: number }>
  >(new Map());

  const updateTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;

    const scrollTop = scrollerRef.current?.scrollTop || 0;
    const containerHeight = scrollerRef.current?.clientHeight || 0;

    cardsRef.current.forEach((card, i) => {
      const cardOffset = card.offsetTop;
      const progress = Math.min(
        1,
        Math.max(
          0,
          (scrollTop - cardOffset + containerHeight / 2) / containerHeight,
        ),
      );

      const scale = 1 - progress * (1 - (baseScale + i * itemScale));
      let opacity = 1;
      if (blurAmount) {
        opacity = Math.max(0.2, 1 - progress * (i + 1) * 0.3);
      }

      const last = lastTransformsRef.current.get(i);
      if (
        !last ||
        Math.abs(last.scale - scale) > 0.001 ||
        Math.abs(last.opacity - opacity) > 0.01
      ) {
        card.style.transform = `scale(${scale})`;
        card.style.opacity = opacity.toString();
        lastTransformsRef.current.set(i, { scale, opacity });
      }
    });
  }, [baseScale, itemScale, blurAmount]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll(".scroll-stack-card"),
    ) as HTMLDivElement[];
    cardsRef.current = cards;

    cards.forEach((card) => {
      card.style.marginBottom = `${itemStackDistance}px`;
      card.style.willChange = "transform, opacity";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    scroller.addEventListener("scroll", updateTransforms);
    updateTransforms();

    return () => {
      scroller.removeEventListener("scroll", updateTransforms);
      cardsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [updateTransforms, itemStackDistance]);

  return (
    <div className="wrapp">
      <div
        className={`scroll-stack-scroller ${className}`.trim()}
        ref={scrollerRef}
      >
        <div className="scroll-stack-inner">
          {children}
          <div className="scroll-stack-end" />
        </div>
      </div>
    </div>
  );
};

export default ScrollStackMob;

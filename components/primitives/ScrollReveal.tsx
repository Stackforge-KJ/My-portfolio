"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * VDS Section 10 / EIP Section 7: "Scroll reveals trigger once, the
 * first time an element enters view, and never replay." This is the one
 * piece of the existing Motion Language no prior sprint had implemented
 * yet — hover/state transitions (Button, Navigation, Card) were already
 * done in their own sprints.
 *
 * Uses the same `duration-transitional`/`ease-enter` tokens as everything
 * else, not new ones. Reduced motion needs no separate handling here:
 * app/globals.css's existing prefers-reduced-motion rule (Sprint 1)
 * already collapses every transition-duration site-wide to near-zero, so
 * this component inherits that for free.
 */
export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          // "Trigger once... never replay" — disconnect immediately
          // rather than leaving the observer running.
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition duration-transitional ease-enter",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

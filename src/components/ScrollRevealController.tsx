"use client";

import { useEffect } from "react";

export function ScrollRevealController() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!elements.length) {
      return;
    }

    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (shouldReduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.inview = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.dataset.inview = "true";
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}

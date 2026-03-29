"use client";

import { useEffect } from "react";

export default function BBScrollAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // .bb-reveal elements: fade up on scroll
        const revealEls = document.querySelectorAll(".bb-reveal");
        revealEls.forEach((el) => {
          gsap.set(el, { opacity: 0, y: 36 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power2.out",
              });
            },
            once: true,
          });
        });

        // .bb-stagger-item: staggered reveal within a parent
        const staggerGroups = document.querySelectorAll(".bb-stagger-group");
        staggerGroups.forEach((group) => {
          const items = group.querySelectorAll(".bb-stagger-item");
          gsap.set(items, { opacity: 0, y: 32 });
          ScrollTrigger.create({
            trigger: group,
            start: "top 85%",
            onEnter: () => {
              gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.1,
                ease: "power2.out",
              });
            },
            once: true,
          });
        });

        // .bb-slide-left: slide in from left (How We Bake)
        const slideEls = document.querySelectorAll(".bb-slide-left");
        slideEls.forEach((el) => {
          gsap.set(el, { opacity: 0, x: -48 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 86%",
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 0.95,
                ease: "power2.out",
              });
            },
            once: true,
          });
        });
      });
    };

    init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return null;
}

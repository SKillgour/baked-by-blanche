"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BBHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ctx: { revert: () => void } | null = null;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        if (prefersReduced) {
          // No animation for reduced-motion users
          return;
        }

        const heading = headingRef.current;
        const sub = subRef.current;
        const cta = ctaRef.current;

        if (!heading) return;

        // Split the heading text into word spans
        const rawText = heading.innerHTML;
        const lines = rawText.split("<br>");
        const wordSpans: Element[] = [];

        heading.innerHTML = lines
          .map((line) => {
            return line
              .trim()
              .split(" ")
              .filter(Boolean)
              .map((word) => {
                const isItalic = word.startsWith("<em>") || line.includes("<em>");
                return `<span class="bb-hero-word">${word.replace(/<\/?em>/g, "")}</span>`;
              })
              .join(" ");
          })
          .join("<br>");

        const spans = heading.querySelectorAll(".bb-hero-word");

        // Set initial states
        gsap.set(spans, { opacity: 0, y: 28, skewY: 1.5 });
        if (sub) gsap.set(sub, { opacity: 0, y: 16 });
        if (cta) gsap.set(cta, { opacity: 0, y: 14 });

        // Animate words in
        gsap.to(spans, {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.05,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.3,
        });

        if (sub) {
          gsap.to(sub, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.3 + spans.length * 0.12 + 0.15,
          });
        }

        if (cta) {
          gsap.to(cta, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            delay: 0.3 + spans.length * 0.12 + 0.42,
          });
        }
      });
    };

    initGSAP();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section className="bb-hero">
      <Image
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1800&q=80"
        alt="Rustic sourdough loaf fresh from the oven"
        fill
        priority
        className="bb-hero-img"
        sizes="100vw"
      />
      <div className="bb-hero-overlay" />

      <div className="bb-hero-content container">
        <span className="bb-label bb-hero-label">Hawera, South Taranaki</span>
        <h1 ref={headingRef} className="bb-heading-xl bb-hero-heading">
          Real Bread.<br />Made by Hand.
        </h1>
        <p ref={subRef} className="bb-hero-sub">
          A micro-bakery in Hawera, South Taranaki.<br className="bb-br-md" />
          Baked the way it used to be.
        </p>
        <div ref={ctaRef} className="bb-hero-ctas">
          <Link href="/bread" className="bb-btn-primary">
            See What We Bake
          </Link>
          <Link href="/order" className="bb-btn-ghost">
            How to Order
          </Link>
        </div>
      </div>

      <style>{`
        .bb-hero-label {
          display: block;
          margin-bottom: 1rem;
          color: rgba(196, 133, 58, 0.9);
        }
        .bb-hero-heading {
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }
        .bb-hero-heading .bb-hero-word {
          display: inline-block;
        }
        .bb-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 300;
          color: rgba(245, 236, 216, 0.75);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 2.5rem;
        }
        .bb-hero-ctas {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .bb-br-md {
          display: none;
        }
        @media (min-width: 600px) {
          .bb-br-md {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}

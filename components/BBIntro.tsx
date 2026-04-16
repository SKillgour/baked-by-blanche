"use client";

import { useState, useEffect } from "react";

const BRAND = "Baked By Blanche";

export default function BBIntro() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleChars(count);

      if (count >= BRAND.length) {
        clearInterval(interval);
        setTimeout(() => setExiting(true), 420);
        setTimeout(() => setDone(true), 420 + 580);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className={`bb-intro${exiting ? " bb-intro-exit" : ""}`}>
      <div className="bb-intro-inner">
        <span className="bb-intro-location">Hawera, South Taranaki</span>
        <p className="bb-intro-name" aria-label={BRAND}>
          {BRAND.split("").map((char, i) => (
            <span
              key={i}
              className={`bb-intro-char${i < visibleChars ? " bb-intro-char-on" : ""}`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
        <span className="bb-intro-sub">Real bread. Made by hand.</span>
      </div>

      <style>{`
        .bb-intro {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background-color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(0);
        }
        .bb-intro-exit {
          transform: translateY(-100%);
          transition: transform 580ms cubic-bezier(0.76, 0, 0.24, 1);
        }
        .bb-intro-inner {
          text-align: center;
          padding: 2rem;
        }
        .bb-intro-location {
          display: block;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 1.25rem;
          opacity: 0;
          animation: bb-intro-fade 0.5s ease forwards 0.1s;
        }
        .bb-intro-name {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 6vw, 4.5rem);
          font-weight: 300;
          font-style: italic;
          color: var(--color-text-on-dark);
          letter-spacing: 0.01em;
          line-height: 1;
          margin: 0 0 1.5rem;
        }
        .bb-intro-char {
          display: inline-block;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .bb-intro-char-on {
          opacity: 1;
          transform: translateY(0);
        }
        .bb-intro-sub {
          display: block;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 300;
          letter-spacing: 0.12em;
          color: rgba(245, 236, 216, 0.4);
          opacity: 0;
          animation: bb-intro-fade 0.6s ease forwards 0.6s;
        }
        @keyframes bb-intro-fade {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

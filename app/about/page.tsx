import Image from "next/image";
import Link from "next/link";
import BBScrollAnimations from "@/components/BBScrollAnimations";

const values = [
  {
    title: "NZ Wheat, First",
    body: "Andrew uses New Zealand grown and milled wheat wherever he can. The grain is the starting point. Get that right and everything else follows.",
  },
  {
    title: "Made Entirely By Hand",
    body: "No machines, no shortcuts. Every loaf is mixed, shaped, and scored by hand, the way Andrew was trained to do it from the start.",
  },
  {
    title: "Slow Fermentation",
    body: "Real sourdough cannot be rushed. Every loaf ferments properly, for as long as it needs. That's where the flavour, the texture, and the nutrition come from.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Full-bleed hero */}
      <section className="bb-about-hero">
        <Image
          src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1600&q=80"
          alt="Hands kneading bread dough on a floured bench"
          fill
          priority
          className="bb-about-hero-img"
          sizes="100vw"
        />
        <div className="bb-about-hero-overlay" />
        <div className="container bb-about-hero-content bb-reveal">
          <span className="bb-label">Hawera, South Taranaki</span>
          <div className="bb-divider" />
          <h1 className="bb-heading-xl bb-about-hero-heading">
            <em>How it Started</em>
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="bb-section bb-about-story-section">
        <div className="container bb-about-story-grid">
          <div className="bb-about-story-text bb-reveal">
            <span className="bb-label">The baker</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg bb-about-story-heading">
              Andrew Blanche trained as a baker straight out of school.
            </h2>
            <p className="bb-body-lg bb-about-para">
              Life took him in other directions after that. Fifteen years working in Wellington's hospitality industry, then another fifteen as a funeral director in Auckland and Hawera. Thirty years in other people's worlds. But the craft stayed with him.
            </p>
            <p className="bb-body-lg bb-about-para">
              The return to baking came from his wife Jo. She handed him a sourdough starter and a stack of baking books, and Baked By Blanche grew from there. Jo is the creative force behind what they do. Their son Silas keeps them honest.
            </p>
            <p className="bb-body-lg bb-about-para">
              The philosophy is direct: New Zealand grown and milled wheat, everything made by hand, and fermentation that's given the time it actually needs. No improvers, no shortcuts. Andrew calls it restoring the faith in wheat.
            </p>
          </div>

          <div className="bb-about-market-card bb-reveal">
            <span className="bb-label bb-label-accent">Find us</span>
            <div className="bb-divider" />
            <h3 className="bb-about-market-heading">Taranaki Farmers' Market</h3>
            <p className="bb-about-market-detail">
              Huatoki Plaza, New Plymouth
            </p>
            <p className="bb-about-market-day">Sundays, 9am to 12pm</p>
            <a
              href="mailto:bakedbyblancheltd@gmail.com"
              className="bb-about-email"
            >
              bakedbyblancheltd@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bb-section bb-values-section bb-dark-section">
        <div className="container">
          <div className="bb-values-header bb-reveal">
            <span className="bb-label">What we stand by</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg bb-heading-on-dark">The Principles</h2>
          </div>

          <div className="bb-values-grid bb-stagger-group">
            {values.map((value, i) => (
              <div key={i} className="bb-value-card bb-stagger-item">
                <span className="bb-value-number">0{i + 1}</span>
                <h3 className="bb-value-title">{value.title}</h3>
                <p className="bb-value-body">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width photo */}
      <div className="bb-about-fullbleed">
        <Image
          src="https://images.unsplash.com/photo-1732565729552-994c6af761e3?w=1600&q=80"
          alt="Artisan sourdough loaves cooling on bakery racks"
          fill
          className="bb-about-fullbleed-img"
          sizes="100vw"
        />
      </div>

      {/* CTA */}
      <section className="bb-section bb-about-cta-section">
        <div className="container bb-about-cta-inner bb-reveal">
          <div className="bb-about-cta-text">
            <span className="bb-label">Stay connected</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg">Follow the Weekly Bake</h2>
            <p className="bb-body-lg bb-about-cta-body">
              Andrew posts the weekly bake list on Facebook, usually Monday or Tuesday. That's the best place to see what's available before you order.
            </p>
          </div>
          <div className="bb-about-cta-buttons">
            <a
              href="https://www.facebook.com/bakedbyblanche"
              target="_blank"
              rel="noopener noreferrer"
              className="bb-btn-primary"
            >
              Follow on Facebook
            </a>
            <Link href="/order" className="bb-btn-ghost-dark">
              How to Order
            </Link>
          </div>
        </div>
      </section>

      <BBScrollAnimations />

      <style>{`
        /* Hero */
        .bb-about-hero {
          position: relative;
          width: 100%;
          height: 85vh;
          min-height: 560px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          background-color: var(--color-primary);
        }
        .bb-about-hero-img {
          object-fit: cover;
          object-position: center 30%;
        }
        .bb-about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 12, 4, 0.88) 0%,
            rgba(20, 12, 4, 0.45) 50%,
            rgba(20, 12, 4, 0.15) 100%
          );
        }
        .bb-about-hero-content {
          position: relative;
          z-index: 1;
          padding-bottom: 5rem;
        }
        .bb-about-hero-content .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-about-hero-content .bb-divider {
          margin: 1rem 0 1.5rem;
        }
        .bb-about-hero-heading {
          color: var(--color-text-on-dark);
        }

        /* Story */
        .bb-about-story-section {
          background-color: var(--color-bg);
        }
        .bb-about-story-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 5rem;
          align-items: start;
        }
        .bb-about-story-text .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-about-story-text .bb-divider {
          margin: 1rem 0 1.5rem;
        }
        .bb-about-story-heading {
          margin-bottom: 1.75rem;
        }
        .bb-about-para {
          margin-bottom: 1.25rem;
        }
        .bb-about-para:last-child {
          margin-bottom: 0;
        }

        /* Market card */
        .bb-about-market-card {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          border-top: 3px solid var(--color-accent);
          position: sticky;
          top: 100px;
        }
        .bb-label-accent {
          color: var(--color-accent);
        }
        .bb-about-market-card .bb-divider {
          margin: 1rem 0 1.5rem;
        }
        .bb-about-market-heading {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--color-text);
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .bb-about-market-detail {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 0.25rem;
        }
        .bb-about-market-day {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 1.5rem;
        }
        .bb-about-email {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--color-accent);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
          transition: color var(--transition);
          word-break: break-all;
        }
        .bb-about-email:hover {
          color: var(--color-accent-hover);
        }

        /* Values */
        .bb-values-section {
          background-color: var(--color-dark-surface);
        }
        .bb-values-header {
          margin-bottom: 3rem;
        }
        .bb-values-header .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-values-header .bb-divider {
          margin: 1rem 0 1.25rem;
        }
        .bb-heading-on-dark {
          color: var(--color-text-on-dark);
        }
        .bb-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .bb-value-card {
          border-top: 2px solid rgba(196, 133, 58, 0.3);
          padding-top: 2rem;
        }
        .bb-value-number {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 300;
          font-style: italic;
          color: var(--color-accent);
          display: block;
          line-height: 1;
          margin-bottom: 1rem;
        }
        .bb-value-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 400;
          color: var(--color-text-on-dark);
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .bb-value-body {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(245, 236, 216, 0.6);
          line-height: 1.75;
        }

        /* Full bleed photo */
        .bb-about-fullbleed {
          width: 100%;
          height: 440px;
          overflow: hidden;
          position: relative;
        }
        .bb-about-fullbleed-img {
          object-fit: cover;
          object-position: center;
        }

        /* CTA section */
        .bb-about-cta-section {
          background-color: var(--color-surface);
        }
        .bb-about-cta-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 4rem;
          align-items: center;
        }
        .bb-about-cta-text .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-about-cta-text .bb-divider {
          margin: 1rem 0 1.25rem;
        }
        .bb-about-cta-body {
          margin-top: 0.75rem;
          max-width: 480px;
        }
        .bb-about-cta-buttons {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 1rem;
          flex-shrink: 0;
          min-width: 200px;
        }
        .bb-btn-ghost-dark {
          display: inline-block;
          background-color: transparent;
          color: var(--color-text);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.85rem 2rem;
          border-radius: var(--radius);
          border: 1.5px solid rgba(46, 31, 14, 0.3);
          cursor: pointer;
          transition: border-color var(--transition), color var(--transition);
          text-decoration: none;
          text-align: center;
        }
        .bb-btn-ghost-dark:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        /* Responsive */
        @media (max-width: 960px) {
          .bb-about-story-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .bb-about-market-card {
            position: static;
          }
          .bb-values-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .bb-value-card {
            border-top: none;
            border-left: 2px solid rgba(196, 133, 58, 0.35);
            padding-top: 0;
            padding-left: 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .bb-about-cta-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .bb-about-cta-buttons {
            min-width: unset;
          }
        }
      `}</style>
    </>
  );
}

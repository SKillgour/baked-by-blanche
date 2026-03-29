import Image from "next/image";
import Link from "next/link";
import BBScrollAnimations from "@/components/BBScrollAnimations";

const values = [
  {
    title: "Real Ingredients",
    body: "Flour, water, salt, starter. Nothing else needs to be in there. Bread doesn't need a list of things you can't pronounce.",
  },
  {
    title: "Long Fermentation",
    body: "Every loaf ferments for at least 16 hours. That's where the flavour comes from: slow, real, unhurried. Worth the wait.",
  },
  {
    title: "Small Batches",
    body: "We don't bake hundreds. We bake a careful number and make each one count. Quality over quantity, every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Full-bleed hero */}
      <section className="bb-about-hero">
        <Image
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600&q=80"
          alt="Hands shaping bread dough on a floured bench"
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
            <em>Blanche's Story</em>
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="bb-section bb-about-story-section">
        <div className="container bb-about-story-inner">
          <div className="bb-about-story-text bb-reveal">
            <span className="bb-label">The bakery</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg bb-about-story-heading">
              Bread the way it used to taste.
            </h2>
            <p className="bb-body-lg bb-about-para">
              Baked By Blanche began with a simple conviction: that bread should actually taste like something. Not the cotton-soft, shelf-stable kind. Real bread. Bread with crust and crumb and character, made the way it was before additives and industrial shortcuts took over. Blanche bakes in small batches from Hawera using a live sourdough culture, quality flour, water, and salt. That's it.
            </p>
            <p className="bb-body-lg bb-about-para">
              What makes the difference is time. Every loaf ferments slowly, developing flavour that you simply cannot rush or fake. No improvers, no shortcuts, no compromise. Each bake is a small, careful production, and that's exactly how Blanche intends to keep it. When you pick up a loaf, you're getting something made with genuine attention.
            </p>
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
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80"
          alt="Fresh artisan rolls cooling on a rack"
          width={900}
          height={500}
          className="bb-about-fullbleed-img"
        />
      </div>

      {/* CTA */}
      <section className="bb-section bb-about-cta-section">
        <div className="container bb-about-cta-inner bb-reveal">
          <div className="bb-about-cta-text">
            <span className="bb-label">Stay connected</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg">Follow the Journey</h2>
            <p className="bb-body-lg bb-about-cta-body">
              Blanche shares the weekly bake list, behind-the-scenes moments, and seasonal specials on Facebook. It's the best way to stay in the loop.
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
              Order Now
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
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
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
        .bb-about-story-inner {
          max-width: 760px;
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
          width: 100%;
          height: 100%;
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
        @media (max-width: 900px) {
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

import Image from "next/image";
import Link from "next/link";
import BBHero from "@/components/BBHero";
import BBScrollAnimations from "@/components/BBScrollAnimations";

export default function HomePage() {
  return (
    <>
      <BBHero />

      {/* What We Bake */}
      <section className="bb-section bb-what-we-bake">
        <div className="container">
          <div className="bb-section-header bb-reveal">
            <span className="bb-label">From our oven</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg">What We Bake</h2>
            <p className="bb-body-lg bb-section-sub">
              Every loaf is made by hand, from scratch, using traditional techniques and real fermentation.
            </p>
          </div>

          <div className="bb-bread-grid bb-stagger-group">
            {/* Card 1 */}
            <div className="bb-bread-card bb-stagger-item">
              <div className="bb-bread-card-img-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=80"
                  alt="Sourdough loaf with open crumb"
                  width={700}
                  height={480}
                  className="bb-bread-card-img"
                />
              </div>
              <div className="bb-bread-card-body">
                <h3 className="bb-heading-md">Sourdough Loaves</h3>
                <p className="bb-card-text">
                  Long cold ferment, dark caramelised crust, open crumb. The real thing.
                </p>
                <Link href="/bread" className="bb-card-link">
                  See all breads
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bb-bread-card bb-stagger-item">
              <div className="bb-bread-card-img-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=700&q=80"
                  alt="Artisan rolls fresh from the oven"
                  width={700}
                  height={480}
                  className="bb-bread-card-img"
                />
              </div>
              <div className="bb-bread-card-body">
                <h3 className="bb-heading-md">Artisan Rolls</h3>
                <p className="bb-card-text">
                  Soft crust, proper crumb. Perfect alongside a meal or as a burger bun.
                </p>
                <Link href="/bread" className="bb-card-link">
                  See all breads
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bb-bread-card bb-stagger-item">
              <div className="bb-bread-card-img-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80"
                  alt="Cinnamon scrolls and sweet bakes"
                  width={700}
                  height={480}
                  className="bb-bread-card-img"
                />
              </div>
              <div className="bb-bread-card-body">
                <h3 className="bb-heading-md">Sweet Bakes</h3>
                <p className="bb-card-text">
                  Cinnamon scrolls and seasonal treats. Buttery, rich, not the supermarket kind.
                </p>
                <Link href="/bread" className="bb-card-link">
                  See all breads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="bb-section bb-story-section">
        <div className="container bb-story-grid">
          <div className="bb-story-img-col bb-slide-left">
            <div className="bb-story-img-wrap">
              <Image
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80"
                alt="Hands shaping bread dough on a floured surface"
                width={800}
                height={900}
                className="bb-story-img"
              />
            </div>
          </div>
          <div className="bb-story-text-col bb-reveal">
            <span className="bb-label">The story</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg bb-story-heading">
              Made by hand.<br />
              <em>The way it used to be.</em>
            </h2>
            <p className="bb-body-lg bb-story-para">
              Baked By Blanche started from a simple belief -- that bread should taste like something. Real sourdough takes time, care, and a starter that's been fed and tended for years. Blanche bakes in small batches from Hawera, South Taranaki, using nothing but flour, water, salt, and a live culture.
            </p>
            <p className="bb-body-lg bb-story-para">
              No shortcuts. No additives. Just long, slow fermentation the way bread used to be made. Every loaf is shaped by hand and baked to order, which means what you get is genuinely fresh and genuinely different from anything on a supermarket shelf.
            </p>
            <Link href="/about" className="bb-btn-primary">
              About Blanche
            </Link>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="bb-section bb-dark-section bb-how-to-order">
        <div className="container">
          <div className="bb-section-header bb-reveal">
            <span className="bb-label bb-label-on-dark">Pre-orders only</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg bb-heading-on-dark">How to Order</h2>
            <p className="bb-body-lg bb-body-on-dark">
              We bake to order -- everything is made fresh for you.
            </p>
          </div>

          <div className="bb-steps-grid bb-stagger-group">
            <div className="bb-step bb-stagger-item">
              <span className="bb-step-number">01</span>
              <h3 className="bb-step-title">Check what's available</h3>
              <p className="bb-step-text">
                Follow Baked By Blanche on Facebook for the weekly bake list. Posted most Mondays or Tuesdays.
              </p>
            </div>
            <div className="bb-step bb-stagger-item">
              <span className="bb-step-number">02</span>
              <h3 className="bb-step-title">Send your order</h3>
              <p className="bb-step-text">
                Message on Facebook or call 021 784 286. Let us know what you'd like and when suits you for pick-up.
              </p>
            </div>
            <div className="bb-step bb-stagger-item">
              <span className="bb-step-number">03</span>
              <h3 className="bb-step-title">Pick up in Hawera</h3>
              <p className="bb-step-text">
                We'll confirm your order and collection time. Fresh from the oven, ready for you.
              </p>
            </div>
          </div>

          <div className="bb-order-cta bb-reveal">
            <Link href="/order" className="bb-btn-primary">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <BBScrollAnimations />

      <style>{`
        /* Section header */
        .bb-section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .bb-section-header .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-section-header .bb-divider {
          margin: 1rem auto 1.25rem;
        }
        .bb-section-sub {
          max-width: 520px;
          margin: 1rem auto 0;
          text-align: center;
        }

        /* What We Bake */
        .bb-what-we-bake {
          background-color: var(--color-bg);
        }
        .bb-bread-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .bb-bread-card-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .bb-bread-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .bb-bread-card:hover .bb-bread-card-img {
          transform: scale(1.04);
        }
        .bb-bread-card-body {
          padding: 1.5rem;
        }
        .bb-bread-card-body .bb-heading-md {
          margin-bottom: 0.6rem;
        }
        .bb-card-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 1.1rem;
        }
        .bb-card-link {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-accent);
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
          transition: color var(--transition);
        }
        .bb-card-link:hover {
          color: var(--color-accent-hover);
        }

        /* Story section */
        .bb-story-section {
          background-color: var(--color-surface);
        }
        .bb-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .bb-story-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }
        .bb-story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .bb-story-text-col .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-story-heading {
          margin-bottom: 1.75rem;
        }
        .bb-story-para {
          margin-bottom: 1.25rem;
        }
        .bb-story-para:last-of-type {
          margin-bottom: 2rem;
        }

        /* How to Order (dark) */
        .bb-how-to-order .bb-section-header .bb-label,
        .bb-label-on-dark {
          color: var(--color-accent);
        }
        .bb-heading-on-dark {
          color: var(--color-text-on-dark);
        }
        .bb-body-on-dark {
          color: rgba(245, 236, 216, 0.65);
          text-align: center;
          max-width: 480px;
          margin: 0 auto;
        }
        .bb-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-top: 3.5rem;
          margin-bottom: 3.5rem;
        }
        .bb-step {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .bb-step-number {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 300;
          font-style: italic;
          color: var(--color-accent);
          line-height: 1;
        }
        .bb-step-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 400;
          color: var(--color-text-on-dark);
          line-height: 1.2;
        }
        .bb-step-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(245, 236, 216, 0.6);
          line-height: 1.75;
        }
        .bb-order-cta {
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .bb-bread-grid {
            grid-template-columns: 1fr 1fr;
          }
          .bb-steps-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 768px) {
          .bb-story-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .bb-story-img-wrap {
            aspect-ratio: 3 / 2;
          }
        }
        @media (max-width: 580px) {
          .bb-bread-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

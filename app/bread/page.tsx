import Image from "next/image";
import Link from "next/link";
import BBScrollAnimations from "@/components/BBScrollAnimations";

const breads = [
  {
    name: "Sourdough White Loaf",
    description: "Classic open crumb, dark caramelised crust. Long cold ferment.",
    price: "$12",
    image: "https://images.unsplash.com/photo-1603199939576-8bee43b4232a?w=600&q=80",
    alt: "Homemade sourdough white loaf with caramelised crust",
  },
  {
    name: "Sourdough Wholegrain",
    description: "60% wholegrain, nutty and substantial. Excellent toasted.",
    price: "$13",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    alt: "Sourdough wholegrain loaf with dark crust",
  },
  {
    name: "Seeded Loaf",
    description: "Pumpkin, sunflower, linseed. Hearty and flavourful.",
    price: "$13",
    image: "https://images.unsplash.com/photo-1772273004112-79be1c208784?w=600&q=80",
    alt: "Rustic artisan loaf with seeds on top",
  },
  {
    name: "Rye Loaf",
    description: "Dense, moist, tangy. A proper Nordic-style rye.",
    price: "$14",
    image: "https://images.unsplash.com/photo-1593285702005-ccc93dfe7cfb?w=600&q=80",
    alt: "Dark brown rye bread loaf",
  },
  {
    name: "Sourdough Rolls",
    description: "Soft crust, perfect for burgers or sides. 6 pack.",
    price: "$10",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    alt: "Sourdough bread rolls on baking paper",
  },
  {
    name: "Cinnamon Scrolls",
    description: "Buttery, sweet, proper scrolls. Not the supermarket kind. 4 pack.",
    price: "$12",
    image: "https://images.unsplash.com/photo-1457494798428-b6b70915727?w=600&q=80",
    alt: "Freshly baked cinnamon scrolls on a baking tray",
  },
];

export default function BreadPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bb-bread-hero bb-dark-section">
        <div className="container bb-bread-hero-inner bb-reveal">
          <span className="bb-label">Small batch. Real fermentation.</span>
          <div className="bb-divider" />
          <h1 className="bb-heading-xl bb-bread-hero-heading">Our Bread</h1>
          <p className="bb-bread-hero-sub">
            Small batches. Real fermentation. No shortcuts.
          </p>
        </div>
      </section>

      {/* Catalogue */}
      <section className="bb-section bb-catalogue-section">
        <div className="container">
          <div className="bb-catalogue-grid bb-stagger-group">
            {breads.map((bread) => (
              <div key={bread.name} className="bb-catalogue-card bb-stagger-item">
                <div className="bb-catalogue-img-wrap">
                  <Image
                    src={bread.image}
                    alt={bread.alt}
                    fill
                    className="bb-catalogue-img"
                    sizes="(max-width: 680px) 100vw, 50vw"
                  />
                </div>
                <div className="bb-catalogue-card-body">
                  <div className="bb-catalogue-card-top">
                    <h2 className="bb-catalogue-card-name">{bread.name}</h2>
                    <span className="bb-catalogue-price">{bread.price}</span>
                  </div>
                  <p className="bb-catalogue-desc">{bread.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Availability note */}
          <div className="bb-availability-note bb-reveal">
            <p className="bb-availability-text">
              Availability varies each week. Check Facebook or contact us to confirm what's on the bake list before ordering.
            </p>
            <Link href="/order" className="bb-btn-primary">
              How to Order
            </Link>
          </div>
        </div>
      </section>

      <BBScrollAnimations />

      <style>{`
        /* Hero */
        .bb-bread-hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
        }
        .bb-bread-hero-inner {
          max-width: 640px;
        }
        .bb-bread-hero-inner .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-bread-hero-inner .bb-divider {
          margin: 1rem 0 1.5rem;
        }
        .bb-bread-hero-heading {
          margin-bottom: 1.25rem;
        }
        .bb-bread-hero-sub {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 300;
          color: rgba(245, 236, 216, 0.65);
          line-height: 1.7;
          max-width: 460px;
        }

        /* Catalogue grid */
        .bb-catalogue-section {
          background-color: var(--color-bg);
        }
        .bb-catalogue-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        .bb-catalogue-card {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform var(--transition), box-shadow var(--transition);
          border-top: 3px solid transparent;
        }
        .bb-catalogue-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(46, 31, 14, 0.12);
          border-top-color: var(--color-accent);
        }
        .bb-catalogue-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .bb-catalogue-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .bb-catalogue-card:hover .bb-catalogue-img {
          transform: scale(1.04);
        }
        .bb-catalogue-card-body {
          padding: 1.5rem 1.75rem 1.75rem;
        }
        .bb-catalogue-card-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.6rem;
        }
        .bb-catalogue-card-name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--color-text);
          line-height: 1.2;
        }
        .bb-catalogue-price {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 300;
          font-style: italic;
          color: var(--color-accent);
          white-space: nowrap;
        }
        .bb-catalogue-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        /* Availability note */
        .bb-availability-note {
          background-color: var(--color-surface);
          border-left: 3px solid var(--color-accent);
          border-radius: var(--radius);
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .bb-availability-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--color-text-muted);
          line-height: 1.7;
          max-width: 520px;
        }

        /* Responsive */
        @media (max-width: 680px) {
          .bb-catalogue-grid {
            grid-template-columns: 1fr;
          }
          .bb-availability-note {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}

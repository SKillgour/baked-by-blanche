import Link from "next/link";

export default function BBFooter() {
  return (
    <footer className="bb-footer">
      <div className="container bb-footer-inner">
        <div className="bb-footer-brand">
          <p className="bb-footer-logo">
            <em>Baked By Blanche</em>
          </p>
          <p className="bb-footer-tagline">
            Real bread. Made by hand.<br />
            Hawera, South Taranaki.
          </p>
        </div>

        <div className="bb-footer-links">
          <p className="bb-footer-section-label">Pages</p>
          <Link href="/" className="bb-footer-link">Home</Link>
          <Link href="/bread" className="bb-footer-link">Our Bread</Link>
          <Link href="/order" className="bb-footer-link">Order</Link>
          <Link href="/about" className="bb-footer-link">About</Link>
        </div>

        <div className="bb-footer-contact">
          <p className="bb-footer-section-label">Get in Touch</p>
          <a href="tel:021784286" className="bb-footer-link">021 784 286</a>
          <a href="mailto:bakedbyblancheltd@gmail.com" className="bb-footer-link">
            bakedbyblancheltd@gmail.com
          </a>
          <a
            href="https://www.facebook.com/bakedbyblanche"
            target="_blank"
            rel="noopener noreferrer"
            className="bb-footer-link bb-footer-fb"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="bb-footer-bottom">
        <div className="container bb-footer-bottom-inner">
          <p className="bb-footer-copy">
            &copy; {new Date().getFullYear()} Baked By Blanche. Hawera, South Taranaki, New Zealand.
          </p>
          <p className="footer-credit">Website by <a href="https://insightly.nz" target="_blank" rel="noopener noreferrer">Insightly</a></p>
        </div>
      </div>

      <style>{`
        .bb-footer {
          background-color: var(--color-dark-surface);
          color: var(--color-text-on-dark);
          padding-top: 4rem;
        }
        .bb-footer-inner {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr;
          gap: 3rem;
          padding-bottom: 3.5rem;
        }
        .bb-footer-logo {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 300;
          font-style: italic;
          margin-bottom: 0.75rem;
          color: var(--color-text-on-dark);
        }
        .bb-footer-tagline {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(245, 236, 216, 0.55);
          line-height: 1.7;
        }
        .bb-footer-section-label {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 1rem;
        }
        .bb-footer-links,
        .bb-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .bb-footer-link {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(245, 236, 216, 0.7);
          text-decoration: none;
          transition: color var(--transition);
        }
        .bb-footer-link:hover {
          color: var(--color-text-on-dark);
        }
        .bb-footer-bottom {
          border-top: 1px solid rgba(245, 236, 216, 0.1);
          padding: 1.25rem 0;
        }
        .bb-footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        .bb-footer-copy {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(245, 236, 216, 0.35);
        }
        @media (max-width: 768px) {
          .bb-footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .bb-footer-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .bb-footer-inner {
            grid-template-columns: 1fr;
          }
        }
        .footer-credit { font-family: var(--font-body); font-size: 0.8rem; font-weight: 300; color: rgba(245, 236, 216, 0.35); flex-shrink: 0; }
        .footer-credit a { color: inherit; text-decoration: none; }
        .footer-credit a:hover { color: rgba(245, 236, 216, 0.7); }
      `}</style>
    </footer>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BBHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const navTextClass =
    scrolled || !isHome
      ? "nav-text-dark"
      : "nav-text-light";

  return (
    <header
      ref={headerRef}
      className={`bb-header ${scrolled || !isHome ? "bb-header-solid" : "bb-header-transparent"}`}
    >
      <div className="bb-header-inner container">
        <Link href="/" className={`bb-logo ${navTextClass}`}>
          <em>Baked By Blanche</em>
        </Link>

        {/* Desktop nav */}
        <nav className="bb-desktop-nav">
          <Link
            href="/bread"
            className={`bb-nav-link ${navTextClass}`}
          >
            Our Bread
          </Link>
          <Link
            href="/order"
            className={`bb-nav-link ${navTextClass}`}
          >
            Order
          </Link>
          <Link
            href="/about"
            className={`bb-nav-link ${navTextClass}`}
          >
            About
          </Link>
          <Link href="/order" className="bb-btn-primary bb-header-cta">
            Pre-Order
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`bb-hamburger ${navTextClass}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bb-hamburger-bar ${menuOpen ? "open-1" : ""}`} />
          <span className={`bb-hamburger-bar ${menuOpen ? "open-2" : ""}`} />
          <span className={`bb-hamburger-bar ${menuOpen ? "open-3" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`bb-mobile-menu ${menuOpen ? "bb-mobile-menu-open" : ""}`}>
        <nav className="bb-mobile-nav">
          <Link href="/bread" className="bb-mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Our Bread
          </Link>
          <Link href="/order" className="bb-mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Order
          </Link>
          <Link href="/about" className="bb-mobile-nav-link" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/order" className="bb-btn-primary bb-mobile-cta" onClick={() => setMenuOpen(false)}>
            Pre-Order Now
          </Link>
        </nav>
      </div>

      <style>{`
        .bb-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background-color 0.4s ease, box-shadow 0.4s ease;
        }
        .bb-header-transparent {
          background-color: transparent;
          box-shadow: none;
        }
        .bb-header-solid {
          background-color: var(--color-bg);
          box-shadow: 0 1px 0 rgba(46, 31, 14, 0.08);
        }
        .bb-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        .bb-logo {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 300;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .bb-logo em {
          font-style: italic;
        }
        .nav-text-light {
          color: var(--color-text-on-dark);
        }
        .nav-text-dark {
          color: var(--color-text);
        }
        .bb-desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .bb-header-cta {
          font-size: 0.78rem;
          padding: 0.6rem 1.4rem;
        }
        .bb-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .bb-hamburger-bar {
          display: block;
          width: 24px;
          height: 1.5px;
          background-color: currentColor;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .open-1 { transform: translateY(6.5px) rotate(45deg); }
        .open-2 { opacity: 0; }
        .open-3 { transform: translateY(-6.5px) rotate(-45deg); }
        .bb-mobile-menu {
          display: none;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease, background-color 0.3s ease;
          background-color: var(--color-bg);
        }
        .bb-mobile-menu-open {
          max-height: 400px;
        }
        .bb-mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1.5rem 2rem;
          gap: 1.25rem;
        }
        .bb-mobile-nav-link {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-text);
          text-decoration: none;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(138, 112, 85, 0.15);
        }
        .bb-mobile-cta {
          margin-top: 0.5rem;
          text-align: center;
        }
        @media (max-width: 768px) {
          .bb-desktop-nav {
            display: none;
          }
          .bb-hamburger {
            display: flex;
          }
          .bb-mobile-menu {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}

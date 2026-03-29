"use client";

import { useState } from "react";
import Link from "next/link";

type Occasion = "everyday" | "weekend" | "gift" | "special" | null;
type Preference = "savoury" | "sweet" | "both" | null;

interface Recommendation {
  item: string;
  description: string;
  note: string;
}

function getRecommendation(
  occasion: Occasion,
  preference: Preference
): Recommendation {
  if (occasion === "everyday" && preference === "savoury") {
    return {
      item: "Classic Sourdough Loaf",
      description:
        "Our 800g slow-fermented sourdough. Crispy crust, open crumb, and a flavour that only time can build. Perfect for the weekly bread tin.",
      note: "Best toasted with butter, or alongside soup.",
    };
  }
  if (occasion === "everyday" && preference === "sweet") {
    return {
      item: "Cinnamon Scrolls",
      description:
        "Generous, warm, and properly made. A box of these will not last the morning. Great for breakfast or an afternoon treat.",
      note: "Available in batches -- check Facebook for when.",
    };
  }
  if (occasion === "everyday" && preference === "both") {
    return {
      item: "Seeded Sourdough",
      description:
        "Sunflower, sesame and poppy seeds pressed into a beautifully fermented loaf. It handles everything from avocado toast to a good smear of jam.",
      note: "One of our most popular weekly loaves.",
    };
  }
  if (occasion === "weekend" && preference === "savoury") {
    return {
      item: "Rosemary Focaccia",
      description:
        "Generous with olive oil, dimpled by hand, finished with sea salt and rosemary. The kind of bread you tear at the table with good company.",
      note: "Best ordered a day ahead.",
    };
  }
  if (occasion === "weekend" && preference === "sweet") {
    return {
      item: "Cinnamon Scrolls",
      description:
        "A weekend staple. Proper scrolls -- not skimpy -- packed with cinnamon and baked until golden. They go fast.",
      note: "Pre-order to avoid missing out.",
    };
  }
  if (occasion === "weekend" && preference === "both") {
    return {
      item: "Mixed Weekend Box",
      description:
        "Ask us about a weekend selection: a sourdough loaf plus a few sweet bakes. We can put something together depending on what we're baking that week.",
      note: "Message us on Facebook or email to arrange.",
    };
  }
  if (occasion === "gift" && preference === "sweet") {
    return {
      item: "Gift Box of Sweet Bakes",
      description:
        "Cinnamon scrolls, a danish or two, and something seasonal. Packed with care. The sort of gift that actually gets appreciated.",
      note: "Let us know the occasion and we'll make it feel special.",
    };
  }
  if (occasion === "gift") {
    return {
      item: "Sourdough Gift Loaf",
      description:
        "A beautiful loaf of Classic or Seeded Sourdough, wrapped and ready to give. Real bread is a genuinely good gift.",
      note: "We can include a handwritten note. Just ask.",
    };
  }
  if (occasion === "special" && preference === "sweet") {
    return {
      item: "Custom Sweet Order",
      description:
        "Something for a birthday, a gathering, a celebration. Get in touch and tell us what you're after -- we'll let you know what's possible.",
      note: "Give us as much notice as you can.",
    };
  }
  if (occasion === "special") {
    return {
      item: "Custom Bread Order",
      description:
        "Feeding a crowd? Need something specific? We do custom orders for special occasions. A large focaccia, multiple loaves, or a mix -- just ask.",
      note: "Early notice helps us plan the bake.",
    };
  }
  // Fallback
  return {
    item: "Classic Sourdough Loaf",
    description:
      "When in doubt, start with the classic. It's what we're known for.",
    note: "You won't regret it.",
  };
}

export default function OrderHelper() {
  const [occasion, setOccasion] = useState<Occasion>(null);
  const [preference, setPreference] = useState<Preference>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOccasion = (val: Occasion) => {
    setOccasion(val);
    setPreference(null);
    setShowResult(false);
  };

  const handlePreference = (val: Preference) => {
    setPreference(val);
    setShowResult(true);
  };

  const reset = () => {
    setOccasion(null);
    setPreference(null);
    setShowResult(false);
  };

  const recommendation = occasion && preference ? getRecommendation(occasion, preference) : null;

  return (
    <div className="oh-wrapper">
      <div className="oh-header bb-reveal">
        <span className="bb-label">Not sure what to order?</span>
        <h2 className="bb-heading-lg oh-title">
          <em>What should I get?</em>
        </h2>
        <p className="bb-body-lg oh-intro">
          Answer two questions and we will point you in the right direction.
        </p>
      </div>

      {!occasion && (
        <div className="oh-step bb-reveal">
          <p className="oh-step-label">Step 1 of 2</p>
          <p className="oh-question">What is this for?</p>
          <div className="oh-options">
            {[
              { val: "everyday" as Occasion, label: "Everyday bread", sub: "The weekly loaf" },
              { val: "weekend" as Occasion, label: "Weekend treat", sub: "Something a bit special" },
              { val: "gift" as Occasion, label: "A gift for someone", sub: "Made with love" },
              { val: "special" as Occasion, label: "Special occasion", sub: "Custom order" },
            ].map(({ val, label, sub }) => (
              <button
                key={val}
                className="oh-option"
                onClick={() => handleOccasion(val)}
              >
                <span className="oh-option-label">{label}</span>
                <span className="oh-option-sub">{sub}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {occasion && !showResult && (
        <div className="oh-step">
          <p className="oh-step-label">Step 2 of 2</p>
          <p className="oh-question">What do you feel like?</p>
          <div className="oh-options oh-options-3">
            {[
              { val: "savoury" as Preference, label: "Savoury", sub: "Bread, focaccia, rye" },
              { val: "sweet" as Preference, label: "Sweet", sub: "Scrolls, danish, bakes" },
              { val: "both" as Preference, label: "A bit of both", sub: "Surprise me" },
            ].map(({ val, label, sub }) => (
              <button
                key={val}
                className="oh-option"
                onClick={() => handlePreference(val)}
              >
                <span className="oh-option-label">{label}</span>
                <span className="oh-option-sub">{sub}</span>
              </button>
            ))}
          </div>
          <button className="oh-back" onClick={reset}>
            Back
          </button>
        </div>
      )}

      {showResult && recommendation && (
        <div className="oh-result">
          <div className="oh-result-inner">
            <p className="bb-label oh-result-label">We suggest</p>
            <h3 className="oh-result-title">{recommendation.item}</h3>
            <div className="bb-divider" />
            <p className="oh-result-desc">{recommendation.description}</p>
            <p className="oh-result-note">{recommendation.note}</p>
            <div className="oh-result-ctas">
              <Link href="/order" className="bb-btn-primary">
                Pre-Order Now
              </Link>
              <button className="oh-restart" onClick={reset}>
                Start Over
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .oh-wrapper {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          padding: 3rem;
          max-width: 700px;
          margin: 0 auto;
        }
        .oh-title {
          margin-top: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .oh-intro {
          margin-bottom: 2rem;
        }
        .oh-step-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
        }
        .oh-question {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 1.5rem;
        }
        .oh-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .oh-options-3 {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .oh-option {
          background-color: var(--color-bg);
          border: 1.5px solid rgba(138, 112, 85, 0.2);
          border-radius: var(--radius);
          padding: 1.1rem 1rem;
          text-align: left;
          cursor: pointer;
          transition: border-color var(--transition), background-color var(--transition);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .oh-option:hover {
          border-color: var(--color-accent);
          background-color: rgba(196, 133, 58, 0.04);
        }
        .oh-option-label {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text);
        }
        .oh-option-sub {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--color-text-muted);
        }
        .oh-back {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 400;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }
        .oh-back:hover {
          color: var(--color-text);
        }
        .oh-result-label {
          margin-bottom: 0.5rem;
        }
        .oh-result-title {
          font-family: var(--font-heading);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 0.75rem;
        }
        .oh-result-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 300;
          color: var(--color-text-muted);
          line-height: 1.75;
          margin-bottom: 0.75rem;
        }
        .oh-result-note {
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 400;
          font-style: italic;
          color: var(--color-accent);
          margin-bottom: 2rem;
        }
        .oh-result-ctas {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .oh-restart {
          background: none;
          border: none;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--color-text-muted);
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }
        .oh-restart:hover {
          color: var(--color-text);
        }
        @media (max-width: 640px) {
          .oh-wrapper {
            padding: 2rem 1.5rem;
          }
          .oh-options {
            grid-template-columns: 1fr;
          }
          .oh-options-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

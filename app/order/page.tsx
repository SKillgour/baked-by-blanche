import Link from "next/link";
import BBScrollAnimations from "@/components/BBScrollAnimations";

const steps = [
  {
    number: "01",
    title: "Check the weekly bake list",
    body: "Follow Baked By Blanche on Facebook. Blanche posts what's available each week, usually Monday or Tuesday. That's where you'll find out what's on and how much.",
  },
  {
    number: "02",
    title: "Place your order",
    body: "Message on Facebook or call 021 784 286. Let us know what you'd like and your preferred pick-up day. We'll confirm availability and sort everything from there.",
  },
  {
    number: "03",
    title: "Pick up in Hawera",
    body: "We'll confirm your order and let you know when it's ready. Fresh from the oven, collected at a time that works for you.",
  },
];

const faqs = [
  {
    question: "Can I order the same thing every week?",
    answer:
      "Yes. Regular orders are welcome and easy to set up. Just message Blanche on Facebook or give her a call and she'll sort a standing order for you.",
  },
  {
    question: "How far in advance do I need to order?",
    answer:
      "48 hours minimum is ideal. It gives time to prepare your loaves properly. That said, message us and we'll do our best depending on what's on that week.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Not currently. Pick-up only from Hawera. It keeps things simple and ensures the bread gets to you in the best possible condition.",
  },
  {
    question: "Do you take custom orders for events?",
    answer:
      "Yes, for platters and larger quantities. Get in touch to discuss what you need and we'll work out whether it fits the schedule.",
  },
];

export default function OrderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bb-order-hero bb-dark-section">
        <div className="container bb-order-hero-inner bb-reveal">
          <span className="bb-label">Pre-orders only</span>
          <div className="bb-divider" />
          <h1 className="bb-heading-xl bb-order-hero-heading">How to Order</h1>
          <p className="bb-order-hero-sub">
            Pre-orders only. We bake to order so everything is fresh.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bb-section bb-steps-section">
        <div className="container">
          <div className="bb-order-steps">
            {steps.map((step, i) => (
              <div key={i} className="bb-order-step bb-reveal">
                <div className="bb-order-step-number-col">
                  <span className="bb-order-step-num">{step.number}</span>
                  {i < steps.length - 1 && <div className="bb-order-step-line" />}
                </div>
                <div className="bb-order-step-content">
                  <h2 className="bb-order-step-title">{step.title}</h2>
                  <p className="bb-order-step-body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bb-section bb-faq-section bb-dark-section">
        <div className="container">
          <div className="bb-faq-header bb-reveal">
            <span className="bb-label">Questions</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg bb-heading-on-dark">Common Questions</h2>
          </div>

          <div className="bb-faq-list bb-stagger-group">
            {faqs.map((faq, i) => (
              <div key={i} className="bb-faq-item bb-stagger-item">
                <h3 className="bb-faq-question">{faq.question}</h3>
                <p className="bb-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bb-section bb-order-cta-section">
        <div className="container bb-order-cta-inner bb-reveal">
          <div className="bb-order-cta-text">
            <span className="bb-label">Ready to order?</span>
            <div className="bb-divider" />
            <h2 className="bb-heading-lg">Get in Touch</h2>
            <p className="bb-body-lg bb-order-cta-body">
              Message on Facebook or call directly. We're a small operation and we like to keep it personal.
            </p>
          </div>
          <div className="bb-order-cta-contacts">
            <a
              href="https://www.facebook.com/bakedbyblanche"
              target="_blank"
              rel="noopener noreferrer"
              className="bb-btn-primary"
            >
              Message on Facebook
            </a>
            <a href="tel:021784286" className="bb-contact-phone">
              021 784 286
            </a>
          </div>
        </div>
      </section>

      <BBScrollAnimations />

      <style>{`
        /* Hero */
        .bb-order-hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
        }
        .bb-order-hero-inner {
          max-width: 640px;
        }
        .bb-order-hero-inner .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-order-hero-inner .bb-divider {
          margin: 1rem 0 1.5rem;
        }
        .bb-order-hero-heading {
          margin-bottom: 1.25rem;
        }
        .bb-order-hero-sub {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 300;
          color: rgba(245, 236, 216, 0.65);
          line-height: 1.7;
          max-width: 440px;
        }

        /* Steps */
        .bb-steps-section {
          background-color: var(--color-bg);
        }
        .bb-order-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 760px;
          margin: 0 auto;
        }
        .bb-order-step {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 2rem;
          padding-bottom: 3.5rem;
        }
        .bb-order-step:last-child {
          padding-bottom: 0;
        }
        .bb-order-step-number-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .bb-order-step-num {
          font-family: var(--font-heading);
          font-size: 3.2rem;
          font-weight: 300;
          font-style: italic;
          color: var(--color-accent);
          line-height: 1;
          flex-shrink: 0;
        }
        .bb-order-step-line {
          flex: 1;
          width: 1px;
          background-color: rgba(196, 133, 58, 0.25);
          margin-top: 1rem;
          margin-bottom: -3.5rem;
        }
        .bb-order-step-content {
          padding-top: 0.25rem;
        }
        .bb-order-step-title {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 400;
          color: var(--color-text);
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .bb-order-step-body {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 300;
          color: var(--color-text-muted);
          line-height: 1.8;
        }

        /* FAQ */
        .bb-faq-section {
          background-color: var(--color-dark-surface);
        }
        .bb-faq-header {
          margin-bottom: 3rem;
        }
        .bb-faq-header .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-faq-header .bb-divider {
          margin: 1rem 0 1.25rem;
        }
        .bb-heading-on-dark {
          color: var(--color-text-on-dark);
        }
        .bb-faq-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .bb-faq-item {
          background-color: rgba(245, 236, 216, 0.05);
          border: 1px solid rgba(245, 236, 216, 0.1);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
        }
        .bb-faq-question {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 400;
          color: var(--color-text-on-dark);
          line-height: 1.3;
          margin-bottom: 0.85rem;
        }
        .bb-faq-answer {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(245, 236, 216, 0.6);
          line-height: 1.75;
        }

        /* CTA section */
        .bb-order-cta-section {
          background-color: var(--color-surface);
        }
        .bb-order-cta-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 4rem;
          align-items: center;
        }
        .bb-order-cta-text .bb-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .bb-order-cta-text .bb-divider {
          margin: 1rem 0 1.25rem;
        }
        .bb-order-cta-body {
          margin-top: 0.75rem;
          max-width: 480px;
        }
        .bb-order-cta-contacts {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          flex-shrink: 0;
        }
        .bb-contact-phone {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 300;
          font-style: italic;
          color: var(--color-text);
          text-decoration: none;
          transition: color var(--transition);
        }
        .bb-contact-phone:hover {
          color: var(--color-accent);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .bb-order-step {
            grid-template-columns: 70px 1fr;
            gap: 1.25rem;
          }
          .bb-order-step-num {
            font-size: 2.5rem;
          }
          .bb-faq-list {
            grid-template-columns: 1fr;
          }
          .bb-order-cta-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .bb-order-cta-contacts {
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}

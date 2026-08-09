import { useState } from "react";
import { faqData } from "../../data/faqData";
import { useReveal } from "../../hooks/useReveal";
import "./FAQ.css";

function FAQItem({ q, a, isOpen, onToggle, id }) {
  return (
    <div className="faq-item">
      <h3>
        <button
          type="button"
          className="faq-item__trigger"
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          onClick={onToggle}
        >
          <span>{q}</span>
          <span className="faq-item__icon" aria-hidden="true">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`faq-item__panel ${isOpen ? "is-open" : ""}`}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const headRef = useReveal();
  const listRef = useReveal();

  return (
    <section id="faq" className="faq section" data-theme="light" aria-labelledby="faq-title">
      <div className="container">
        <div ref={headRef} className="faq__head reveal">
          <p className="chapter-mark">CHAPTER 09 — THE END / THE BEGINNING</p>
          <span className="micro-label">FAQ</span>
          <h2 id="faq-title" className="faq__title">
            QUESTIONS.
          </h2>
        </div>

        <div ref={listRef} className="faq__list reveal">
          {faqData.map((item, i) => (
            <FAQItem
              key={item.q}
              id={`faq-${i}`}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((v) => (v === i ? -1 : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

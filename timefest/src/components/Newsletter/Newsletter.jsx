import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import "./Newsletter.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success
  const revealRef = useReveal();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  return (
    <section className="newsletter section" data-theme="light" aria-labelledby="newsletter-title">
      <div className="container">
        <div ref={revealRef} className="newsletter__card reveal">
          <div className="newsletter__glow" aria-hidden="true" />
          <div className="newsletter__content">
            <span className="micro-label">STAY IN THE MOMENT</span>
            <h2 id="newsletter-title" className="newsletter__title">
              DON'T MISS
              <br />
              THE NEXT DROP.
            </h2>
            <p className="newsletter__text">Lineups, novos lotes e experiências exclusivas.</p>

            <form className="newsletter__form" onSubmit={onSubmit} noValidate>
              <label htmlFor="newsletter-email" className="visually-hidden">
                Seu e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                aria-invalid={status === "error"}
                aria-describedby="newsletter-feedback"
              />
              <button type="submit" aria-label="Inscrever-se">
                <span className="arrow">→</span>
              </button>
            </form>
            <p id="newsletter-feedback" className={`newsletter__feedback newsletter__feedback--${status}`} role="status">
              {status === "error" && "Digite um e-mail válido."}
              {status === "success" && "Você está dentro. Bem-vindo ao TIME FEST."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

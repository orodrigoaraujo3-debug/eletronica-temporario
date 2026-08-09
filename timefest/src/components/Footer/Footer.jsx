import { eventData, socialLinks, partnerCategories } from "../../data/eventData";
import "./Footer.css";

const COLUMNS = [
  {
    title: "EXPLORAR",
    links: [
      { label: "Lineup", href: "#lineup" },
      { label: "Experiência", href: "#experience" },
      { label: "Palcos", href: "#stages" },
      { label: "Ingressos", href: "#tickets" },
    ],
  },
  {
    title: "INFO",
    links: [
      { label: "Expominas", href: "#venue" },
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "mailto:contato@timefest.com" },
      { label: "Imprensa", href: "mailto:imprensa@timefest.com" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-theme="light">
      <div className="container site-footer__partners">
        <span className="site-footer__partners-label">PARCEIROS</span>
        <ul className="site-footer__partners-list">
          {partnerCategories.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <p className="site-footer__logo">
            TIME
            <br />
            FEST
          </p>
          <p className="site-footer__tagline">
            {eventData.tagline}
            <br />
            {eventData.signature}
          </p>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} className="site-footer__col" aria-label={col.title}>
            <p className="site-footer__col-title">{col.title}</p>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav className="site-footer__col" aria-label="Siga-nos">
          <p className="site-footer__col-title">SIGA-NOS</p>
          <ul>
            {socialLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <span>
          © {year} {eventData.name}. Todos os direitos reservados.
        </span>
        <span className="site-footer__made">Belo Horizonte, Brasil</span>
      </div>
    </footer>
  );
}

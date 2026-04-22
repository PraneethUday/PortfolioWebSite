import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const prev = lastScrollY[0];

      setScrolled(current > 20);
      setHidden(current > prev && current > 80);
      lastScrollY[0] = current;

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && current >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setActive(href.slice(1));
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}${hidden ? " hidden" : ""}`}>
      <a href="#home" className="navbar-logo" onClick={() => handleNavClick("#home")}>
        PU<span className="logo-dot">.</span>
      </a>

      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`nav-link${active === href.slice(1) ? " active" : ""}`}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

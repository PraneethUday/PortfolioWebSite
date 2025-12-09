import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="hero-section">
        <h1 className="animated-name">
          <span className="name-letter">P</span>
          <span className="name-letter">r</span>
          <span className="name-letter">a</span>
          <span className="name-letter">n</span>
          <span className="name-letter">e</span>
          <span className="name-letter">e</span>
          <span className="name-letter">t</span>
          <span className="name-letter">h</span>
          <span className="name-space"> </span>
          <span className="name-letter">U</span>
        </h1>
        <p className="title-text">
          3rd-year CSE student | Embedded Systems & Web Developer
        </p>
        <div className="social-links">
          <a
            href="https://github.com/PraneethUday"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/praneeth-u-615959314/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a href="mailto:praneethp227@gmail.com" className="social-link">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
            Email
          </a>
          <a href="tel:+918438117425" className="social-link">
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
            Phone
          </a>
          <a
            href="https://drive.google.com/file/d/1tuk4pFqkH_7kesYj4eJ19crgkj087qDK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer loop shape (inspired by the LeetCode "path") */}
              <path
                d="M9 4C7 6 5.75 7.75 5 9.5C4.5 10.75 4.5 12 5 13.25C5.75 15 7 16.75 9 18.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Inner hook */}
              <path
                d="M11 6.5C9.9 7.5 9.2 8.4 8.8 9.3C8.5 9.9 8.5 10.6 8.8 11.2C9.2 12.1 9.9 13 11 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Right angle-like element */}
              <path
                d="M13.5 8H18C18.8 8 19.5 8.7 19.5 9.5V14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Small "code node" circle */}
              <circle cx="18" cy="16.5" r="1.4" fill="currentColor" />
            </svg>
            LeetCode
          </a>
          <a
            href="https://drive.google.com/file/d/1tuk4pFqkH_7kesYj4eJ19crgkj087qDK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 2C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H18C19.105 22 20 21.105 20 20V8L14 2H6Z" />
              <path d="M14 2V8H20" />
              <rect x="7" y="10" width="10" height="2" rx="1" />
              <rect x="7" y="14" width="10" height="2" rx="1" />
              <rect x="7" y="18" width="6" height="2" rx="1" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

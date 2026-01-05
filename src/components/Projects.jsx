import { useEffect, useRef, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [sectionVisible, setSectionVisible] = useState(false);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      sectionObserver.observe(currentSection);
    }

    const currentRefs = cardRefs.current;
    const observers = currentRefs.map((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 100);
          }
        },
        { threshold: 0.2 }
      );

      if (card) {
        observer.observe(card);
      }
      return observer;
    });

    return () => {
      if (currentSection) {
        sectionObserver.unobserve(currentSection);
      }
      observers.forEach((observer, index) => {
        if (currentRefs[index]) {
          observer.unobserve(currentRefs[index]);
        }
      });
    };
  }, []);

  const projects = [
    {
      title: "Navigation System – Interactive Web-Based Route Planner",
      tech: "Flask, Leaflet.js, OpenStreetMap",
      description:
        "A web-based navigation system for real-time route planning with interactive map visualization and waypoint support. Built with Flask backend, Leaflet.js for mapping, and OpenStreetMap for geographic data. Features REST APIs for dynamic route optimization and real-time tracking.",
      github: "https://github.com/PraneethUday/NavigationSystem",
      highlights: [
        "Real-time Route Planning",
        "Interactive Maps",
        "Waypoint Support",
        "REST APIs",
      ],
    },
    {
      title: "BloodNet – Online Functional Blood Bank",
      tech: "MERN Stack",
      description:
        "A full-stack blood bank platform enabling donor management, blood requests, and secure role-based access control. Built with MongoDB, Express.js, React.js, and Node.js featuring JWT authentication, real-time inventory tracking, and comprehensive request handling.",
      github: "https://github.com/PraneethUday/BloodBank",
      highlights: [
        "Donor Management",
        "JWT Authentication",
        "Role-based Access",
        "Real-time Inventory",
      ],
    },
    {
      title: "RFID-Based Voting System",
      tech: "STM32F401, Embedded C",
      description:
        "An embedded voting system with RFID-based voter authentication and secure real-time vote counting. Designed on STM32F401 microcontroller with tamper-proof architecture, UART communication, and LED status indicators for voter verification.",
      github: "https://github.com/PraneethUday/RFID-Voting-System",
      highlights: [
        "RFID Authentication",
        "Real-time Counting",
        "Embedded C",
        "Secure Design",
      ],
    },
    {
      title: "ScrapeSense – AI-Powered Web Scraper",
      tech: "React, TypeScript, Node.js, Chrome Extensions",
      description:
        "An AI-powered Chrome extension for intelligent web scraping, summarization, and chatbot-based assistance. Features advanced content extraction, AI-driven summarization of scraped data, and conversational interface for data interaction.",
      github: "https://github.com/PraneethUday/ScrapeSense",
      highlights: [
        "Chrome Extension",
        "AI Summarization",
        "Web Scraping",
        "Chatbot Integration",
      ],
    },
    {
      title: "Edge-Enabled DRL Based Cooperative Perception in Vehicles",
      tech: "Deep Reinforcement Learning",
      description:
        "Research project implementing edge computing and deep reinforcement learning for cooperative perception in autonomous vehicles. Focuses on optimizing sensor data sharing and decision-making in vehicle-to-vehicle communication networks.",
      github:
        "https://github.com/23CSE362-edge-computing-2025-26-odd/capstone-project-01_epicfailures",
      highlights: [
        "Edge Computing",
        "DRL Algorithms",
        "V2V Communication",
        "Sensor Fusion",
      ],
    },
  ];

  return (
    <section
      className={`projects-section ${sectionVisible ? "animated" : ""}`}
      id="projects"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`project-card ${
                visibleCards.includes(index) ? "reveal" : ""
              }`}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tech">{project.tech}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <span key={i} className="highlight-tag">
                    {highlight}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

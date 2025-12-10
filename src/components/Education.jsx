import { useEffect, useRef, useState } from "react";
import "./Education.css";

export default function Education() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [sectionVisible, setSectionVisible] = useState(false);
  const itemRefs = useRef([]);
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

    const currentRefs = itemRefs.current;
    const observers = currentRefs.map((item, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          }
        },
        { threshold: 0.3 }
      );

      if (item) {
        observer.observe(item);
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

  const education = [
    {
      period: "2023 – 2027",
      degree: "B.Tech in Computer Science Engineering",
      institution: "Amrita Vishwa Vidyapeetham",
      score: "GPA: 7.82/10.0",
      status: "Pursuing",
    },
    {
      period: "2023",
      degree: "Class 12th (Higher Secondary)",
      institution: "State Board",
      score: "92.67%",
      status: "Completed",
    },
    {
      period: "2021",
      degree: "Class 10th (Secondary)",
      institution: "State Board",
      score: "Pass (Exams cancelled due to COVID-19)",
      status: "Completed",
    },
  ];

  return (
    <section
      className={`education-section ${sectionVisible ? "animated" : ""}`}
      id="education"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`timeline-item ${
                visibleItems.includes(index) ? "reveal" : ""
              }`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-period">{edu.period}</span>
                <h3 className="timeline-degree">{edu.degree}</h3>
                <p className="timeline-institution">{edu.institution}</p>
                <p className="timeline-score">{edu.score}</p>
                <span className={`timeline-status ${edu.status.toLowerCase()}`}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

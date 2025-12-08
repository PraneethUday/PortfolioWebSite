import './Education.css';

export default function Education() {
  const education = [
    {
      period: "2023 – 2027",
      degree: "B.Tech in Computer Science Engineering",
      institution: "Amrita Vishwa Vidyapeetham",
      score: "GPA: 7.98/10.0",
      status: "Pursuing"
    },
    {
      period: "2023",
      degree: "Class 12th (Higher Secondary)",
      institution: "State Board",
      score: "92.67%",
      status: "Completed"
    },
    {
      period: "2021",
      degree: "Class 10th (Secondary)",
      institution: "State Board",
      score: "Pass (Exams cancelled due to COVID-19)",
      status: "Completed"
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
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

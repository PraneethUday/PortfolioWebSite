import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript (ES6)", "C", "C++", "Haskell"],
    },
    {
      category: "Web Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "React Hooks",
        "Express.js",
        "Node.js",
        "REST API Development",
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        "MongoDB",
        "Mongoose",
        "SQL",
        "Firebase",
        "JWT Authentication",
        "API Design",
      ],
    },
    {
      category: "Embedded & IoT",
      skills: [
        "STM32",
        "Arduino Uno",
        "ESP32",
        "PWM",
        "UART",
        "I2C",
        "SPI",
        "Sensor Fusion",
        "Real-time Control Systems",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux/Unix"],
    },
    {
      category: "Computer Science Core",
      skills: ["DSA", "OOP", "OS", "DBMS", "Computer Networks"],
    },
    {
      category: "Other",
      skills: [
        "Problem Solving",
        "Debugging",
        "Agile Workflow",
        "CI/CD Basics",
        "Cloud Basics (AWS)",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

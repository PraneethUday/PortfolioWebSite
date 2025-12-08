import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">Technical Overview</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a passionate 3rd-year Computer Science Engineering student at Amrita Vishwa Vidyapeetham 
            with a strong foundation in both embedded systems and web development. My journey in technology 
            is driven by curiosity and a commitment to building innovative solutions that bridge hardware and software.
          </p>
          <p className="about-text">
            With expertise spanning from low-level embedded programming on STM32 and ESP32 platforms to 
            full-stack web development using the MERN stack, I thrive on challenges that require both 
            technical depth and creative problem-solving. My projects demonstrate a unique blend of 
            real-time systems control, IoT integration, and modern web technologies.
          </p>
          <p className="about-text">
            Currently maintaining a GPA of 7.98/10.0, I'm actively exploring edge computing, deep 
            reinforcement learning, and their applications in real-world systems like autonomous vehicles 
            and smart IoT solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

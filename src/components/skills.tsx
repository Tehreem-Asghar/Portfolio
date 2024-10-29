// Import AOS for animations
'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import '../../public/style/skills.css'; // Import your custom CSS

export default function MySkill() {
  const skills = [
    { name: "HTML", level: "99%", color: "#FF8C00" },
    { name: "CSS", level: "80%", color: "#66B2FF" },
    { name: "JavaScript", level: "90%", color: "#FFAA00" },
    { name: "TypeScript", level: "90%", color: "#009966" },
    { name: "Next.js", level: "65%", color: "#4B0082" },
    { name: "React", level: "50%", color: " #3A7CA5"  },
    { name: "SEO", level: "40%", color: "#4CAF50" },
    { name: "TailwindCss", level: "70%", color: "#FFD700" },  
    { name: "Shadcn", level: "50%", color: "#1E90FF" },
  ];


  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <main className="skills-section">
      {skills.map((skill, index) => (
        <section key={index} className="skill" data-aos="fade-up" data-aos-duration="1500">
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
          <div className="progress-bar-background">
            <div className={`progress-bar-fill `} style={{ width: skill.level, backgroundColor: skill.color }}></div>
          </div>
        </section>
      ))}
    </main>
  );
}

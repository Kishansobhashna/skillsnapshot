import React from "react";
import "./../styles/SkillsPage.css";
import Footer from "./Footer";

const skills = [
  { name: "Web Development", description: "Learn HTML, CSS, JavaScript, React, and backend." },
  { name: "Data Science", description: "Explore Python, Pandas, NumPy, and Machine Learning." },
  { name: "UI/UX Design", description: "Master Figma, design principles, and prototyping tools." },
  { name: "Digital Marketing", description: "SEO, Social Media, Google Ads, and analytics." },
  { name: "Cloud Computing", description: "AWS, Azure, DevOps tools, and deployments." },
];

function SkillsPage() {
  return (
    <div>
    <div className="skills-page">
      <h2 className="skills-heading">Choose Your Skill Path</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <button className="explore-btn">Explore</button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default SkillsPage;

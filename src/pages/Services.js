import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
  FaClipboardList,FaChartLine,FaLightbulb,FaUserCheck,FaMedal,FaSyncAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../styles/Services.css";
import Footer from "./Footer";

function Services({ theme = "light" }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/skills"); 
  };

  const handleClick2 = () => {
    navigate("/trackprogress");
  }

  const handleClick3 = () => {
    navigate("/insights");
  }

  const handleClick4 = () => {
    navigate("/accountability");
  }

  const handleClick5 = () => {
    navigate("/achievements");
  }

  const handleClick6 = () => {
    navigate("/sync");
  }

  const steps = [
    {
      icon: <FaClipboardList className="step-icon" onClick={handleClick} />,
      title: "Set Your Skills",
      description: "Choose what skills or topics you want to learn.",
    },
    {
      icon: <FaChartLine className="step-icon" onClick={handleClick2} />,
      title: "Track Progress",
      description: "Log your learning sessions, achievements, and milestones.",
    },
    {
      icon: <FaLightbulb className="step-icon" onClick={handleClick3} />,
      title: "Get Insights",
      description: "Personalized feedback and growth reports to keep motivated.",
    },
    {
      icon: <FaUserCheck className="step-icon" onClick={handleClick4}/>,
      title: "Stay Accountable",
      description: "Stay on track with regular check-ins and progress updates.",
    },
    {
      icon: <FaMedal className="step-icon" onClick={handleClick5} />,
      title: "Earn Achievements",
      description: "Unlock badges and celebrate your learning milestones.",
    },
    {
      icon: <FaSyncAlt className="step-icon" onClick={handleClick6} />,
      title: "Sync Across Devices",
      description: "Access your skill tracker anytime, anywhere.",
    },
  ];

  return (
    <div>
    <section className={`how-it-works ${theme}`} id="features">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div
            className="step"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {step.icon}
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
    {/* <Footer /> */}
    </div>
  );
}

export default Services;

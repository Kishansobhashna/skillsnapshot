import React, { useEffect } from "react";
import "./../styles/Features.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import {
  FaChartPie,FaBullseye,FaStream,FaShareAlt,FaMobileAlt,FaCertificate,FaUsers,FaCogs,
  FaClock,FaTrophy,
} from "react-icons/fa";

function Features({ theme = "light" }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <FaChartPie />,
      title: "Interactive Dashboard",
      description: "Track your progress with visual charts and graphs.",
    },
    {
      icon: <FaBullseye />,
      title: "Goal Setting & Reminders",
      description: "Set learning goals and get timely reminders.",
    },
    {
      icon: <FaStream />,
      title: "Visual Skill Timelines",
      description: "See how your skills improve over time.",
    },
    {
      icon: <FaShareAlt />,
      title: "Social Sharing",
      description: "Show off your badges and certificates with friends.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile-Friendly",
      description: "Sync your data across all your devices.",
    },
    {
      icon: <FaCertificate />,
      title: "Achievement Badges",
      description: "Earn and display badges as you master new skills.",
    },
    {
      icon: <FaUsers />,
      title: "Community Support",
      description: "Engage with others and learn together in communities.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Skill Paths",
      description: "Create personalized learning tracks for your goals.",
    },
    {
      icon: <FaClock />,
      title: "Session History",
      description: "Review all your past learning sessions in one place.",
    },
    {
      icon: <FaTrophy />,
      title: "Gamified Learning",
      description: "Level up with points, streaks, and fun milestones.",
    },
  ];

  return (
    <div>
    <section className={`features-section ${theme}`} id="features">
      <h2>Feature Highlights</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className="feature-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    {/* <Footer /> */}
    </div>
  );
}

export default Features;

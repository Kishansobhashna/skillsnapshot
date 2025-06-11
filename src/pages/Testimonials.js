import React, { useEffect } from "react";
import "./../styles/Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

function Testimonials({ theme = "light" }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      name: "Ananya Sharma",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "SkillSnapshot completely changed how I track my goals. The progress visuals keep me so motivated!",
    },
    {
      name: "Ravi Mehta",
      photo: "https://randomuser.me/api/portraits/men/43.jpg",
      quote: "The dashboard and reminders helped me stay consistent with my learning. Highly recommend it!",
    },
    {
      name: "Priya Verma",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
      quote: "I love showing off my badges. SkillSnapshot makes learning feel like a game!",
    },
    {
      name: "Karan Patel",
      photo: "https://randomuser.me/api/portraits/men/54.jpg",
      quote: "SkillSnapshot's clean UI and timeline view keep me focused. It's a must-have tool!",
    },
    {
      name: "Sneha Desai",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
      quote: "From setting goals to getting insights, everything is simple and effective.",
    },
    {
      name: "Amit Roy",
      photo: "https://randomuser.me/api/portraits/men/71.jpg",
      quote: "This app helped me stay consistent with daily learning. I'm genuinely impressed!",
    },
    {
      name: "Neha Joshi",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "SkillSnapshot feels like a personal coach. I can track every small win!",
    },
    {
      name: "Vikram Singh",
      photo: "https://randomuser.me/api/portraits/men/36.jpg",
      quote: "The progress tracking and badges keep me coming back every day.",
    },
  ];

  return (
    <div>
    <section className={`testimonials ${theme}`} id="testimonials">
      <h2>What Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((user, idx) => (
          <div className="testimonial-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <img src={user.photo} alt={user.name} className="user-photo" />
            <p className="quote">“{user.quote}”</p>
            <p className="user-name"> {user.name}</p>
          </div>
        ))}
      </div>
    </section>
    {/* <Footer /> */}
    </div>
  );
}

export default Testimonials;

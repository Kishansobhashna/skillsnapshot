import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Home.css";
import Footer from "./Footer";
import About from "./Testimonials";
import Features from "./Features";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

function Home() 
{
    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                <h1>Track Your Skills. <br />Master Your Growth.</h1>
                <p>
                    Personalized learning progress tracker to help you achieve your goals faster.
                </p>
                <div className="hero-buttons">
                    <Link to="/signup" className="btn btn-primary">Get Started</Link>
                    <a href="#features" className="btn btn-outline">Learn More</a>
                </div>
                </div>
                <div className="hero-background">
                <div className="progress-bars">
                    <div className="progress-bar" style={{ width: "80%" }}></div>
                    <div className="progress-bar" style={{ width: "60%" }}></div>
                    <div className="progress-bar" style={{ width: "40%" }}></div>
                </div>
                <div className="skill-illustration">
                    <img src="\images\tree-growth.jpeg" alt="Skill Growth" />
                </div>
                </div>
                <Testimonials />
                <Services />
                <Features />
                <Contact />
            </section>
            <Footer />
        </div>
        
    );
}

export default Home;
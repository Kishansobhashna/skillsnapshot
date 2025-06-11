import React from "react";
import { FaMedal } from "react-icons/fa";
import "./../styles/AchievementsPage.css";
import Footer from "./Footer";

function AchievementsPage() {
  return (
    <div>
    <div className="achievements-page">
      <div className="achievement-card">
        <FaMedal className="medal-icon" />
        <h2>Earn Achievements</h2>
        <p>
          Unlock badges and celebrate your learning milestones! As you progress in your
          skill journey, you'll collect achievements for consistency, improvement, and
          dedication.
        </p>
        <div className="badges-section">
          <div className="badge">🎯 Consistency</div>
          <div className="badge">💡 Skill Master</div>
          <div className="badge">⏱️ Time Tracker</div>
        </div>
        <button className="explore-btn">Explore More Badges</button>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default AchievementsPage;

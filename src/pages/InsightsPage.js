import React, { useEffect, useState } from "react";
import "./../styles/InsightsPage.css";
import Footer from "./Footer";

function InsightsPage() {
  const [progress, setProgress] = useState(0);
  const [milestones, setMilestones] = useState([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // Dummy logic for example purposes
    const completedSessions = parseInt(localStorage.getItem("completedSessions")) || 5;
    const totalSessions = 10;
    const progressPercentage = Math.min((completedSessions / totalSessions) * 100, 100);

    setProgress(progressPercentage);
    setMilestones(["First Skill Logged", "5 Sessions Completed", "Consistent for 3 Days"]);
    
    if (progressPercentage >= 80) {
      setFeedback("Great job! You’re close to mastering this skill.");
    } else if (progressPercentage >= 40) {
      setFeedback("Keep going! You’re making steady progress.");
    } else {
      setFeedback("You're just getting started. Keep learning every day!");
    }
  }, []);

  return (
    <div>
    <div className="insights-page">
      <h2 className="title">Your Learning Insights</h2>

      <div className="progress-section">
        <h3>Overall Progress</h3>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            {progress.toFixed(0)}%
          </div>
        </div>
      </div>

      <div className="feedback-section">
        <h3>Feedback</h3>
        <p>{feedback}</p>
      </div>

      <div className="milestones-section">
        <h3>Milestones Achieved</h3>
        <ul>
          {milestones.map((milestone, index) => (
            <li key={index}>✅ {milestone}</li>
          ))}
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default InsightsPage;

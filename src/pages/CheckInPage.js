import React, { useState } from "react";
import "./../styles/CheckInPage.css";
import Footer from "./Footer";

function CheckInPage() {
  const [goal, setGoal] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Goal: ${goal}\nProgress: ${progress}`);
    // You can also send this data to backend/localStorage here
  };

return (
    <div>
    <div className="checkin-container">
      <h2>Weekly Check-In</h2>
      <form onSubmit={handleSubmit} className="checkin-form">
        <label>
          Set a Goal:
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </label>
        <label>
          What did you complete this week?
          <textarea
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Check-In</button>
      </form>
    </div>
    <Footer />
    </div>
  );
}

export default CheckInPage;
import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./../styles/AccountabilityPage.css";
import Footer from "./Footer";

function AccountabilityPage() {

    const navigate = useNavigate();

    const handleCheckIn = () => {
        navigate("/checkin");
    };

  return (
    <div>
    <div className="accountability-page">
      <div className="accountability-card">
        <FaUserCheck className="accountability-icon" />
        <h2>Stay Accountable</h2>
        <p>
          Stay on track with regular check-ins and progress updates. Set weekly goals,
          review your progress, and receive gentle reminders to keep you moving forward.
        </p>
        <button className="check-in-btn" onClick={handleCheckIn}>Start Check-In</button>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default AccountabilityPage;

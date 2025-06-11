import React from "react";
import { FaSyncAlt, FaCloud, FaMobileAlt, FaLaptop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./../styles/SyncDevicesPage.css";
import Footer from "./Footer";

function SyncDevicesPage() {
  const navigate = useNavigate();

  const handleStartSync = () => {
    localStorage.setItem("syncEnabled", "true");
    alert("Device sync activated! All your progress will now sync across devices.");
    
  };

  return (
    <div>
      <div className="sync-page">
        <div className="sync-card">
          <FaSyncAlt className="sync-icon" />
          <h2>Sync Across Devices</h2>
          <p>
            Access your SkillSnapshot tracker from anywhere—whether you’re on your phone, tablet,
            or desktop. Your progress stays updated in real time!
          </p>
          <div className="device-icons">
            <FaMobileAlt className="device-icon" />
            <FaLaptop className="device-icon" />
            <FaCloud className="device-icon" />
          </div>
          <button className="sync-btn" onClick={handleStartSync}>Start Syncing Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SyncDevicesPage;

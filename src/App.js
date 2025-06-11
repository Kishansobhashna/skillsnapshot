import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SkillsPage from "./pages/SkillPage";
import TrackProgressPage from "./pages/TrackProgressPage";
import InsightsPage from "./pages/InsightsPage";
import AccountabilityPage from "./pages/AccountabilityPage";
import AchievementsPage from "./pages/AchievementsPage";
import SyncDevicesPage from "./pages/SyncDevicesPage";
import CheckInPage from "./pages/CheckInPage";

function App() {

  const [theme, setTheme] = useState("light");
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services" element={<Services theme={theme}/>} />
        <Route path="/features" element={<Features theme={theme}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/trackprogress" element={<TrackProgressPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/accountability" element={<AccountabilityPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/sync" element={<SyncDevicesPage />} />
        <Route path="/checkin" element={<CheckInPage />} />

      </Routes>
    </Router>
  );
}

export default App;
import React, { useState } from "react";
import "./../styles/TrackProgressPage.css";
import Footer from "./Footer";

function TrackProgressPage() {
  const [logs, setLogs] = useState([]);
  const [sessionNote, setSessionNote] = useState("");

  const handleAddLog = () => {
    if (sessionNote.trim()) {
      const newLog = {
        note: sessionNote,
        date: new Date().toLocaleString(),
      };
      setLogs([newLog, ...logs]);
      setSessionNote("");
    }
  };

  return (
    <div>
    <div className="progress-page">
      <h2 className="progress-title">Track Your Learning Progress</h2>
      
      <div className="log-form">
        <textarea
          value={sessionNote}
          onChange={(e) => setSessionNote(e.target.value)}
          placeholder="What did you learn or achieve today?"
        />
        <button onClick={handleAddLog}>Add Progress</button>
      </div>

      <div className="log-history">
        <h3>Progress Logs</h3>
        {logs.length === 0 ? (
          <p className="empty">No progress logged yet.</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="log-entry">
              <p>{log.note}</p>
              <small>{log.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default TrackProgressPage;

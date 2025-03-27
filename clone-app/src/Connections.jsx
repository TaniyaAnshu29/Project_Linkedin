import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Connections.css";
const Connections = () => {
  const [connections, setConnections] = useState([]);
  useEffect(() => {
    const storedConnections =
      JSON.parse(localStorage.getItem("connectedUsers")) || [];
    setConnections(storedConnections);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="connectionsPage-container">
        <div className="connectionsList-box">
          <h2 className="connectionsList-header">
            {connections.length} Connections</h2>
          {connections.length === 0 ? (
            <p className="connectionsList-noConnections">
              No connections yet. Start connecting with people!
            </p> ) : (
            <div className="connectionsList-container">
              {connections.map((person) => (
                <div className="connectionsList-item" key={person.id}>
                  <div className="connectionsList-info">
                    <img src={person.profilePicture} alt={person.name} className="connectionsList-avatar"/>
                    <div className="connectionsList-details">
                      <h4 className="connectionsList-name">{person.name}</h4>
                      <p className="connectionsList-profession"> {person.profession}</p>
                      <p className="connectionsList-timestamp">{person.t}</p>
                    </div>
                  </div>
                  <button className="connectionsList-messageBtn">Message</button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="connectionsPage-rightSection">
          <img src="/images/Hire.png" alt="Hire Banner" className="connectionsPage-rightImage" />
        </div>
      </div>
    </div>
  );
};
export default Connections;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./MyNetwork.css";
function MyNetwork() {
  const [people, setPeople] = useState([]);
  const [connections, setConnections] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedConnections = JSON.parse(localStorage.getItem("connectedUsers")) || [];
    setConnections(storedConnections);
    fetch("/people.json")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const handleConnect = (person) => {
    if (!connections.some((conn) => conn.id === person.id)) {
      const newConnection = { ...person };
      const updatedConnections = [...connections, newConnection];
      setConnections(updatedConnections);
      localStorage.setItem("connectedUsers", JSON.stringify(updatedConnections));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="network-page-container">
        <div className="network-left-block">
          <h3>Manage my network</h3>
          <ul className="network-list">
            <li onClick={() => navigate("/connections")}>
              <div className="network-item">
                <i className="fas fa-user-friends"></i>
                <span>Connections</span>
              </div>
              <span className="network-number">{connections.length}</span>
            </li>
            <li>
              <div className="network-item">
                <i className="fas fa-address-book"></i>
                <span>Contacts</span>
              </div>
              <span className="network-number">114</span>
            </li>
            <li>
              <div className="network-item">
                <i className="fas fa-users"></i>
                <span>Following & Followers</span>
              </div>
            </li>
            <li>
              <div className="network-item">
                <i className="fas fa-user-circle"></i>
                <span>Groups</span>
              </div>
            </li>
            <li>
              <div className="network-item">
                <i className="fas fa-calendar-alt"></i>
                <span>Events</span>
              </div>
            </li>
            <li>
              <div className="network-item">
                <i className="fas fa-file-alt"></i>
                <span>Pages</span>
              </div>
              <span className="network-number">2</span>
            </li>
            <li>
              <div className="network-item">
                <i className="fas fa-envelope"></i>
                <span>Newsletters</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="network-right">
          <div className="people-block">
            <h3 className="people-heading">People you may know</h3>
            <div className="people-list">
              {people.map((person) => (
                <div className="person-card" key={person.id}>
                  <img src={person.profilePicture} alt={person.name} className="person-image" />
                  <div className="person-info">
                    <h4>{person.name}</h4>
                    <p className="profession">{person.profession}</p>
                    <p className="mutual-connections">{person.mutualConnections} mutual connections</p>
                    <button
                      className={`connect-btn ${
                        connections.some((conn) => conn.id === person.id) ? "connected-btn" : ""
                      }`}
                      onClick={() => handleConnect(person)}
                      disabled={connections.some((conn) => conn.id === person.id)}>
                      {connections.some((conn) => conn.id === person.id) ? "Connected" : "Connect"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyNetwork;
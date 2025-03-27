import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./JobPage.css";
import NewNavbar from "./NewNavbar";
import "./NewNavbar.css";
const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [userData, setUserData] = useState({});
  const [savedJobs, setSavedJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
    fetch("/AnotherUser.json")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
    const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(storedJobs);
  }, []);
  const handleSaveJob = (jobId) => {
    let updatedSavedJobs;
    if (savedJobs.includes(jobId)) {
      updatedSavedJobs = savedJobs.filter((id) => id !== jobId); 
    } else {
      updatedSavedJobs = [...savedJobs, jobId]; 
    }
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };
  console.log("Rendering NewNavbar..");
  return (
    <div>
      <NewNavbar />
      <div className="container-layout">
        <div className="side-panel">
          <div className="info-box">
            <div className="info-bg">
              <div className="profile-img-container">
                <img src={userData.profilePicture || "/images/p1.jpeg"} alt="User Avatar" className="avatar-image"/>
              </div>
            </div>
            <div className="user-details">
              <h3 className="user-title">{userData.name || "Liam Adams"}</h3>
              <p className="user-headline">
                {userData.headline || "Frontend Developer"}
              </p>
              <p className="user-location">
                {userData.location || "Bhubaneswar, Odisha"}
              </p>
              <p className="user-connections">
                {userData.connections
                  ? `${userData.connections} connections`
                  : "No connections yet"}
              </p>
            </div>
          </div>
          <div className="nav-menu">
            <div className="menu-item">
              <i className="fa-solid fa-sliders"></i> Preferences
            </div>
            <div className="menu-item">
              <i className="fa-solid fa-briefcase"></i> My Jobs
            </div>
          </div>
        </div>
        <div className="content-panel">
          <h2 className="heading-title">Job Picks for You</h2>
          <div className="jobs-wrapper">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <img
                  src={job.companyLogo}
                  alt={job.companyName}
                  className="logo-image"
                />
                <div className="job-info">
                  <h4 className="job-name">{job.jobTitle}</h4>
                  <p className="company-title">{job.companyName}</p>
                  <p className="location-info">{job.jobLocation}</p>
                </div>
                <button
                  className={`save-btn ${savedJobs.includes(job.id) ? "saved" : ""}`}
                  onClick={() => handleSaveJob(job.id)}
                >
                  {savedJobs.includes(job.id) ? "Saved" : "Save Job"}
                </button>
                <Link to={`/job/${job.id}`}>
                  <button className="view-btn">View Description</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobPage;
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewNavbar from "./NewNavbar";
import "./JobDetails.css";
import "./NewNavbar.css";
const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        const selected = data.find((job) => job.id === parseInt(id));
        setSelectedJob(selected);
      })
      .catch((error) => console.error("Error fetching job data:", error));
  }, [id]);
  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };
  if (!selectedJob) {
    return <p>Loading job details...</p>;
  }
  return (
    <div>
      <NewNavbar />
      <div className="job-details-container">
        <div className="job-details-left">
          <h3 className="job-pick">Job Picks for You</h3>
          <div className="job-details-list">
            {jobs.map((job) => (
              <div key={job.id} className={`job-details-card ${job.id === selectedJob.id ? "job-details-active" : ""}`}
                onClick={() => handleJobClick(job.id)}
              >
                <img src={job.companyLogo} alt={job.companyName} className="job-details-logo" />
                <div className="job-details-info">
                  <h4 className="job-details-title">{job.jobTitle}</h4>
                  <p className="job-details-company">{job.companyName}</p>
                  <p className="job-details-location">{job.jobLocation}</p>
                </div>
                <i className="fas fa-times job-details-remove"></i>
              </div>
            ))}
          </div>
        </div>
        <div className="job-details-right">
          <div className="job-details-header">
            <img src={selectedJob.companyLogo} alt={selectedJob.companyName} className="job-details-company-logo" />
            <h2 className="job-details-company-name">{selectedJob.companyName}</h2>
          </div>
          <h3 className="job-details-title-big">{selectedJob.jobTitle}</h3>
          <div className="job-details-buttons">
            <button className="job-details-apply">Apply Now</button>
            <button className="job-details-save">Save Job</button>
          </div>
          <p><strong>Location:</strong> {selectedJob.jobLocation}</p>
          <p><strong>Followers:</strong> {selectedJob.followers.toLocaleString()} people</p>
          <h3>About the Job:</h3>
          <p><strong>Experience Required:</strong> {selectedJob.jobDescription.experience}</p>
          <p><strong>Salary:</strong> {selectedJob.jobDescription.salary}</p>
          <p><strong>Notice Period:</strong> {selectedJob.jobDescription.noticePeriod}</p>
          <p><strong>Shift:</strong> {selectedJob.jobDescription.shift}</p>
          <p><strong>Placement Type:</strong> {selectedJob.jobDescription.placementType}</p>
          <h4>Required Skills:</h4>
          <ul>
            {selectedJob.jobDescription.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h4>Job Summary:</h4>
          <p>{selectedJob.jobDescription.jobSummary}</p>
          <h4>Responsibilities:</h4>
          <ul>
            {selectedJob.jobDescription.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
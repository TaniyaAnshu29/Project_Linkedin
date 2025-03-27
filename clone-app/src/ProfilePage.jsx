import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [user, setUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    return (
      savedUser || {
        name: "Taniya Anshu",
        title: "Frontend Developer",
        location: "Ranchi, Jharkhand, India",
        connections: 19,
        education: "Bachelor in Computer Science",
      }
    );
  });

  const [jobPreferences, setJobPreferences] = useState(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobPreferences"));
    return savedJobs || {
      title: "Frontend Web Developer",
      locationType: ["On-site", "Hybrid"],
      onSiteLocation: "Bhubaneswar, Odisha, India",
    };
  });

  const [isBioModalOpen, setBioModalOpen] = useState(false);
  const [isJobModalOpen, setJobModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("/user.json")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));

    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));

    fetch("/people.json")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.error("Error fetching people:", error));
  }, []);

  const handleSaveBio = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user, name: e.target.name.value, title: e.target.title.value, location: e.target.location.value, education: e.target.education.value,
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setBioModalOpen(false);
  };

  const handleSaveJobPreferences = (e) => {
    e.preventDefault();
    const updatedJobPrefs = {
      title: e.target.jobTitle.value,
      locationType: Array.from(e.target.locationType)
        .filter((input) => input.checked)
        .map((input) => input.value),
      onSiteLocation: e.target.onSiteLocation.value,
    };
    setJobPreferences(updatedJobPrefs);
    localStorage.setItem("jobPreferences", JSON.stringify(updatedJobPrefs));
    setJobModalOpen(false);
  };

  return (
    <div className="whole">
      <Navbar />
      <div className="user-profile-container">
        <div className="user-left-section">
          <div className="user-profile-block">
            <div className="profile-background">
              <i
                className="fas fa-pencil-alt profile-edit-icon"
                onClick={() => setBioModalOpen(true)}
              ></i>
              <div className="user-profile-picture-container">
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="user-profile-picture"
                />
              </div>
            </div>
            <div className="user-profile-details">
              <h2>{user.name}</h2>
              <p className="user-profile-title">{user.title}</p>
              <p className="user-profile-location">{user.location}</p>
              <p className="user-profile-connections">
                {user.connections} connections
              </p>
            </div>
            <div className="user-open-to-work">
              <i
                className="fas fa-pencil-alt job-edit-icon"
                onClick={() => setJobModalOpen(true)}
              ></i>
              <p>Open to work</p>
              <p>{jobPreferences.title}</p>
              <p>{jobPreferences.locationType.join(", ")}</p>
              <p>{jobPreferences.onSiteLocation}</p>
            </div>
          </div>
          <div className="user-posts-section">
            <h3>User's Posts</h3>
            <div className="user-posts-list">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div key={post.id} className="user-post-card">
                    <img src={post.image} alt="Post" className="user-post-image" />
                    <h4 className="user-post-headline">{post.headline}</h4>
                    <p className="user-post-content">{post.content}</p>
                  </div>
                ))
              ) : (
                <p>No posts available.</p>
              )}
            </div>
          </div>
        </div>
        <div className="user-right-section">
          <h3 className="people-know">People You May Know</h3>
          {people.map((person) => (
            <div key={person.id} className="user-people-card">
              <img
                src={person.profilePicture}
                alt={person.name}
                className="user-people-pic"
              />
              <div className="user-people-info">
                <h4>{person.name}</h4>
                <p>{person.profession}</p>
                <button className="user-connect-button">Connect</button>
              </div>
            </div>
          ))}
        </div>
        {isBioModalOpen && (
          <div className="user-overlay" onClick={() => setBioModalOpen(false)}>
            <div className="user-modal" onClick={(e) => e.stopPropagation()}>
              <h3>Edit Profile</h3>
              <form onSubmit={handleSaveBio}>
                <input type="text" name="name" defaultValue={user.name} required />
                <input type="text" name="title" defaultValue={user.title} required />
                <input type="text" name="location" defaultValue={user.location} required />
                <input type="text" name="education" defaultValue={user.education} required />
                <div className="user-modal-actions">
                  <button type="button" className="user-btn-cancel" onClick={() => setBioModalOpen(false)}>Cancel</button>
                  <button type="submit" className="user-btn-save">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {isJobModalOpen && (
          <div className="user-overlay" onClick={() => setJobModalOpen(false)}>
            <div className="user-modal" onClick={(e) => e.stopPropagation()}>
              <h3>Edit Job Preferences</h3>
              <form onSubmit={handleSaveJobPreferences}>
                <input type="text" name="jobTitle" defaultValue={jobPreferences.title} required />
                <label><input type="checkbox" name="locationType" value="On-site" defaultChecked={jobPreferences.locationType.includes("On-site")} /> On-site</label>
                <label><input type="checkbox" name="locationType" value="Hybrid" defaultChecked={jobPreferences.locationType.includes("Hybrid")} /> Hybrid</label>
                <input type="text" name="onSiteLocation" defaultValue={jobPreferences.onSiteLocation} required />
                <div className="user-modal-actions">
                  <button type="button" className="user-btn-cancel" onClick={() => setJobModalOpen(false)}>Cancel</button>
                  <button type="submit" className="user-btn-save">Save</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfilePage;
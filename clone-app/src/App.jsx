import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import JobPage from "./JobPage";
import JobDetails from "./JobDetails";
import MyNetwork from "./MyNetwork";
import Connections from "./Connections";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/my-network" element={<MyNetwork />} />
        <Route path="/connections" element={<Connections />} />
      </Routes>
    </Router>
  );
};
export default App;
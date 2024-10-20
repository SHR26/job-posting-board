// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from your API
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <Link to="/post-job" className="dashboard-button">Post a Job</Link>
      </div>
      

      <div className="job-listings">
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div className="job-item" key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>
            </div>
          ))
        ) : (
          <p>No job postings yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

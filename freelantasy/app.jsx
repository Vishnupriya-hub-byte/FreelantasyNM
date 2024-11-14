// App.js
import React, { useState } from 'react';
import Auth from './pages/Auth';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import FreelancerProfile from './pages/FreelancerProfile';
import Navbar from './components/Navbar';
import './App.css'; // Import CSS file for consistent styling

function App() {
  const [page, setPage] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setPage('jobListings');
  };

  const handleFreelancerSelect = (freelancer) => {
    setSelectedFreelancer(freelancer);
    setPage('freelancerProfile');
  };

  const handlePageChange = (direction) => {
    const pages = ['home', 'jobListings', 'freelancerProfile', 'auth'];
    let currentPageIndex = pages.indexOf(page);
    if (direction === 'next') currentPageIndex = (currentPageIndex + 1) % pages.length;
    else if (direction === 'prev') currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    setPage(pages[currentPageIndex]);
  };

  return (
    <div className="main-container">
      <Navbar />
      {page === 'home' && <Home onJobSelect={handleJobSelect} />}
      {page === 'jobListings' && selectedJob && (
        <JobListings job={selectedJob} onFreelancerSelect={handleFreelancerSelect} />
      )}
      {page === 'freelancerProfile' && selectedFreelancer && (
        <FreelancerProfile freelancer={selectedFreelancer} />
      )}
      {page === 'auth' && <Auth />}
      <div className="navigation" onClick={(e) => handlePageChange(e.clientX < window.innerWidth / 2 ? 'prev' : 'next')}>
        Tap left to go back, right to move forward.
      </div>
    </div>
  );
}

export default App;
// pages/Home.js
import React from 'react';
import '../App.css';

const jobCategories = [
  "Writing and Content Creation",
  "Graphic Design",
  "Web and Software Development",
  "Digital Marketing",
  "Video and Audio Production",
  "Administrative Support",
  "Finance and Accounting",
  "Consulting and Coaching"
];

function Home({ onJobSelect }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to FreeLantasy!</h1>
      <p>Where we make freelancing easy and rewarding for everyone...</p>
      <div className="job-categories">
        {jobCategories.map((job, index) => (
          <div
            key={index}
            className="job-category"
            onClick={() => onJobSelect(job)}
          >
            {job}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
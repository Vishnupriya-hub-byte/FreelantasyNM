// pages/JobListings.js
import React from 'react';

const freelancers = [
  { name: 'Freelancer A', skills: ['Skill 1', 'Skill 2'], status: 'available' },
  { name: 'Freelancer B', skills: ['Skill 3', 'Skill 4'], status: 'occupied' },
  // Add more freelancers
];

function JobListings({ job, onFreelancerSelect }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{job} Freelancers</h2>
      <div className="freelancers">
        {freelancers.map((freelancer, index) => (
          <div
            key={index}
            className="freelancer"
            onClick={() => onFreelancerSelect(freelancer)}
            style={{
              backgroundColor: '#fff',
              border: '1px solid darkgreen',
              padding: '10px',
              margin: '10px',
              cursor: 'pointer',
            }}
          >
            {freelancer.name} - {freelancer.status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListings;
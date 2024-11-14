// pages/FreelancerProfile.js
import React from 'react';

function FreelancerProfile({ freelancer }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{freelancer.name}'s Profile</h2>
      <p>Skills: {freelancer.skills.join(', ')}</p>
      <p>Status: {freelancer.status}</p>
      <button>Message</button>
      <button>Pay After Work</button>
      <p>Rate: 
        {[1, 2, 3, 4, 5].map((rate) => (
          <button key={rate}>{rate}</button>
        ))}
      </p>
    </div>
  );
}

export default FreelancerProfile;
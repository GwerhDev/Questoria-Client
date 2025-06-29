import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the admin and teacher dashboard.</p>
      <Link to="/dashboard/create">Create Adventure and Quests</Link>
    </div>
  );
};

export default Dashboard;

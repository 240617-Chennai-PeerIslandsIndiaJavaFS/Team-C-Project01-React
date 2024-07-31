import logo from './logo.svg';
// import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage'; 
import ProjectManagerHomePage from './components/ProjectManagerHomePage';
import AddTeamMembers from './components/AddTeamMembers';
import ResetPassword from './components/ResetPassword';
import ForgetPassword from './components/ForgetPassword';
import AssignTask from './components/AssignTask';
import TrackUserActivityPage from './components/TrackUserActivityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/project_manager_home_page" element={<ProjectManagerHomePage />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/add_team_members" element={<AddTeamMembers />} />
        <Route path="/assign_task" element={<AssignTask />} />
        <Route path="/track-user-activity" element={<TrackUserActivityPage />} />
      </Routes>
    </Router>
  );
}

export default App;

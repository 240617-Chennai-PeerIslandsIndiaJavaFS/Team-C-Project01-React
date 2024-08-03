import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import ProjectManagerHomePage from './components/ProjectManagerHomePage';
import AddTeamMembers from './components/AddTeamMembers';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgetPassword';
import AssignTask from './components/AssignTask';
import TrackUserActivityPage from './components/TrackUserActivityPage';
import AdminPage from './components/AdminPage';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeactivateUser from './components/DeactivateUser';
import CreateClient from './components/CreateClient';
import CreateProject from './components/CreateProject';
import AssignAccessLevels from './components/AssignAccessLevels';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/project-manager-home" element={<ProjectManagerHomePage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/add-team-members" element={<AddTeamMembers />} />
        <Route path="/assign-task" element={<AssignTask />} />
        <Route path="/track-user-activity" element={<TrackUserActivityPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="home" element={<Home />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="update-user" element={<UpdateUser />} />
          <Route path="deactivate-user" element={<DeactivateUser />} />
          <Route path="create-client" element={<CreateClient />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="assign-access-levels" element={<AssignAccessLevels />} />
          <Route path="track-user-activity" element={<TrackUserActivityPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

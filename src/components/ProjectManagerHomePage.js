import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ProjectManagerHomePage.css';

const ProjectManagerHomePage = () => {
    const location = useLocation();
    const { username } = location.state || {};
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            navigate('/login');
        }
    };

    return (
        <div className="pm-home-container">
            <h1 className="pm-home-title">Welcome to Project Manager, {username}</h1>
            <ul className="pm-menu">
                <li className="pm-menu-item">
                    <button 
                        className="pm-menu-button" 
                        onClick={() => navigate('/reset_password', { state: { username } })}>
                        Reset Password
                    </button>
                </li>
                <li className="pm-menu-item">
                    <button 
                        className="pm-menu-button" 
                        onClick={() => navigate('/add_team_members', { state: { username } })}>
                        Add Team Members to Projects
                    </button>
                </li>
                <li className="pm-menu-item">
                    <button 
                        className="pm-menu-button" 
                        onClick={() => navigate('/assign_task', { state: { username } })}>
                        Assign Tasks to Team Members
                    </button>
                </li>
                <li className="pm-menu-item">
                    <button 
                        className="pm-menu-button" 
                        onClick={() => navigate('/track-user-activity')}>
                        Track User Activity
                    </button>
                </li>
                <li className="pm-menu-item">
                    <button 
                        id="logoutButton" 
                        className="pm-menu-button" 
                        onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ProjectManagerHomePage;

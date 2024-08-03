import React, { useState } from 'react';
import './App.css'; 

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Created:', { name, email, password, role });
        alert('Project created successfully!');
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
    };

    return (
        <div className="admin-form-container">
            <h2><b>Create User</b></h2>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="user-name" className="admin-label">Name:</label>
                <input
                    type="text"
                    id="user-name"
                    name="user-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="user-email" className="admin-label">Email:</label>
                <input
                    type="email"
                    id="user-email"
                    name="user-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="user-password" className="admin-label">Password:</label>
                <input
                    type="password"
                    id="user-password"
                    name="user-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="user-role" className="admin-label">Role:</label>
                <select
                    id="user-role"
                    name="user-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="admin-select"
                    required
                >
                    <option value="admin">Admin</option>
                    <option value="project_manager">Project Manager</option>
                    <option value="team_member">Team Member</option>
                </select>
                <button type="submit" className="admin-button">Submit</button>
            </form>
        </div>
    );
};

export default CreateUser;

import React, { useState } from 'react';
import '../styles/CreateUser.css'; 

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Created:', { name, email, password, role });
        alert('User created successfully!');
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
    };

    return (
        <div id="createUserContainer">
            <h2 id="createUserTitle"><b>Create User</b></h2>
            <form id="createUserForm" onSubmit={handleSubmit}> 
                <label htmlFor="createUserName" className="createUserLabel">Name:</label>
                <input
                    type="text"
                    id="createUserName"
                    name="user-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="createUserInput"
                    required
                />
                <label htmlFor="createUserEmail" className="createUserLabel">Email:</label>
                <input
                    type="email"
                    id="createUserEmail"
                    name="user-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="createUserInput"
                    required
                />
                <label htmlFor="createUserPassword" className="createUserLabel">Password:</label>
                <input
                    type="password"
                    id="createUserPassword"
                    name="user-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="createUserInput"
                    required
                />
                <label htmlFor="createUserRole" className="createUserLabel">Role:</label>
                <select
                    id="createUserRole"
                    name="user-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="createUserSelect"
                    required
                >
                    <option value="" disabled>Choose Role</option>
                    <option value="admin">Admin</option>
                    <option value="project_manager">Project Manager</option>
                    <option value="team_member">Team Member</option>
                </select>
                <button type="submit" className="createUserButton">Submit</button>
            </form>
        </div>
    );
};

export default CreateUser;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignAccessLevels = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [existingRole, setExistingRole] = useState('');
    const [newRole, setNewRole] = useState('');
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4001/getallusers');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userToUpdate = users.find(user => user.userid === parseInt(selectedUser));
        try {
            const response = await axios.post('http://localhost:4001/Access_level', {
                userId: selectedUser,
                newRole: newRole,
            });
            console.log('Access Levels Assigned:', { id: selectedUser, name: userToUpdate.name, existingRole, newRole });
            console.log('API Response:', response.data);
            alert('Access level assigned successfully!');
            setSelectedUser('');
            setExistingRole('');
            setNewRole('');
        } catch (error) {
            console.error('Error assigning access levels:', error);
        }
    };

    return (
        <div className="admin-form-container ">
            <h2><b>Assign Access Levels</b></h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="access-user-id" className="admin-label">Select User:</label>
                <select
                    id="access-user-id"
                    name="access-user-id"
                    value={selectedUser}
                    onChange={(e) => {
                        setSelectedUser(e.target.value);
                        const user = users.find(user => user.userid === parseInt(e.target.value));
                        setExistingRole(user ? user.role : '');
                    }}
                    className="admin-select"
                    required
                >
                    <option value="" disabled>Select User</option>
                    {users.map(user => (
                        <option key={user.userid} value={user.userid}>{user.name}</option>
                    ))}
                </select>
                <label htmlFor="existing-role" className="admin-label">Existing Role:</label>
                <input
                    type="text"
                    id="existing-role"
                    name="existing-role"
                    value={existingRole}
                    onChange={(e) => setExistingRole(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="new-role" className="admin-label">New Role:</label>
                <select
                    id="new-role"
                    name="new-role"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="admin-select"
                    required
                >
                    <option value="admin">Admin</option>
                    <option value="project_manager">Project Manager</option>
                    <option value="team_member">Team Member</option>
                </select>
                <button type="submit" className="admin-button" >Assign Role</button>
            </form>
        </div>
    );
};

export default AssignAccessLevels;

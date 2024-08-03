import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

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
        try {
            const response = await axios.post('http://localhost:4001/update_user/submit', {
                userId: selectedUser,
                name: newName,
                email: newEmail,
                password: newPassword,
            });
    
            console.log('User Updated:', { selectedUser, newName, newEmail, newPassword });
            console.log('API Response:', response.data);
            alert('User updated successfully!');
            setSelectedUser('');
            setNewName('');
            setNewEmail('');
            setNewPassword('');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="admin-form-container ">
            <h2><b>Update User</b></h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="update-user-select" className="admin-label">Select User:</label>
                <select
                    id="update-user-select"
                    name="update-user-select"
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className= "admin-select"
                    required
                >
                    <option value="" disabled>Select User</option>
                    {users.map(user => (
                        <option key={user.userid} value={user.userid}>{user.name}</option>
                    ))}
                </select>
                <label htmlFor="update-user-name" className="admin-label">New Name:</label>
                <input
                    type="text"
                    id="update-user-name"
                    name="update-user-name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="update-user-email" className="admin-label">New Email:</label>
                <input
                    type="email"
                    id="update-user-email"
                    name="update-user-email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="update-user-password" className="admin-label">New Password:</label>
                <input
                    type="password"
                    id="update-user-password"
                    name="update-user-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="admin-input"
                    required
                />
                <button type="submit" className="admin-button">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeactivateUser = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');

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
        const userToDeactivate = users.find(user => user.userid === parseInt(selectedUser));
        try {
            const response = await axios.delete('http://localhost:4001/deactivate_user', {
                userId: selectedUser,
            });

            console.log('User Deactivated:', { id: selectedUser, name: userToDeactivate.name });
            console.log('API Response:', response.data);
            alert('User deactivated successfully!');
            setSelectedUser('');
        } catch (error) {
            console.error('Error deactivating user:', error);
        }
    };

    return (
        <div className="admin-form-container ">
            <h2><b>Deactivate User</b></h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="deactivate-user-select" className="admin-label">Select User:</label>
                <select
                    id="deactivate-user-select"
                    name="deactivate-user-select"
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className="admin-select"
                    required
                >
                    <option value="" disabled>Select User</option>
                    {users.map(user => (
                        <option key={user.userid} value={user.userid}>{user.name}</option>
                    ))}
                </select>
                <button type="submit" className="admin-button">Deactivate User</button>
            </form>
        </div>
    );
};

export default DeactivateUser;




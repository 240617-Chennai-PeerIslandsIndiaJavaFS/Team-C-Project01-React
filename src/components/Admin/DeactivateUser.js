import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Admin/DeactivateUser.css'; 

const DeactivateUser = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8081/users/inactive');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedUser) {
            alert('Please select a user to deactivate.');
            return;
        }
        try {
            const response = await axios.delete(`http://localhost:8081/users/delete/${selectedUser}`);
            
            console.log('User Deactivated:', { userid: selectedUser });
            console.log('API Response:', response.data);
            alert('User deactivated successfully!');
            setUsers(users.filter(user => user.userid !== selectedUser)); // Update local state
            setSelectedUser(null); 
        } catch (error) {
            console.error('Error deactivating user:', error);
        }
    };

    return (
        <div className="deactivate-user-container">
            <h2 className="deactivate-user-title"><b>Deactivate User</b></h2>
            <form onSubmit={handleSubmit} className="deactivate-user-form">
                <label htmlFor="user-select" className="deactivate-user-label">Select User:</label>
                <select
                    id="user-select"
                    name="user-select"
                    value={selectedUser || ''}
                    onChange={(e) => setSelectedUser(parseInt(e.target.value, 10))} 
                    className="deactivate-user-select"
                    required
                >
                    <option value="" disabled>Select User</option>
                    {users.map(user => (
                        <option key={user.userid} value={user.userid}>{user.username}</option>
                    ))}
                </select>
                <button type="submit" className="deactivate-user-button">Deactivate User</button>
            </form>
        </div>
    );
};

export default DeactivateUser;

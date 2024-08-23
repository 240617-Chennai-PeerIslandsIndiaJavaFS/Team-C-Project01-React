import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Admin/Home.css';

const Home = () => {
    const location = useLocation();
    const { username } = location.state || {};
    const [userDetails, setUserDetails] = useState(null);
    const [data, setData] = useState(null);
    const [dataType, setDataType] = useState('actions');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8081/users/by-username?username=${username}`);
                const data = await response.json();
                console.log('User Details:', data);
                setUserDetails(data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        if (username) {
            fetchUserDetails();
        }
    }, [username]);

    const fetchData = async (apiUrl, type) => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(`${type} data:`, data);
            setData(data);
            setDataType(type);

            if (type === 'users') {
                setFilteredUsers(data);
            } else if (type === 'clients') {
                setFilteredClients(data);
            } else if (type === 'projects') {
                setFilteredProjects(data);
            }
        } catch (error) {
            console.error(`Error fetching ${type}:`, error);
        }
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (dataType === 'users') {
            setFilteredUsers(
                data.filter(user =>
                    user.username.toLowerCase().includes(query)
                )
            );
        } else if (dataType === 'clients') {
            setFilteredClients(
                data.filter(client =>
                    client.clientName.toLowerCase().includes(query)
                )
            );
        } else if (dataType === 'projects') {
            setFilteredProjects(
                data.filter(project =>
                    project.projectName.toLowerCase().includes(query)
                )
            );
        }
    };

    const renderData = () => {
        if (dataType === 'actions') {
            return (
                <div className="default-text">
                    <p>
                    As an admin user, you have comprehensive capabilities to manage user accounts, including creating, updating, deactivating, and activating accounts for both project managers and team members. You also have the ability to assign and adjust access levels to ensure appropriate permissions for various roles. Additionally, you can reset your password whenever needed, providing you with the flexibility to maintain account security.
                    </p>
                </div>
            );
        }

        if (!data) return null;

        if (dataType === 'users') {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Search by username"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="search-box"
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user) => (
                                <tr key={user.userid}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            );
        } else if (dataType === 'clients') {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Search by client name"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="search-box"
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Client Email</th>
                                <th>Client Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map((client) => (
                                <tr key={client.clientId}>
                                    <td>{client.clientName}</td>
                                    <td>{client.clientEmail}</td>
                                    <td>{client.clientDescription}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            );
        } else if (dataType === 'projects') {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Search by project name"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="search-box"
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Project Details</th>
                                <th>Project Manager</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProjects.map((project) => (
                                <tr key={project.projectId}>
                                    <td>{project.projectName}</td>
                                    <td>{project.projectDetails}</td>
                                    <td>{project.projectManager?.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            );
        }
    };    

    return (
        <div className="home-container">
            <h2>Welcome Admin</h2>
            {userDetails ? (
                <p>Welcome, {userDetails.username}</p>
            ) : (
                <p>Loading user details...</p>
            )}
            <div className="actions-container">
                <button onClick={() => setDataType('actions')}>Actions</button>
                <button onClick={() => fetchData('http://localhost:8081/users/all', 'users')}>View all users</button>
                <button onClick={() => fetchData('http://localhost:8081/clients/all', 'clients')}>View all clients</button>
                <button onClick={() => fetchData('http://localhost:8081/projects', 'projects')}>View all projects</button>
            </div>
            <div className="data-container">
                <h3><u>{`Viewing ${dataType}`}</u></h3>
                {renderData()}
            </div>
        </div>
    );
};

export default Home;

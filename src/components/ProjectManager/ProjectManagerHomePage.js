import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/ProjectManager/ProjectManagerHomePage.css';

const ProjectManagerHomePage = () => {
    const location = useLocation();
    const { username } = location.state || {};
    const [userDetails, setUserDetails] = useState(null);
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState('actions');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTeamMembers, setFilteredTeamMembers] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filteredClients, setFilteredClients] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8081/users/by-username?username=${username}`);
                const data = await response.json();
                console.log('Project Manager Details:', data);
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

            if (type === 'team-members') {
                setFilteredTeamMembers(data);
            } else if (type === 'tasks') {
                setFilteredTasks(data);
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
        if (dataType === 'team-members') {
            setFilteredTeamMembers(
                data.filter(member =>
                    member.username.toLowerCase().includes(query)
                )
            );
        } else if (dataType === 'tasks') {
            setFilteredTasks(
                data.filter(task =>
                    task.taskName.toLowerCase().includes(query)
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
                <div className="pm-actions-text">
                    <p>
                        As a project manager, you will be able to securely log in, reset passwords, manage client information including project details, completed tasks, and effort invested. You will have the authority to add team members to projects, assign tasks using historical data for effort prediction, and ensure the right resources are allocated for project success.
                    </p>
                </div>
            );
        }

        if (!data) return null;

        if (dataType === 'team-members') {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="pm-search-box"
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTeamMembers.length > 0 ? (
                                filteredTeamMembers.map((member) => (
                                    <tr key={member.userid}>
                                        <td>{member.username}</td>
                                        <td>{member.email}</td>
                                        <td>{member.role}</td>
                                        <td>{member.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No team members found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            );
        } else if (dataType === 'tasks') {
            return (
                <>
                    <input
                        type="text"
                        placeholder="Search by task name"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="pm-search-box"
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Assigned To</th>
                                <th>Project Name</th>
                                <th>Task Details</th>
                                <th>Milestone</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.length > 0 ? (
                                filteredTasks.map((task) => (
                                    <tr key={task.taskId}>
                                        <td>{task.taskName}</td>
                                        <td>{task.assignedTo.username}</td>
                                        <td>{task.project.projectName}</td>
                                        <td>{task.taskDetails}</td>
                                        <td>{task.milestone.milestoneName}</td>
                                        <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6">No tasks found</td>
                                </tr>
                            )}
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
                        className="pm-search-box"
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Client Email</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.length > 0 ? (
                                filteredClients.map((client) => (
                                    <tr key={client.clientId}>
                                        <td>{client.clientName}</td>
                                        <td>{client.clientEmail}</td>
                                        <td>{client.clientDescription}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No clients found</td>
                                </tr>
                            )}
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
                        className="pm-search-box"
                    />
                    <table>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Project Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project) => (
                                    <tr key={project.projectId}>
                                        <td>{project.projectName}</td>
                                        <td>{project.projectDetails}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">No projects found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            );
        }
    };

    return (
        <div className="pm-home-container">
            <h2>Welcome Project Manager</h2>
            {userDetails ? (
                <p>Welcome, {userDetails.username}</p>
            ) : (
                <p>Loading user details...</p>
            )}
            <div className="pm-actions-container">
                <button onClick={() => setDataType('actions')}>Actions</button>
                <button onClick={() => fetchData(`http://localhost:8081/projects/by-username?username=${username}`, 'projects')}>View all projects</button>
                <button onClick={() => fetchData(`http://localhost:8081/users/clients-by-manager?managerName=${username}`, 'clients')}>View all clients</button>
                <button onClick={() => fetchData(`http://localhost:8081/users/tasks-by-manager?managerName=${username}`, 'tasks')}>View all tasks</button>
            </div>
            <div className="pm-data-container">
                <h3><u>{`Viewing ${dataType}`}</u></h3>
                {renderData()}
            </div>
        </div>
    );
};

export default ProjectManagerHomePage;

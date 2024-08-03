import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateProject = () => {
    const [projectName, setProjectName] = useState('');
    const [clientName, setClientName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:4001/getallClients');
                setClients(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4001/ProjectCreated', {
                projectName,
                clientName,
                projectDescription
            });

            console.log('Project Created:', { projectName, clientName, projectDescription });
            console.log('API Response:', response.data);
            alert('Project created successfully!');
            setProjectName('');
            setClientName('');
            setProjectDescription('');
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <div className="admin-form-container ">
            <h2><b>Create Project</b></h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="client-name" className="admin-label">Select Client:</label>
                <select
                    id="client-name"
                    name="client-name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="admin-select"
                    required
                >
                    <option value="" disabled>Select Client</option>
                    {clients.map(client => (
                        <option key={client.clientId} value={client.clientName}>{client.clientName}</option>
                    ))}
                </select>
                <label htmlFor="project-name" className="admin-label">Project Name:</label>
                <input
                    type="text"
                    id="project-name"
                    name="project-name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="project-description" className="admin-label">Project Description:</label>
                <input
                    type="text"
                    id="project-description"
                    name="project-description"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="admin-input"
                    required
                />
                <button type="submit" className="admin-button">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;

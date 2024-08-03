import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CreateProject.css'; 

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
        <div className="create-project-container">
            <h2 className="create-project-title"><b>Create Project</b></h2>
            <form onSubmit={handleSubmit} className="create-project-form">
                <label htmlFor="client-select" className="create-project-label">Select Client:</label>
                <select
                    id="client-select"
                    name="client-select"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="create-project-select"
                    required
                >
                    <option value="" disabled>Select Client</option>
                    {clients.map(client => (
                        <option key={client.clientId} value={client.clientName}>{client.clientName}</option>
                    ))}
                </select>
                <label htmlFor="project-name-field" className="create-project-label">Project Name:</label>
                <input
                    type="text"
                    id="project-name-field"
                    name="project-name-field"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="create-project-input"
                    required
                />
                <label htmlFor="project-description-field" className="create-project-label">Project Description:</label>
                <input
                    type="text"
                    id="project-description-field"
                    name="project-description-field"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    className="create-project-input"
                    required
                />
                <button type="submit" className="create-project-button">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;

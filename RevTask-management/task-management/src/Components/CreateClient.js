import React, { useState } from 'react';

const CreateClient = () => {
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientDescription, setClientDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Client Created:', { clientName, clientEmail, clientDescription });
        alert('Project created successfully!');
        setClientName('');
        setClientEmail('');
        setClientDescription('');
    };

    return (
        <div className="admin-form-container ">
            <h2><b>Create Client</b></h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="client-name" className="admin-label">Client Name:</label>
                <input
                    type="text"
                    id="client-name"
                    name="client-name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="client-email" className="admin-label">Client Email:</label>
                <input
                    type="email"
                    id="client-email"
                    name="client-email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="admin-input"
                    required
                />
                <label htmlFor="client-description" className="admin-label">Client Description:</label>
                <input
                    type="text"
                    id="client-description"
                    name="client-description"
                    value={clientDescription}
                    onChange={(e) => setClientDescription(e.target.value)}
                    className="admin-input"
                    required
                />
                <button type="submit" className="admin-button">Create Client</button>
            </form>
        </div>
    );
};

export default CreateClient;

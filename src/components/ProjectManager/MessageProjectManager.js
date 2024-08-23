import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/ProjectManager/MessagePM.css';

const MessageProjectManager = () => {
    const location = useLocation();
    const { username } = location.state || {};
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (username) {
            fetch(`http://localhost:8081/api/messages/getMessagesByReceiverName?receiverName=${username}`)
                .then(response => response.json())
                .then(data => setMessages(data))
                .catch(error => console.error('Error fetching messages:', error));
        }
    }, [username]);

    const handleDelete = (messageId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this message?");
        if (confirmDelete) {
            fetch(`http://localhost:8081/api/messages/delete/${messageId}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    setMessages(prevMessages => prevMessages.filter(message => message.messageId !== messageId));
                } else {
                    console.error('Error deleting the message');
                }
            })
            .catch(error => console.error('Error deleting the message:', error));
        }
    };

    return (
        <div id="message-page">
            <div id="message-container">
                <div id="message-title">
                    Messages
                </div>
                <ul id="message-list">
                    {messages.map((message) => (
                        <li key={message.messageId} className="message-item">
                            <div className="message-item-header">
                                <strong>From: </strong> {message.sender.username}
                                <button className="message-delete-button" onClick={() => handleDelete(message.messageId)}>X</button>
                            </div>
                            <div className="message-body">
                                <div className="message-subject"><strong>Subject: </strong>{message.subject}</div>
                                <div><strong>Context: </strong>{message.context}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MessageProjectManager;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../styles/AssignTask.css';

const AssignTask = () => {
    const location = useLocation();
    const { username } = location.state || {};

    const [projects, setProjects] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);
    const [selectedProject, setSelectedProject] = useState('');
    const [formData, setFormData] = useState({
        project: '',
        teamMember: '',
        taskName: '',
        taskDescription: '',
        taskStatus: 'To Do',
        startDate: '',
        dueDate: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:4001/get_projectsbyname?name=${username}`)
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the projects!', error);
            });
    }, [username]);

    const handleProjectChange = (e) => {
        const project = e.target.value;
        setSelectedProject(project);
        setFormData({ ...formData, project });
        
        axios.get(`http://localhost:4001/assigntask_get%20temmembers/project_name?project_name=${project}`)
            .then(response => {
                setTeamMembers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the team members!', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4001/assign_task/submit', formData)
            .then(response => {
                console.log('Response:', response.data);
                console.log('Submitted Data:', formData);
                alert('Task assigned successfully!');
            })
            .catch(error => {
                console.error('There was an error assigning the task!', error);
            });
    };

    return (
        <div id="assignTaskContainer">
            <div id="assignTaskContent">
                <h1 id="assignTaskTitle">Assign Task to Team Member</h1>
                <form id="assignTaskForm" onSubmit={handleSubmit}>
                    <div id="formGroup">
                        <label htmlFor="project" id="formLabel">Select Project</label>
                        <select id="project" name="project" value={formData.project} onChange={handleProjectChange} required>
                            <option value="">Select a project</option>
                            {projects.map(project => (
                                <option key={project.project_id} value={project.project_name}>
                                    {project.project_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="formGroup">
                        <label htmlFor="teamMember" id="formLabel">Select Team Member</label>
                        <select id="teamMember" name="teamMember" value={formData.teamMember} onChange={handleInputChange} required>
                            <option value="">Select a team member</option>
                            {teamMembers.map(member => (
                                <option key={member.userid} value={member.name}>
                                    {member.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div id="formGroup">
                        <label htmlFor="taskName" id="formLabel">Task Name</label>
                        <input type="text" id="taskName" name="taskName" value={formData.taskName} onChange={handleInputChange} required />
                    </div>
                    <div id="formGroup">
                        <label htmlFor="taskDescription" id="formLabel">Task Description</label>
                        <textarea id="taskDescription" name="taskDescription" value={formData.taskDescription} onChange={handleInputChange} required></textarea>
                    </div>
                    <div id="formGroup">
                        <label htmlFor="taskStatus" id="formLabel">Task Status</label>
                        <select id="taskStatus" name="taskStatus" value={formData.taskStatus} onChange={handleInputChange} required>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="In Review">In Review</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div id="formGroup">
                        <label htmlFor="startDate" id="formLabel">Start Date</label>
                        <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} required />
                    </div>
                    <div id="formGroup">
                        <label htmlFor="dueDate" id="formLabel">Due Date</label>
                        <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleInputChange} required />
                    </div>
                    <button type="submit" id="assignTaskButton">Assign Task</button>
                </form>
            </div>
        </div>
    );
};

export default AssignTask;

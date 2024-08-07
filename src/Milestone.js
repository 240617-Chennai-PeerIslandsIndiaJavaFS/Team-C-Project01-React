import React, { useState, useEffect } from 'react';

const Milestone = ({ milestone, tasks, onMilestoneClick }) => {
  const [showTasks, setShowTasks] = useState(false);
  const [taskDetails, setTaskDetails] = useState({});
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const handleMilestoneClick = () => {
    onMilestoneClick(milestone);
    setShowTasks(true);
  };

  const handleTaskClick = (task) => {
    fetch(`http://localhost:4001/get_tasks_byusername?name=Grace Harris`)
      .then((response) => response.json())
      .then((data) => {
        const taskDetail = data.find((t) => t.task_id === task.task_id);
        setTaskDetails(taskDetail);
        setShowTaskDetails(true);
      });
  };

  return (
    <div className="milestone" onClick={handleMilestoneClick}>
      <h2>{milestone.milestone_name}</h2>
      <p>{milestone.milestone_description}</p>
      {showTasks && (
        <div className="task-list">
          <h3>Tasks</h3>
          <ul>
            {tasks.map((task) => (
              <li key={task.task_id} onClick={() => handleTaskClick(task)}>
                {task.task_name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {showTaskDetails && (
        <div className="task-details">
          <h3>Task Details</h3>
          <p>
            <strong>Task Name:</strong> {taskDetails.task_name}
          </p>
          <p>
            <strong>Task Description:</strong> {taskDetails.task_description}
          </p>
          <p>
            <strong>Task Status:</strong> {taskDetails.task_status}
          </p>
          <p>
            <strong>Start Date:</strong> {taskDetails.start_date}
          </p>
          <p>
            <strong>Due Date:</strong> {taskDetails.due_date}
          </p>
        </div>
      )}
    </div>
  );
};

export default Milestone;
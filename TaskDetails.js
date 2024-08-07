
import React from 'react';

const TaskDetails = ({ task }) => {
  if (!task) return null;

  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <p><strong>Name:</strong> {task.task_name}</p>
      <p><strong>Description:</strong> {task.task_description}</p>
      <p><strong>Status:</strong> {task.task_status}</p>
      <p><strong>Start Date:</strong> {task.start_date}</p>
      <p><strong>Due Date:</strong> {task.due_date}</p>
    </div>
  );
};

export default TaskDetails;

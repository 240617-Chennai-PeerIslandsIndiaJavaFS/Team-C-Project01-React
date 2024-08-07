
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import axios from 'axios';

const ItemType = 'TASK';

const Task = ({ task, onTaskClick }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { task },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    drop: async (item) => {
      if (item.task.task_id !== task.task_id) {
        try {
          await axios.put('http://localhost:4001/update_task/submit', {
            ...item.task,
            milestone_id: task.milestone_id,
          });
        } catch (error) {
          console.error('Error updating task:', error);
        }
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="task"
      onClick={() => onTaskClick(task)} 
    >
      <h3>{task.task_name}</h3>
      <p>{task.task_description}</p>
    </div>
  );
};

export default Task;

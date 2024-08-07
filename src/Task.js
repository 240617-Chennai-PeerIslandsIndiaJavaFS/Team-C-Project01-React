import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const ItemType = 'TASK';

const Task = ({ task, onTaskClick }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="task"
      onClick={() => onTaskClick(task)}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <h3>{task.task_name}</h3>
      <p>{task.task_description}</p>
    </div>
  );
};

const Milestone = ({ milestone, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemType,
    drop: async (item, monitor) => {
      const updatedTask = { ...item.task, milestone_id: milestone.milestone_id };
      try {
        const response = await axios.put('http://localhost:4001/update_task/submit', updatedTask);
        console.log(response.data);
        console.log('Response body:', response.data);
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className="milestone"
      style={{
        backgroundColor: isOver ? 'lightgreen' : '',
      }}
    >
      <h2>{milestone.milestone_name}</h2>
      <p>{milestone.milestone_description}</p>
    </div>
  );
};

const MilestonePage = () => {
  const [milestones, setMilestones] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await axios.get('http://localhost:4001/getall_milestones');
        setMilestones(response.data);
      } catch (error) {
        console.error('Error fetching milestones:', error);
      }
    };

    fetchMilestones();
  }, []);

  useEffect(() => {
    if (selectedMilestone) {
      const fetchTasks = async () => {
        try {
          const response = await axios.get('http://localhost:4001/get_tasks_byusername?name=Grace Harris');
          const tasksData = response.data;
          const filteredTasks = tasksData.filter((task) => task.milestone_id === selectedMilestone.milestone_id);
          setTasks(filteredTasks);
        } catch (error) {
          console.error('Error fetching tasks:', error);
          setTasks([]);
        }
      };

      fetchTasks();
    }
  }, [selectedMilestone]);

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="milestone-page">
        <h1>Milestone and Task Management</h1>
        <div className="milestone-list">
          {milestones.map((milestone) => (
            <Milestone
              key={milestone.milestone_id}
              milestone={milestone}
              onDrop={(item) => console.log(item)}
            />
          ))}
          {tasks.map((task) => (
            <Task key={task.task_id} task={task} onTaskClick={() => console.log(task)} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default MilestonePage;
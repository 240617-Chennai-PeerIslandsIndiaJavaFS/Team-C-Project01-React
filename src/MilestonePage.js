import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Milestone from './Milestone';
import Task from './Task';

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
              tasks={tasks.filter((task) => task.milestone_id === milestone.milestone_id)}
              onMilestoneClick={handleMilestoneClick}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default MilestonePage;
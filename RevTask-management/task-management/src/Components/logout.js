import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Logout = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleLogout = () => {
    setIsClicked(true);
    alert('You have been logged out');
    setTimeout(() => {
      navigate('/');
    }, 1000); 
  };

  return (
    <button 
      className={`logout-button ${isClicked ? 'clicked' : ''}`} 
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;


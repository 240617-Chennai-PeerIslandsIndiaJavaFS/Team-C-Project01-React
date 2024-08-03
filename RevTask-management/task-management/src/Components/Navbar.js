// import React from 'react';
// import { Link } from 'react-router-dom';
// import './App.css'; 


// const Navbar = () => {
   
//     return (
//         <div className="navbar">
//             <Link className="nav-item" to="/">Home</Link>
//             <Link className="nav-item" to="/create-user">Create User</Link>
//             <Link className="nav-item" to="/update-user">Update User</Link>
//             <Link className="nav-item" to="/deactivate-user">Deactivate User</Link>
//             <Link className="nav-item" to="/create-client">Create Client</Link>
//             <Link className="nav-item" to="/create-project">Create Project</Link>
//             <Link className="nav-item" to="/assign-access-levels">Assign Access Levels</Link>
//             <Link className="nav-item" to="/track-user-activity">Track User Activity</Link>
//             <Link className="nav-item" to="/logout">Logout</Link>
//         </div>
//     );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const handleLogout = () => {
        setIsClicked(true);
        alert('You have been logged out');
        navigate('/');
    };

    return (
        <div className="admin-navbar">
            <Link className="admin-nav-item" to="/">Home</Link>
            <Link className="admin-nav-item" to="/create-user">Create User</Link>
            <Link className="admin-nav-item" to="/update-user">Update User</Link>
            <Link className="admin-nav-item" to="/deactivate-user">Deactivate User</Link>
            <Link className="admin-nav-item" to="/create-client">Create Client</Link>
            <Link className="admin-nav-item" to="/create-project">Create Project</Link>
            <Link className="admin-nav-item" to="/assign-access-levels">Assign Access Levels</Link>
            <Link className="admin-nav-item" to="/track-user-activity">Track User Activity</Link>
            <button 
                className={`nav-item logout-button ${isClicked ? 'clicked' : ''}`} 
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
};

export default Navbar;

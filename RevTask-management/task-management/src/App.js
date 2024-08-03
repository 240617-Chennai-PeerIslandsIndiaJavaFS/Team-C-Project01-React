// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CreateUser from './Components/CreateUser';
// import UpdateUser from './Components/UpdateUser';
// import DeactivateUser from './Components/DeactivateUser';
// import CreateProject from './Components/CreateProject';
// import CreateClient from './Components/CreateClient';
// import AssignAccessLevels from './Components/AssignAccessLevels';
// import TrackUserActivity from './Components/TrackUserActivity';
// import Navbar from './Components/Navbar'; 
// import './Components/App.css'; 

// const App = () => {
//     return (
//         <Router>
//             <Navbar /> 
            
//             <div id="content">
//                 <Routes>
//                     <Route path="/" element={
//                         <div className="form-container">
//                             <h2>Welcome to Task Management</h2>
//                         </div>
//                     } />
//                     <Route path="/create-user" element={<CreateUser />} />
//                     <Route path="/update-user" element={<UpdateUser />} />
//                     <Route path="/deactivate-user" element={<DeactivateUser />} />
//                     <Route path="/create-project" element={<CreateProject />} />
//                     <Route path="/create-client" element={<CreateClient />} />
//                     <Route path="/assign-access-levels" element={<AssignAccessLevels />} />
//                     <Route path="/track-user-activity" element={<TrackUserActivity />} />
//                     <Route path="/logout" element={
//                         <div className="form-container">
//                             <h2>You have been logged out</h2>
//                         </div>
//                     } />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CreateUser from './Components/CreateUser';
// import UpdateUser from './Components/UpdateUser';
// import DeactivateUser from './Components/DeactivateUser';
// import CreateProject from './Components/CreateProject';
// import CreateClient from './Components/CreateClient';
// import AssignAccessLevels from './Components/AssignAccessLevels';
// import TrackUserActivity from './Components/TrackUserActivity';
// import Navbar from './Components/Navbar'; 
// import './Components/App.css'; 

// const App = () => {
//     return (
//         <Router>
//             <Navbar /> 
            
//             <div id="content">
//                 <Routes>
//                     <Route path="/" element={
//                         <div className="welcome-container">
//                             <h2>Welcome to Task Management</h2>
//                         </div>
//                     } />
//                     <Route path="/create-user" element={<CreateUser />} />
//                     <Route path="/update-user" element={<UpdateUser />} />
//                     <Route path="/deactivate-user" element={<DeactivateUser />} />
//                     <Route path="/create-project" element={<CreateProject />} />
//                     <Route path="/create-client" element={<CreateClient />} />
//                     <Route path="/assign-access-levels" element={<AssignAccessLevels />} />
//                     <Route path="/track-user-activity" element={<TrackUserActivity />} />
//                     <Route path="/logout" element={
//                         <div className="welcome-container">
//                             <h2>You have been logged out</h2>
//                         </div>
//                     } />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CreateUser from './Components/CreateUser';
// import UpdateUser from './Components/UpdateUser';
// import DeactivateUser from './Components/DeactivateUser';
// import CreateProject from './Components/CreateProject';
// import CreateClient from './Components/CreateClient';
// import AssignAccessLevels from './Components/AssignAccessLevels';
// import TrackUserActivity from './Components/TrackUserActivity';
// import Navbar from './Components/Navbar'; 
// import './Components/App.css'; 

// const App = () => {
//     return (
//         <Router>
//             <Navbar /> 
            
//             <div id="content">
//                 <Routes>
//                     <Route path="/" element={
//                         <div className="welcome-container">
//                             <h2>Welcome to Task Management</h2>
//                         </div>
//                     } />
//                     <Route path="/create-user" element={<CreateUser />} />
//                     <Route path="/update-user" element={<UpdateUser />} />
//                     <Route path="/deactivate-user" element={<DeactivateUser />} />
//                     <Route path="/create-project" element={<CreateProject />} />
//                     <Route path="/create-client" element={<CreateClient />} />
//                     <Route path="/assign-access-levels" element={<AssignAccessLevels />} />
//                     <Route path="/track-user-activity" element={<TrackUserActivity />} />
//                     <Route path="/logout" element={
//                         <div className="welcome-container">
//                             <h2>You have been logged out</h2>
//                         </div>
//                     } />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './Components/CreateUser';
import UpdateUser from './Components/UpdateUser';
import DeactivateUser from './Components/DeactivateUser';
import CreateProject from './Components/CreateProject';
import CreateClient from './Components/CreateClient';
import AssignAccessLevels from './Components/AssignAccessLevels';
import TrackUserActivity from './Components/TrackUserActivity';
import Navbar from './Components/Navbar'; 
import Home from './Components/Home';
// import Logout from './Components/logout';
import './Components/App.css'; 

const App = () => {
    return (
        <Router>
            <Navbar /> 
            
            <div id="content">
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Route for Home */}
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/update-user" element={<UpdateUser />} />
                    <Route path="/deactivate-user" element={<DeactivateUser />} />
                    <Route path="/create-project" element={<CreateProject />} />
                    <Route path="/create-client" element={<CreateClient />} />
                    <Route path="/assign-access-levels" element={<AssignAccessLevels />} />
                    <Route path="/track-user-activity" element={<TrackUserActivity />} />
                    {/* <Route path="/logout" element={<Logout />} />  */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;

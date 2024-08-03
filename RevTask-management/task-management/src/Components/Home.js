import React from 'react';
import HomeImage from '../assets/HomeImage.jpg'; 

const Home = () => (
    <div>
        <p><b>Welcome admin</b></p>
        <img src={HomeImage} alt="Welcome" style={{ width: '100%', height: 'auto' }} />
    </div>
);

export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import HomeImage from '../assets/HomeImage.jpg';

// const Home = () => {
//     const [username, setUsername] = useState('');

//     useEffect(() => {
//         axios.get('http://localhost:4001/getallusers')
//             .then(response => {
//                 // Assuming the API response contains the username
//                 if (response.data.success) {
//                     // Adjust according to your API response structure
//                     setUsername(response.data.username);
//                 } else {
//                     console.error('Failed to fetch username');
//                 }
//             })
//             .catch(error => console.error('Error fetching username:', error));
//     }, []);

//     return (
//         <div>
//             <p><b>Welcome {username}</b></p>
//             <img src={HomeImage} alt="Welcome" style={{ width: '100%', height: 'auto' }} />
//         </div>
//     );
// };

// export default Home;

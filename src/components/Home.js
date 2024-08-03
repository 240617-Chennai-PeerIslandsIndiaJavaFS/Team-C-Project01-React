import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HomeImage from '../images/HomeImage.jpg';
import '../styles/Home.css';

const Home = () => {
    const location = useLocation();
    const { username } = location.state || {};
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`http://localhost:4001/get_adminby_name?name=${username}`);
                const data = await response.json();
                
                console.log('Admin Details:', data);

                setUserDetails(data[0]);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        if (username) {
            fetchUserDetails();
        }
    }, [username]);

    return (
        <div className="home-container">
            <h2>Admin Home</h2>
            {userDetails ? (
                <p>Welcome, {userDetails.name}</p>
            ) : (
                <p>Loading user details...</p>
            )}
            <img src={HomeImage} alt="Home" className="home-image" />
        </div>
    );
};

export default Home;

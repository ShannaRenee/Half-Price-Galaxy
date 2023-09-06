import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  // Use useParams to get the user's ID from the URL
  const { userId } = useParams();

  // Fetch user data using userId and display it
  // Replace this with actual user data retrieval
  const userData = {
    id: userId,
    first_name: '',
    last_name: '',
    home_planet: '',
    email: '',
  };
  
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-darker">
      <div className="dropdown mb-3 me-3 bd-mode-toggle"></div>
      <div className="form-signin">
        <img
          className="mb-4"
          src={require(`../components/login/imgs/wA.png`)}
          alt="Aliens Welcome"
        />
        <h1 className="h3 mb-3 fw-normal">User Profile</h1>
        <div className="profile-info">
          <p>
            <strong>First Name:</strong> {userData.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {userData.last_name}
          </p>
          <p>
            <strong>Home Planet:</strong> {userData.home_planet}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
        </div>
        <p className="mt-5 mb-3 text-body-secondary">&copy; 99845sR-122354sR</p>
      </div>
    </div>
  );
};
export default Profile;
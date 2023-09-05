import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LIFEFORM } from '../utils/queries'; 
import '../components/login/style.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  let navigate = useNavigate();

  const { loading, error, data } = useQuery(QUERY_LIFEFORM, {
    variables: {
      email: formData.email,
      password: formData.password,
    },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if data contains a user with the given email and password
    if (!loading && !error && data && data.lifeForm) {
      // User found, navigate to the dashboard or another page
      navigate(`/`);
    } else {
      // User not found or error occurred
      console.error('User not found or an error occurred.');
    }

    // Clear the form fields
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className=" -flex flex-column align-items-center justify-content-center vh-100 ">
      <div className="dropdown mb-3 me-3 bd-mode-toggle">
      </div>

      <div className="form-signin">
        <form className="w-100" onSubmit={handleFormSubmit}>
          <img className="mb-4" src={require(`../components/login/imgs/wA.png`)} alt="Aliens Welcome"  />
          <h1 className="h3 mb-3 fw-normal text-light">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput"></label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword"></label>
          </div>

          <div className="form-check text-start my-3 pb-5">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <span>
                <img src={require(`../components/login/imgs/tandc2.png`)}alt="By clicking here you agree to All terms and conditions"   />
              </span>
            </label>
          </div>

          <button className="btn btn-danger w-25 py-2" type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          <p className="mt-5 mb-3 text-light fs-6">&copy; 99845sR-122354sR</p>
          {error && <p className="text-light">Lifeform not found or an error occurred.</p>}
        </form>
        
      </div>
    </div>
  );
};

export default Login;

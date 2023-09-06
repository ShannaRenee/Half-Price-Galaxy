import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_LIFEFORM } from '../utils/queries';
import { LIFEFORM_LOGIN } from '../utils/mutations'; // Import the login mutation
import '../components/login/style.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { loading: queryLoading, error: queryError, data: queryData } = useQuery(
    QUERY_LIFEFORM,
    {
      variables: {
        email: formData.email,
        password: formData.password,
      },
    }
  );

  // Define the login mutation
  const [login, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(
    LIFEFORM_LOGIN
  );

  const handleSuccessfulLogin = (userId) => {
    // Navigate to the profile page and pass the user ID as a route parameter
    navigate(`/profile/${userId}`);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the login mutation
      const { data } = await login({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });

      // Check if the login mutation was successful
      if (data && data.login && data.login.userId) {
        const userId = data.login.userId;
        handleSuccessfulLogin(userId);
      } else {
        console.error('User not found or an error occurred.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error.message);
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

          <button className="btn btn-danger w-25 py-2" type="submit" disabled={mutationLoading}>
            {mutationLoading ? 'Signing In...' : 'Sign In'}
          </button>
          <p className="mt-5 mb-3 text-light fs-6">&copy; 99845sR-122354sR</p>
          {mutationError && <p className="text-light">Lifeform not found or an error occurred.</p>}
        </form>
        
      </div>
    </div>
  );
};

export default Login;

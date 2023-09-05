import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {ADD_LIFEFORM } from '../utils/mutations';
import { QUERY_LIFEFORM } from '../utils/queries';

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    home_planet: '',
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

  const [addLifeForm] = useMutation(ADD_LIFEFORM);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addLifeForm({
        variables: { ...formData },
      });

      navigate(`/`);
    } catch (err) {
      console.error(`Error creating a new life form: ${err}`);
    }

    setFormData({
      first_name: '',
      last_name: '',
      home_planet: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-darker">
      <div className="dropdown mb-3 me-3 bd-mode-toggle">
      </div>

      <div className="form-signin">
        <form className="w-100" onSubmit={handleFormSubmit}>
          <img className="mb-4" src={require(`../components/login/imgs/wA.png`)} alt="Aliens Welcome"  />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputUserName"
              placeholder="User Name"
              name="user name"
              value={formData['user name']}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputUserName">User Name</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputFirstName"
              placeholder="First Name"
              name="first name"
              value={formData['first name']}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputFirstName">First Name</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputLastName"
              placeholder="Last Name"
              name="last name"
              value={formData['last name']}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputLastName">Last Name</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputHomePlanet"
              placeholder="Home Planet"
              name="home planet"
              value={formData['home planet']}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputHomePlanet">Home Planet</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInputEmail"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputEmail">Email</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInputPassword"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputPassword">Password</label>
          </div>

          <div className="form-check text-start my-3 pb-5">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <span>
                <img src={require(`../components/login/imgs/tandc.png`)}alt="By clicking here you agree to All terms and conditions"   />
              </span>
            </label>
          </div>

          <button className="btn btn-danger w-25 py-2" type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <p className="mt-5 mb-3 text-body-secondary">&copy; 99845sR-122354sR</p>
          {error && <p className="text-danger">Lifeform not found or an error occurred.</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;

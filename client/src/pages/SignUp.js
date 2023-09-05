import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_LIFEFORM } from '../utils/mutations';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    homePlanet: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const [addLifeForm, { loading, error }] = useMutation(ADD_LIFEFORM);

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
      console.error(`Error creating a new life form: ${err.message}`);
    }

    setFormData({
      firstName: '',
      lastName: '',
      homePlanet: '',
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
          <img className="mb-4" src={require(`../components/login/imgs/wA.png`)} alt="Aliens Welcome" />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputFirstName"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputFirstName"></label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputLastName"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputLastName"></label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputHomePlanet"
              placeholder="Home Planet"
              name="homePlanet"
              value={formData.homePlanet}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInputHomePlanet"></label>
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
            <label htmlFor="floatingInputEmail"></label>
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
            <label htmlFor="floatingInputPassword"></label>
          </div>

          <div className="form-check text-start my-3 pb-5">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <span>
                <img src={require(`../components/login/imgs/tandc2.png`)} alt="By clicking here you agree to All terms and conditions" />
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

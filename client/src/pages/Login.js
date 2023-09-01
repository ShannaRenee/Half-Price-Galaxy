import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TECH } from '../utils/queries';
import { CREATE_MATCHUP } from '../utils/mutations';

const Login = () => {
  const { loading, data } = useQuery(QUERY_TECH);

  const techList = data?.tech || [];

  const [formData, setFormData] = useState({
    tech1: 'JavaScript',
    tech2: 'JavaScript',
  });
  let navigate = useNavigate();

  const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createMatchup({
        variables: { ...formData },
      });

      navigate(`/matchup/${data.createMatchup._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      tech1: 'JavaScript',
      tech2: 'JavaScript',
    });
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="dropdown mb-3 me-3 bd-mode-toggle">
      </div>

      <div className="form-signin">
        <form className="w-100" onSubmit={handleFormSubmit}>
          <img className="mb-4" src={require(`../components/login/imgs/wA.png`)} alt="Aliens Welcome"  />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="Abdub-is-the-Gleblian" />
            <label htmlFor="floatingInput">User name</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <span>
                <img src={require(`../components/login/imgs/tandc.png`)}alt="By clicking here you agree to All terms and conditions"   />
              </span>
            </label>
          </div>
          <button className="btn btn-danger w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

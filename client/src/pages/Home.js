import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const homePages = [
    {
      name: 'RealEstate',
      description: 'Take a gander at some prime interstellar realestate.',
      link: '/realestate'
    },
    {
      name: 'Market',
      description: 'Want some stuff look no further!',
      link: '/market'
    },
    {
      name: 'Travel',
      description: 'Want to get out off your dusty old planet?',
      link: '/travel'
    }
  ];

  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: 'no-cache'
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-75">
      <div className="card-header bg-dark text-center">
        <h1>👽 Welcome to Half Price Galaxy </h1>
        <button className="btn btn-small btn-danger">Login</button>
      </div>
      <div className="card-body m-5">
        {/* Rest of the component content */}
      </div>
      <div className="card-footer text-center m-3">
        {homePages.map((homePage) => (
          <img
            key={homePage.name}
            src={require(`../assets/imgs/${homePage.name}.jpg`).default}
            className="card-img"
            alt={homePage.name}
          />
        ))}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Want some stuff look no further!</h2>
        {/* Rest of the component content */}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Want to get out off your dusty old planet? Click me!</h2>
        {/* Rest of the component content */}
      </div>
    </div>
  );
};

export default Home;

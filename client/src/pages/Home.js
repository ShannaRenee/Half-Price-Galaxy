import React from 'react';
import { homePages } from '../data';
import HomePage from '../components/homePage/';

const Home = () => {
  console.log(homePages);
  return (
    <div className="card bg-white card-rounded w-75">
      <div className="card-header bg-dark text-center">
        <h1>👽 Welcome to Half Price Galaxy </h1>
        <button className="btn btn-small btn-danger">Login</button>
      </div>
      <div className="card-body">
        {homePages.map((homePage, i) => (
          <HomePage key={homePage.name} homePage={homePage} />
        ))}
      </div>
    </div>
  );
};

export default Home;
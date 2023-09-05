import React from 'react';
import { homePages } from '../data';
import HomePage from '../components/homePage/';
const Home = () => {
  console.log(homePages);
  return (
    <div className="card bg-black card-rounded w-50">
      <div className="card-header bg-dark text-center text-white">
        <h1>👽 Welcome to Half Price Galaxy </h1>
        <a button className="btn btn-small btn-danger" href="./Login">Login</a>
      </div>
      <div className="card-body d-flex col ">
        {homePages.map((homePage) => (
          <HomePage key={homePage.name} homePages={homePage} />
        ))}
      </div>
    </div>
  );
};
export default Home;
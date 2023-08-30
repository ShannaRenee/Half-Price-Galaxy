import React from 'react';
import { homePages } from '../data';
import Homes from '../components/homes';


const Home = () => {
  return (
    <div className="card bg-white card-rounded w-75">
      <div className="card-header bg-dark text-center">
        <h1>👽 Welcome to Half Price Galaxy </h1>
        <button className="btn btn-small btn-danger">Login</button>
      </div>
      
      <div className="card-footer text-center m-3">
        <h2>Finally ready to your dream home?</h2>
        {homePages.map((homePages) => (
                <Homes homePages={homePages} key={i}/>
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

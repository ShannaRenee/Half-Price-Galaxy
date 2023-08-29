import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-75">
      <div className="card-header bg-dark text-center">
        <h1>👽 Welcome to Half Price Galaxy   </h1><button className='btn btn-small btn-danger'>Login</button>
      </div>
      <div className="card-body m-5">
        <h2>Place holder</h2>
        {loading ? (
          <div>Thrusters warming....</div>
        ) : (
          <ul className="square">
            {matchupList.map((matchup) => {
              return (
                <li key={matchup._id}>
                  <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                    {matchup.tech1} vs. {matchup.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Take a gander at some prime interstellar realestate.</h2>
        <Link to="/realestate">
          <button className="btn btn-lg btn-danger">Ready to start your adventure?</button>
        </Link>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Want some stuff look no further!</h2>
        <Link to="/realestate">
          <button className="btn btn-lg btn-danger">Ready to start your adventure?</button>
        </Link>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Want to get out off your dusty old planet? Click me!</h2>
        <Link to="/realestate">
          <button className="btn btn-lg btn-danger">Ready to start your adventure?</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

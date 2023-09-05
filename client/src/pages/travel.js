import React from 'react';
import {locations} from "../data"
import Locations from "../components/locations";

const Travel = () => {
    return (
        <div>
            <div className='card-body w-100 bg-dark d-flex'>
            <img className="align-items-center justify-content-center mt-4" src={require(`../assets/imgs/travel.png`)} alt="Aliens Welcome"  />
                <p className='mt-3'>Welcome to Half-Price Galaxy Travel where deep space adventures are only a click away!</p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 rwo-col-xl-3 g-4">
                {locations.map((location) => (
                <Locations key={location.packageName} location={location} />
            ))}
            </div>
        </div>
    );
    };

export default Travel;

import React from 'react';
import {locations} from "../data"
import Locations from "../components/locations";

const Travel = () => {
    return (
        <div>
            <h2>Travel</h2>
            <p>Welcome to Half-Price Galaxy Travel where deep space adventures are only a click away!</p>
            <div className="row row-cols-1 row-cols-md-2 rwo-col-xl-3 g-4">
                {locations.map((location) => (
                <Locations key={location.packageName} location={location} />
            ))}
            </div>
        </div>
    );
    };

export default Travel;

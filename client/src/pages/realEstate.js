import React from 'react';
import {homes} from "../data"
import Homes from "../components/homes";

const RealEstate = () => {
    return (
        <div>
            <h2>Real Estate</h2>
            <p>Welcome to Half-Price Galaxy Real Estate where our homes are out of this world!</p>
            <div className="row row-cols-1 row-cols-md-2 rwo-col-xl-3 g-4">
            {homes.map((home) => (
                <Homes key={home.name} homes={home} />
            ))}
            </div>
        </div>
    );
    };

export default RealEstate;
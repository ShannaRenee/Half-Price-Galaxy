import React from 'react';
import {homes} from "../data"
import Homes from "../components/homes";

const RealEstate = () => {
    return (
        <div>
            <h2>Real Estate</h2>
            <p>Welcome to Half-Price Galaxy Real Estate where our homes are out of this world!</p>
            {homes.map((home) => (
                <Homes homes={homes} key={i}/>
            ))}
        </div>
    );
    };

export default RealEstate;
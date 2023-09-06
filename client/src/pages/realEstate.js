import React from 'react';
import {homes} from "../data"
import Homes from "../components/homes";

const RealEstate = () => {
    return (
        <div>
            <div className='card-body w-100 bg-dark d-flex'>
            <img className="align-items-center justify-content-center mt-4" src={require(`../assets/imgs/realestate.png`)} alt="Aliens Welcome"  />
            <p className='mt-3'>Welcome to Half-Price Galaxy Real Estate where our homes are out of this world!</p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 rwo-col-xl-3 g-4">

            {homes.map((home) => (
                <Homes key={home.name} homes={home} />
            ))}
            </div>
        </div>
    );
    };

export default RealEstate;
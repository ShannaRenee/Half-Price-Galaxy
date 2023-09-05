import React from 'react';
import "./style.css";

const Homes = ({homes}) => {
    return (
        <div className="col">
            <div class="card h-100">
            <img 
            src={require(`../../assets/imgs/${homes.name}.jpg`)} 
            class="card-img-top" 
            alt={homes.name}
            />
            <div class="card-body">
                <h5 class="card-title">{homes.name}</h5>
                <p class="card-text">{homes.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{homes.planet}</li>
                <li class="list-group-item">{homes.bedrooms}</li>
                <li class="list-group-item">{homes.bathrooms}</li>
                <li class="list-group-item">{homes.splorgons}</li>
                <li class="list-group-item">{homes.price}</li>
                <li class="list-group-item">{homes.listed}</li>
            </ul>
        </div>
        </div>
            );
};

export default Homes;


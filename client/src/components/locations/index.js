import React from 'react';
import "./style.css";

const Locations = ({location}) => {
    return (
        <div class="card">
            <img 
            src={require(`../assets/imgs/${location.packageName}.jpg`)} 
            class="card-img-top" 
            alt={location.packageName}
            />
            <div class="card-body">
                <h5 class="card-title">{location.packageName}</h5>
                <p class="card-text">{location.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{location.price}</li>
            </ul>
        </div>
            );
};

export default Locations;

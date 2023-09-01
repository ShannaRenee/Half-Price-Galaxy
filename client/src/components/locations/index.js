import React from 'react';
import "./style.css";

const Locations = ({location}) => {
    return (
        <div class="card">
            <img 
            src={require(`../../../assets/imgs/${location.package_name}.jpg`)} 
            class="card-img-top" 
            alt={location.package_name}
            />
            <div class="card-body">
                <h5 class="card-title">{location.package_name}</h5>
                <p class="card-text">{location.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{location.price}</li>
            </ul>
        </div>
            );
};

export default Locations;

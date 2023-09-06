import React from 'react';
import "./style.css";

const Merch = ({merch}) => {
    return (
        <div className="col">
            <div class="card h-100">
            <img 
            src={require(`../../assets/imgs/${merch.name}.jpg`)} 
            class="card-img-top" 
            alt={merch.name}
            />
            <div class="card-body">
                <h5 class="card-title">{merch.name}</h5>
                <p class="card-text">{merch.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{merch.type}</li>
                <li class="list-group-item">{merch.description}</li>
                <li class="list-group-item">{merch.planet}</li>
                <li class="list-group-item">{merch.seller}</li>
                <li class="list-group-item">{merch.price}</li>
            </ul>
        </div>
        </div>
            );
};

export default Merch;
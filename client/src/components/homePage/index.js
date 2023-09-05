import React from 'react';
import "./style.css";
const HomePage = ({homePages}) => {
    console.log(homePages);
    return (
        <div class="card bg-dark">
            <img
            src={require(`../../../assets/imgs/${homePages.name}.jpg`)}
            class="card-img-top"
            alt={homePages.name}
            />
            <div class="card-body bg-danger w-100">
                <h5 class="card-title">{homePages.name}</h5>
                <p class="card-text">{homePages.description}</p>
            </div>
        </div>
            );
};
export default HomePage;

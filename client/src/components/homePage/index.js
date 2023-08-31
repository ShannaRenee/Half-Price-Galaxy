import React from 'react';
import "./style.css";


const HomePage = ({homePages}) => {
    console.log(homePages);
    return (
        <div className="card align-items-center " >
            <img 
            src={require(`../../../assets/imgs/${homePages.name}.jpg`)} 
            className="card-img-top " 
            alt={homePages.name}
            />
            <div className="card-body bg-danger d-flex justify-content-center 
            align-items-center">
                <h5 className="card-title ">{homePages.name}</h5>
                <p className="card-text">{homePages.description}</p>
            </div>
           
        </div>
            );
};

export default HomePage;

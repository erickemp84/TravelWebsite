import React, {Component} from 'react';
import Japan from '../Assets/Images/japan.jpg';
import Brazil from '../Assets/Images/brazil.jpg';
import Norway from '../Assets/Images/norway.jpg';
import Austrailia from '../Assets/Images/austrailia.jpg';

const LocationCards = () => {

    return (
        <>
        <div className="location-cards-header">
            <h1>Travel to These Destinations</h1>
        </div>
        <div className="location-cards">
            
            <div className="card">
                <img src={Japan} alt=""></img>
                <div className="card-text">
                    <h3>Japan</h3>
                    <p>Lorem ipsum sit amet dolore...</p>
                    <button>Info</button>
                </div>
            </div>
            <div className="card">
                <img src={Brazil} alt=""></img>
                <div className="card-text">
                    <h3>Brazil</h3>
                    <p>Lorem ipsum sit amet dolore...</p>
                    <button>Info</button>
                </div>
            </div>
            <div className="card">
                <img src={Norway} alt=""></img>
                <div className="card-text">
                    <h3>Norway</h3>
                    <p>Lorem ipsum sit amet dolore...</p>
                    <button>Info</button>
                </div>
            </div>
            <div className="card">
                <img src={Austrailia} alt=""></img>
                <div className="card-text">
                    <h3>Austrailia</h3>
                    <p>Lorem ipsum sit amet dolore...</p>
                    <button>Info</button>
                </div>
            </div>
        </div>
        </>
    )

}

export default LocationCards;
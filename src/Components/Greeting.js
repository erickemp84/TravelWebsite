import React, {Component} from 'react';
import mountains from '../Assets/Images/mountains2.jpg';

const Greeting = () => {

    return(
        <>
        <div className="greeting">
            <img src={mountains} />
            <h1>Explore Your World</h1>
        </div>
        </>
    )
}

export default Greeting;
import React from 'react';
import mountains from '../Assets/Images/mountains2.jpg';

const Greeting = () => {

    return(
        <>
        <div className="greeting">
            <img src={mountains} alt="A beautiful snow capped mountain range." />
            <h1>Explore Your World</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur modi libero ratione laboriosam minus.</p>
            <button>Find Agent</button>
        </div>
        </>
    )
}

export default Greeting;
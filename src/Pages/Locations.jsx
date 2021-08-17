import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import bridge from '../Assets/Images/bridge.jpg';

const Locations = props => {

    return( 

        <>
        <Navbar />
        <div className="locations-dashboard">
            <div className="dashboard-left">
                <img src={bridge} alt="A man running across a suspension bridge." />
            </div>
            <div className="dashboard-right">
                <div className="locations-text">
                    <h1>Choose Your Journey</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat veritatis ad quas ipsam, nam sapiente sed laborum fugit numquam dolorem.</p>
                    <h1>Select a Continent</h1>
                    <ul>
                        <li>North America</li>
                        <li>South America</li>
                        <li>Europe</li>
                        <li>Asia</li>
                        <li>Africa</li>
                    </ul>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nam laboriosam! Dignissimos perspiciatis a mollitia, necessitatibus culpa nostrum odit optio sed fugit amet sint laudantium praesentium corporis impedit, commodi suscipit quod?</p>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi tempora iure voluptas eos doloribus id fugiat animi? Culpa eveniet nam ratione quibusdam.</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );

}

export default Locations;
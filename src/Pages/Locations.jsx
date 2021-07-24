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

            </div>
        </div>
        <Footer />
        </>
    );

}

export default Locations;
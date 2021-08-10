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
                    <div className="continent-boxes">
                        <div className="north-america">

                        </div>
                        <div className="south-america">

                        </div>
                        <div className="europe">

                        </div>
                        <div className="asia">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );

}

export default Locations;
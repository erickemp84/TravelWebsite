import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import map from '../Assets/Images/map.jpg';

const FindAgent = props => {
    return(
        <>
            <Navbar />
            <div className="agent-dashboard">
                <div className="dashboard-left">
                    <img src={map} alt="A map laid out on a table." />
                </div>
                <div className="dashboard-right">
                    <div className="agent-dashboard-text">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum placeat voluptatem veniam quisquam fuga eius iure rerum mollitia esse sed qui praesentium, quo impedit vero nesciunt optio debitis omnis soluta ut.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FindAgent;
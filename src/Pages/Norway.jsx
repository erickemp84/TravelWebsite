import React from 'react';
import {Link} from '@reach/router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import norway2 from '../Assets/Images/norway2.jpg';

const Norway = props => {
    return (
        <div>
            <Navbar />
            <div className="norway-page-top">
                <img src={norway2} alt="A red house with mountain fjords in the background."></img>
            </div>
            <div className="norway-intro">
                <div className="intro-facts">
                    
                </div>
            </div>
            <div className="norway-quote">
                <div className="quote-banner">

                </div>
                <div class="quote-banner-image">

                </div>
            </div>
            <div className="norway-information">
                <div className="info-header">

                </div>
            </div>
            <Link to="/">Go Home</Link>
            <Footer />
        </div>
    )
}

export default Norway;
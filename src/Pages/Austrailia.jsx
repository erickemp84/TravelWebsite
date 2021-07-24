import React from 'react'
import {Link} from '@reach/router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import australia2 from '../Assets/Images/australia2.jpg';

const Australia = props => {
    return (
        <div>
            <Navbar />
            <div className="australia-page-top">
                <img src={australia2} alt="Ayers Rock at sunset."></img>
            </div>
            <div className="australia-intro">
                <div className="intro-facts">
                    
                </div>
            </div>
            <div className="australia-quote">
                <div className="quote-banner">

                </div>
                <div class="quote-banner-image">

                </div>
            </div>
            <div className="australia-information">
                <div className="info-header">

                </div>
            </div>
            <Link to="/">Go Home</Link>
            <Footer />
        </div>
    )
}

export default Australia;
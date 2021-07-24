import React from 'react';
import {Link} from '@reach/router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import japan2 from '../Assets/Images/japan2.jpg';

const Japan = props => {

    return (
        <div>
            <Navbar />
            <div className="japan-page-top">
                <img src={japan2} alt="A view of Mt. Fuju in Japan." />
            </div>
            <div className="japan-intro">
                <div className="intro-facts">
                    
                </div>
            </div>
            <div className="japan-quote">
                <div className="quote-banner">

                </div>
                <div class="quote-banner-image">

                </div>
            </div>
            <div className="japan-information">
                <div className="info-header">

                </div>
            </div>
            <Link to="/">Go Home</Link>
            <Footer />
        </div>
    )
}

export default Japan;

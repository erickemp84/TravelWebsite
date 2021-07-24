import React from 'react';
import {Link} from '@reach/router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import brazil2 from '../Assets/Images/brazil2.jpg';

const Brazil = props => {
    return (
        <div>
            <Navbar />
            <div className="brazil-page-top">
                <img src={brazil2} alt="A view of Rio de Janeiro from a mountain top." ></img>
            </div>
            <div className="brazil-intro">
                <div className="intro-facts">
                    
                </div>
            </div>
            <div className="brazil-quote">
                <div className="quote-banner">

                </div>
                <div class="quote-banner-image">

                </div>
            </div>
            <div className="brazil-information">
                <div className="info-header">

                </div>
            </div>
            <Link to="/">Go Home</Link>
            <Footer />
        </div>
    )
}

export default Brazil;

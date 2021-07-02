import React from 'react';
import {Link} from '@reach/router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Brazil = props => {
    return (
        <div>
            <Navbar />
            <h1>This is the Brazil page.</h1>
            <Link to="/">Go Home</Link>
            <Footer />
        </div>
    )
}

export default Brazil;

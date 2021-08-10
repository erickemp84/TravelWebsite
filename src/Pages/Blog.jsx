import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Blog = props => {
    return(
        <>
            <Navbar />
            <div className="blog-dashboard">
                <h1>This is the Blog Page!</h1>
                <h3>Stay awhile and learn something today!  It's much more fulfilling than just watching Netflix!</h3>
            </div>
            <Footer />
        </>
    )
}

export default Blog;
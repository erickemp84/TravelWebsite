import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Japan from '../Assets/Images/japan.jpg';

const Blog = props => {
    return(
        <>
            <Navbar />
            <div className="blog-section-1">
                <div className="blog-article">
                    <img src={Japan} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        
                    </div>
                </div>
                <div className="blog-article">
                <img src={Japan} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        
                    </div>
                </div>
                <div className="blog-article">
                <img src={Japan} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        
                    </div>
                </div>
                <div className="blog-article">
                <img src={Japan} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        
                    </div>
                </div>
            </div>
            <div className="blog-section-2">
            <div className="blog-article">
                    <img src={Japan} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        
                    </div>
                </div>
                <div className="blog-article">
                <img src={Japan} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        
                    </div>
                </div>
                <div className="blog-article">
                <img src={Japan} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        
                    </div>
                </div>
                <div className="blog-article">
                <img src={Japan} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog;
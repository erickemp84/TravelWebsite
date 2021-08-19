import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import food from '../Assets/Images/food.jpg';
import festival from '../Assets/Images/festival.jpg';
import henna from '../Assets/Images/henna.jpg';
import baobab from '../Assets/Images/baobab.jpg';
import tacos from '../Assets/Images/tacos.jpg';
import racing from '../Assets/Images/racing.jpg';
import bagpipes from '../Assets/Images/bagpipes.jpg';
import army from '../Assets/Images/army.jpg';
import {Link} from '@reach/router';

const Blog = props => {
    return(
        <>
            <Navbar />
            <div className="blog-heading">
                <h1>Blog</h1>
                <p>News and events from around the world</p>
            </div>
            <div className="blog-section-1">
                <div className="blog-article">
                    <img src={food} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                        <Link to="/japan"><button>Visit</button></Link>
                    </div>
                </div>
                <div className="blog-article">
                <img src={festival} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                    </div>
                </div>
                <div className="blog-article">
                <img src={henna} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                    </div>
                </div>
                <div className="blog-article">
                <img src={baobab} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                    </div>
                </div>
            </div>
            <div className="blog-section-2">
            <div className="blog-article">
                    <img src={tacos} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                    </div>
                </div>
                <div className="blog-article">
                <img src={racing} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                    </div>
                </div>
                <div className="blog-article">
                <img src={bagpipes} alt=""></img>
                    <div className="card-text">
                        <h3>Japan</h3>
                        <p>Lorem ipsum sit amet dolore...</p>
                    </div>
                </div>
                <div className="blog-article">
                <img src={army} alt=""></img>
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
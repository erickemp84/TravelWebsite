import React, {Component} from 'react';
import home from '../Assets/Images/home.jpg';
import ocean from '../Assets/Images/ocean.jpg';
import desert from '../Assets/Images/desert.jpg';
import river from '../Assets/Images/river.jpg';

const Information = () => {

    return(
        <div className="info">
            <div className="blog">
                <div className="blog-main">
                    <img src={home} />
                    <h1>Explore: The City of Fountains</h1>
                </div>
            </div>
            <div className="sub">
                    <div className="sub-blogs">
                        <img src={ocean} />
                        <p>10 Surprising Facts About the Ocean</p>
                    </div>
                    <div className="sub-blogs">
                        <img src={river} />    
                        <p>These Are the Most Visited Mountain Ranges</p>
                    </div>
                    <div className="sub-blogs">
                        <img src={desert} />
                        <p>Suprisingly Beautiful Desert Destinations</p>
                    </div>
            </div>
            <div class="custom-shape-divider-bottom-1615320177">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Information;
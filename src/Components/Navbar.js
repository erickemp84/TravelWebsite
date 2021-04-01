import React from 'react';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">
                <h1>Logo Here</h1>
            </div>
            <div className="social">
                <ul>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                    <li><FaGithub /></li>
                </ul>
            </div>
        </div>
    )

}


export default Navbar;
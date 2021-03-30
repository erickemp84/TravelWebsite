import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    
    return (
        
        <div className="links">
            <ul>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
                <li><FaGithub /></li>
            </ul>
        </div>

    )

}

export default Footer;
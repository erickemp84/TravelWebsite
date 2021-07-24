import React from 'react';
import {Link} from '@reach/router';

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/"><h1>TRVL</h1></Link>
            </div>
            <div className="navbar-links">
                <ul>
                    <Link to="/findagent"><li>Find Agent</li></Link>
                    <Link to="/locations"><li>Locations</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <li></li>
                </ul>
            </div>
        </div>
    )

}


export default Navbar;
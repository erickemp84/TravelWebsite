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
                {/* Figure out why this isn't working on the header image at the top of the page. */}
                <h1>Explore Your World</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur modi libero ratione laboriosam minus.</p>
                <Link to="/findagent"><button>Find Agent</button></Link>
            </div>
            <div className="japan-intro">
                <div className="intro-facts">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur iusto corrupti voluptas, numquam molestias. Error nostrum ab vel ad beatae, voluptatum nisi?</p>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, vero cupiditate soluta officiis atque sed adipisci odit culpa magni consectetur voluptatibus porro quidem reiciendis architecto eligendi maxime dolore nobis tenetur! Voluptatibus nisi, maxime deleniti numquam minima repellat.</p>
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ullam doloribus hic eligendi debitis libero quidem distinctio maiores aperiam, amet magni in fugit minus accusamus totam rem neque a nostrum laborum?</p>
                </div>
            </div>
            <div className="japan-quote">
                <div className="quote-banner">
                    <h3>John Doe</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda, nihil est sed repellat odit nisi facilis fuga, eos nemo, mollitia laboriosam quaerat enim?"</p>
                </div>
                <div class="quote-banner-image">

                </div>
            </div>
            <div className="japan-information">
                <div className="info-header">
                    <h1>Features and Sites in Japan</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum et non accusamus cum natus? Eveniet ad id repellat saepe labore? Unde dolores soluta iure ab, quod quaerat assumenda vel debitis, voluptates neque architecto recusandae.</p>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                        <li>Item 6</li>
                        <li>Item 7</li>
                        <li>Item 8</li>
                    </ul>
                </div>
            </div>
            <Link to="/">Go Home</Link>
            <Footer />
        </div>
    )
}

export default Japan;

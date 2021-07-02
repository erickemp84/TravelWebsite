import React from "react";
import Navbar from '../Components/Navbar';
import Greeting from '../Components/Greeting';
import LocationCards from '../Components/LocationCards';
import Information from '../Components/Information';
import Forms from '../Components/Forms';
import Footer from '../Components/Footer';

const Home = (props) => {
    return (
        <div>
            <Navbar />
            <Greeting />
            <LocationCards />
            <Information />
            <Forms />
            <Footer />
        </div>
    );
};

export default Home;

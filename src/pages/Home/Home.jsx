import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import About from '../../Shared/About/About';
import Portfolio from '../../Shared/Portfolio/Portfolio';
import Contact from '../../Shared/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Banner />
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;

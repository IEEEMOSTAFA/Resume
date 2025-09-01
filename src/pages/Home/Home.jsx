import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import About from '../../Shared/About/About';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Banner />
            <About></About>
        </div>
    );
};

export default Home;

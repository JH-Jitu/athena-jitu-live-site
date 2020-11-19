import React from 'react';

import Header from './Header/Header';
import Service from './Service/Service';


const Home = () => {
    return (
        <div >
            <Header></Header>
            <div className="bg-light p-3">
            <Service></Service></div>
        </div>
    );
};

export default Home;
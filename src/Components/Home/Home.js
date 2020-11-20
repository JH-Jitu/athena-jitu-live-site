import React from 'react';
<<<<<<< HEAD

import Header from './Header/Header';
import Service from './Service/Service';
=======
import Project from '../Project/Project';
import Achievements from './Achievements/Achievements';
import Header from './Header/Header';
import Service from './Service/Service';
import DedicatedSection from './DedicatedSection/DedicatedSection';
import SearchBox from './SearchBox/SearchBox';
import Footer from './Footer/Footer';
>>>>>>> f90da940914e0f29d010d117e170ca40f3c6e986


const Home = () => {
    return (
        <div >
            <Header></Header>
            <div className="bg-light p-3">
<<<<<<< HEAD
            <Service></Service></div>
=======
                <Service></Service>
                </div>
            <Project></Project>
            <Achievements></Achievements>
            <div className="bg-light">
                <DedicatedSection />
                <SearchBox />
                <Footer />
            </div>



>>>>>>> f90da940914e0f29d010d117e170ca40f3c6e986
        </div>
    );
};

export default Home;
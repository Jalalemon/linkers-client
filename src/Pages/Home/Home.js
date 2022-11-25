import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import ThereCategory from './ThereCategory';

const Home = () => {
    return (
        <div className='mx-6'>
            <h3>home</h3>
            <Banner></Banner>
          
            <ThereCategory></ThereCategory>

        </div>
    );
};

export default Home;
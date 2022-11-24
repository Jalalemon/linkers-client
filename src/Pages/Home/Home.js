import React from 'react';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div className='mx-6'>
            <h3>home</h3>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;
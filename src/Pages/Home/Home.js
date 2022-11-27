import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Categories from './Categories';
import ThereCategory from './ThereCategory';

const Home = () => {
    return (
      <div className="mx-6">
        <Banner></Banner>
        <div className="text-3xl my-12 font-bold"></div>
        <Advertise></Advertise>
        <div className="text-3xl my-12 font-bold"> All Category</div>
        <ThereCategory></ThereCategory>
      </div>
    );
};

export default Home;
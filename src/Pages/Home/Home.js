import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Categories from './Categories';
import ThereCategory from './ThereCategory';
import img from '../../assets/frezbanner.jpg'
const Home = () => {
    return (
      <div className="mx-6 grid">
        <Banner></Banner>
        <div>
            <img src={img} alt="" className='mt-20' />
        </div>
        <div className="text-3xl my-12 font-bold"></div>
        <Advertise></Advertise>
        <div className="text-3xl my-12 font-bold"> All Category</div>
        <ThereCategory></ThereCategory>
      </div>
    );
};

export default Home;
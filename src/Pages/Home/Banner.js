import React from 'react';
import bannerImg from '../../assets/banner.png'
const Banner = () => {
    return (
      <div>
        <div className="hero mt-20">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={bannerImg}
              alt=""
              className="rounded-lg w-1/2 shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Linkers.com</h1>
              <p className="py-6">
                Each day, we are fueling commerce and accelerating
                digitalisation across Bangladesh.Four of the most exciting
                emerging economies in the world, and we are committed to
                unlocking their potential.
              </p>
              <button className="btn btn-secondary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
import React, { useEffect, useState } from 'react';
import Waltoncart from './Waltoncart';

const WaltonCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch("waltonCategories.json")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
    return (
      <div className=''>
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {categories.map((category) => (
            <Waltoncart key={category._id} category={category}></Waltoncart>
          ))}
        </div>
      </div>
    );
};

export default WaltonCategories;
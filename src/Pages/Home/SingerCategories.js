import React, { useEffect, useState } from 'react';
import Waltoncart from './Waltoncart';

const SingerCategories = () => {
      const [categories, setCategories] = useState([]);

      useEffect(() => {
        fetch("singerCategories.json")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);
      return (
        <div>
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {categories.map((category) => (
              <Waltoncart key={category._id} category={category}></Waltoncart>
            ))}
          </div>
        </div>
      );
};

export default SingerCategories;
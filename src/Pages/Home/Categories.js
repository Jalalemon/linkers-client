import React, { useEffect, useState } from 'react';
import CategoryCart from './CategoryCart';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
    }, [])
    return (
        <div className=''>
            <h3>{categories.length} </h3>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    categories.map(category => <CategoryCart key={category._id } category={category} ></CategoryCart> )
                }
            </div>
        </div>
    );
};

export default Categories;
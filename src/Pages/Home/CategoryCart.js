import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCart = ({category}) => {
    console.log(category);

    return (
      <div className="card card-compact shadow-2xl" data-theme="light">
        <figure>
          <img src={category.picture} className="mt-3" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{category.company}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={`/categoryCart/${category._id}`}>
              {" "}
              <button className="btn mx-auto btn-primary">
                View products
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CategoryCart;
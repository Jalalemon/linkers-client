import React, { useEffect, useState } from 'react';
import BookingModal from '../Bookings/BookingModal';
import Waltoncart from './Waltoncart';

const WaltonCategories = () => {
    const [categories, setCategories] = useState([]);
      const [treatement, setTreatment] = useState(null);
    useEffect(() => {
      fetch("http://localhost:5000/waltonCategories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
    return (
      <div className="">
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {categories.map((category) => (
            <Waltoncart
              key={category._id}
              category={category}
              setTreatment={setTreatment}
            ></Waltoncart>
          ))}
        </div>
        {treatement && (
          <BookingModal
            treatement={treatement}
            setTreatment={setTreatment}
          ></BookingModal>
        )}
      </div>
    );
};

export default WaltonCategories;
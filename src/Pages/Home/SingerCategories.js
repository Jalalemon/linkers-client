import React, { useEffect, useState } from 'react';
import BookingModal from '../Bookings/BookingModal';
import SingerCart from './SingerCart';


const SingerCategories = () => {
      const [categories, setCategories] = useState([]);
       const [treatement, setTreatment] = useState(null);
      useEffect(() => {
        fetch("http://localhost:5000/singerCategories")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);
      return (
        <div>
          <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {categories.map((category) => (
              <SingerCart
                key={category._id}
                setTreatment={setTreatment}
                category={category}
              ></SingerCart>
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

export default SingerCategories;
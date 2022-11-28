import React, { useEffect, useState } from 'react';
import BookingModal from '../Bookings/BookingModal';
import PrivateRout from '../shared/PrivateRout';
import MarcelCart from './MarcelCart';

const MarcelCategories = () => {
   const [categories, setCategories] = useState([]);
      const [treatement, setTreatment] = useState(null);
   useEffect(() => {
     fetch("https://linkers-server.vercel.app/marcelCategories")
       .then((res) => res.json())
       .then((data) => setCategories(data));
   }, []);
   return (
     <div className="">
       <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
         {categories.map((category) => (
           <MarcelCart
             key={category._id}
             setTreatment={setTreatment}
             category={category}
           ></MarcelCart>
         ))}
       </div>
       {treatement && (
         <PrivateRout>
           <BookingModal
             treatement={treatement}
             setTreatment={setTreatment}
           ></BookingModal>
         </PrivateRout>
       )}
     </div>
   );
};

export default MarcelCategories;
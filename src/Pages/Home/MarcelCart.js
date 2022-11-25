import React from 'react';
import { Link } from 'react-router-dom';

const MarcelCart = ({category, setTreatment}) => {
   console.log(category);
   const {
     picture,
     name,
     address,
     about,
     price,
     email,
     company,
     index,
     registered,
     phone,
     balance,
   } = category;

   return (
     <div className="card card-compact w-96 shadow-2xl" data-theme="light">
       <figure>
         <img src={picture} className="mt-3" alt="Shoes" />
       </figure>
       <div className="card-body">
         <h2 className="text-2xl font-semibold">{company}</h2>
         <p> name: {name}</p>
         <p>about: {about} </p>
         <p> location: {address} </p>
         <p> phone: {phone} </p>
         {/* <p> Email: {email} </p> */}
         <p>original price:{balance} </p>
         <p> resale price:{price} </p>
         <p>used time: {index}year </p>
         <p> Registered time: {registered} </p>
         <label
           className="btn"
           htmlFor="booking-modal"
           onClick={() => setTreatment(category)}
         >
           Book now
         </label>
       </div>
     </div>
   );
};

export default MarcelCart;
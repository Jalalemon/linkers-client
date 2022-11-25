import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../auth/AuthProvider';
import Loading from '../Pages/Bookings/Loading';
import Waltoncart from '../Pages/Home/Waltoncart';
import MyproductCart from './MyproductCart';


const MyProducts = () => {
    const { user } = useContext(AuthContexts);

    const url = `http://localhost:5000/allCategories?email=${user?.email}`;
    const { data: bookings = [], isLoading } = useQuery({
      queryKey: ["bookings", user?.email],
      queryFn: async () => {
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      },
    });

    if (isLoading) {
      return <Loading></Loading>;
    }
   return (
     <div className="overflow-x-auto">
       <table className="table w-full">
         <thead>
           <tr>
             <th></th>
             <th>Name</th>
             <th>Price</th>
             <th>Date</th>
             <th>Time</th>
             <th>Payment</th>
           </tr>
         </thead>
         <tbody>
           {bookings?.length &&
             bookings?.map((booking, i) => (
               <tr key={i}>
                 <th>{i + 1}</th>
                 <td>{booking.company}</td>
                 <td>{booking.price ? booking.price : booking.balance} </td>
                 <td>{booking.appointmentDate}</td>
                 <td>{booking.slot} </td>
                 <td>
                   {booking.balance && !booking.paid && (
                     <Link to={`/dashboard/payment/${booking._id}`}>
                       <button className="btn btn-sm btn-primary">pay</button>
                     </Link>
                   )}
                   ,
                   {booking.balance && booking.paid && (
                     <span className="text-primary">paid</span>
                   )}
                 </td>
               </tr>
             ))}
         </tbody>
       </table>
     </div>
   );
};

export default MyProducts;
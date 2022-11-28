import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContexts } from '../auth/AuthProvider';
import ConfirmationModal from '../Pages/Bookings/ConfirmationModal';
import Loading from '../Pages/Bookings/Loading';
import Waltoncart from '../Pages/Home/Waltoncart';
import MyproductCart from './MyproductCart';


const MyProducts = () => {
    const { user } = useContext(AuthContexts);
 const [deletingUsers, setDeletingUsers] = useState(null);
 const [isAdvertised, setIsAdvetised] = useState(false)
 const closeMOdal = () => {
   setDeletingUsers(null);
 };
    const url = `http://localhost:5000/myProducts?email=${user?.email}`;
    const { data: bookings = [], refetch, isLoading } = useQuery({
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
      const handleDeleteUsers = (booking) => {
        fetch(`http://localhost:5000/myProducts/${booking._id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              toast.success(`product ${user.name} deleted successfully`);
            }
          });
      }; 

       if (isLoading) {
         return <Loading></Loading>;
       }
console.log(bookings);
const handleAdvertise = (booking) =>{
console.log('ok bro',booking);

const advertise = {
productId: booking._id,
company: booking.company,
balance: booking.balance,
picture: booking.picture,
condition: booking.condition,
address: booking.address,
about: booking.about,
price: booking.price,
category: booking.category,
registered: booking.registered,
email: booking.email
}
console.log(advertise);
    fetch("http://localhost:5000/advertisments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify(advertise),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(booking);
        if (data.acknowledged) {
           refetch();
           setIsAdvetised(true)
          // navigate("/dashboard/myproducts");
        } else {
          toast.error(data.message);
        }
      });


}
    
    if(isLoading) {
      return <Loading></Loading>;
    }
   return (
     <div className="overflow-x-auto">
       <table className="table w-full">
         <thead>
           <tr>
             <th>No</th>
             <th>Picture</th>
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
                 <td>
                   <figure className="px-10 pt-10">
                     <img
                       src={booking.picture}
                       alt="Shoes"
                       className=" w-full "
                     />
                   </figure>{" "}
                 </td>
                 <td>{booking.company}</td>
                 <td>{booking.price ? booking.price : booking.balance} </td>
                 <td>{booking.registered}</td>
                 <td>
                   <label
                     onClick={() => setDeletingUsers(booking)}
                     htmlFor="confirmation-modal"
                     className="btn btn-sm btn-error"
                   >
                     Delete
                   </label>
                 </td>
                 <td>
                   <button
                     onClick={() => handleAdvertise(booking)}
                     className="btn btn-sm btn-primary"
                   >
                     {isAdvertised ? "Advertised" : "Advertise"}
                   </button>
                   {/* <button>advertise</button> */}
                   {/* {booking.balance && !booking.paid && (
                     <Link to={`/dashboard/payment/${booking._id}`}>
                       <button onClick={handleAdvertise(booking)} className="btn btn-sm btn-primary">
                         Unsold
                       </button>
                     </Link>
                   )}
                   
                   {booking.balance && booking.paid && (
                     <span className="text-primary">paid</span>
                   )} */}
                 </td>
               </tr>
             ))}
         </tbody>
       </table>
       {deletingUsers && (
         <ConfirmationModal
           title={`are you sure you want to delete`}
           message={`if you delete ${deletingUsers.name}`}
           closeMOdal={closeMOdal}
           successBtnName={"Delete"}
           successAction={handleDeleteUsers}
           modalData={deletingUsers}
         ></ConfirmationModal>
       )}
     </div>
   );
};

export default MyProducts;
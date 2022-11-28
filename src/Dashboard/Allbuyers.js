import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import ConfirmationModal from '../Pages/Bookings/ConfirmationModal';
import Loading from '../Pages/Bookings/Loading';

const Allbuyers = () => {
    // const buyers =useLoaderData();
   
      const [deletingUsers, setDeletingUsers] = useState(null);
      const closeMOdal = () => {
        setDeletingUsers(null);
      };

 const { data: buyers = [], refetch, isLoading } = useQuery({
   queryKey: ["buyers"],
   queryFn: async () => {
     const res = await fetch("https://linkers-server.vercel.app/usersquery?role=Buyer");
     const data = await res.json();
     return data;
   },
 });
 const handleDeleteUsers = (buyer) => {
   fetch(`https://linkers-server.vercel.app/users/${buyer._id}`, {
     method: "DELETE",
     headers: {
       authorization: `bearer ${localStorage.getItem("accessToken")}`,
     },
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       if (data.deletedCount > 0) {
         toast.success(`doctor ${buyer.name} deleted successfully`);
         refetch();
       }
     });
 }; 


if(isLoading){
  <Loading></Loading>
}
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>{buyers.length} </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map((buyer, i) => (
                <tr key={buyer._id}>
                  <th>{i + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>{buyer.role}</td>
                  <td>
                    <label
                      onClick={() => setDeletingUsers(buyer)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </label>
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
      </div>
    );
};

export default Allbuyers;
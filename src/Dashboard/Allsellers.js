import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContexts } from "../auth/AuthProvider";
import ConfirmationModal from "../Pages/Bookings/ConfirmationModal";
import Loading from "../Pages/Bookings/Loading";

const Allsellers = () => {
  const { user } = useContext(AuthContexts);
  // const sellers = useLoaderData();
  const [deletingUsers, setDeletingUsers] = useState(null);

  const closeMOdal = () => {
    setDeletingUsers(null);
  };
 

 const { data: sellers = [], isLoading, refetch } = useQuery({
   queryKey: ["sellers"],
   queryFn: async () => {
     const res = await fetch("https://linkers-server.vercel.app/usersquery?role=seller");
     const data = await res.json();
     return data;
   },
 });
 const handleDeleteUsers = (seller) => {
   fetch(`https://linkers-server.vercel.app/users/${seller._id}`, {
     method: "DELETE",
     headers: {
       authorization: `bearer ${localStorage.getItem("accessToken")}`,
     },
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       if (data.deletedCount > 0) {
         toast.success(`doctor ${seller.name} deleted successfully`);
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
              <th>{sellers.length} </th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td>
                  <label
                    onClick={() => setDeletingUsers(seller)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
                <td>
                 
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

export default Allsellers;

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "./ConfirmationModal";

const AllUsers = () => {
      const [deletingUsers, setDeletingUsers] = useState(null);
      const closeMOdal = () => {
        setDeletingUsers(null);
      };
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });


      const handleDeleteUsers = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
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
              toast.success(`doctor ${user.name} deleted successfully`);
            }
          });
      }; 

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make admin successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1} </th>
                <td>{user.name} </td>
                <td>{user.email}</td>

                <td>
                  {" "}
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-sm btn-primary"
                    >
                      Make admin
                    </button>
                  )}{" "}
                </td>
                <td>
                 <label
                    onClick={() => setDeletingUsers(user)}
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
      </div>
      
        {deletingUsers && (
        <ConfirmationModal
          title={`are you sure you want to delete`}
          message={`if you delete ${deletingUsers.name}`}
          closeMOdal={closeMOdal}
          successBtnName={'Delete'}
          successAction={handleDeleteUsers}
          modalData={deletingUsers}
        ></ConfirmationModal>
      )}
    

    </div>
  );
};

export default AllUsers;

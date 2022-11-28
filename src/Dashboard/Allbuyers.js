import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import ConfirmationModal from '../Pages/Bookings/ConfirmationModal';

const Allbuyers = () => {
    const buyers =useLoaderData();
    const [reload, setReload] = useState(true);
      const [deletingUsers, setDeletingUsers] = useState(null);
      const closeMOdal = () => {
        setDeletingUsers(null);
      };
        const handleDeleteUsers = (buyer) => {
          fetch(`http://localhost:5000/users/${buyer._id}`, {
            method: "DELETE",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                toast.success(`product ${buyer.email} deleted successfully`)
                setReload(!reload)
              }
            }, [reload]);
        }; 
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
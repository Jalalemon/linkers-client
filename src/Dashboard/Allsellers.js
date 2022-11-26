import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContexts } from '../auth/AuthProvider';
import Loading from '../Pages/Bookings/Loading';

const Allsellers = () => {
        const { user } = useContext(AuthContexts);
      const sellers = useLoaderData();
      console.log(sellers);

       
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name </th>
                <th>Role</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i+1}</th>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
                  <td>Blue</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Allsellers;
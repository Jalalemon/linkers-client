import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Allbuyers = () => {
    const buyers =useLoaderData();

    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>{buyers.length} </th>
                <th>Email</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map((buyer, i) => (
                <tr key={buyer._id}>
                  <th>{i + 1}</th>
                  <td>{buyer.email}</td>
                  <td>{buyer.role}</td>
                  <td> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Allbuyers;
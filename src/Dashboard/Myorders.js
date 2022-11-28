import React, { useContext, useEffect, useState } from 'react';
import { AuthContexts } from '../auth/AuthProvider';
import MyCart from './MyCart';

const Myorders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const {user} = useContext(AuthContexts)
   useEffect(() => {
    fetch(`https://linkers-server.vercel.app/myOrder?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
   }, [user.email])
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>no</th>
                <th>picture</th>
                <th>product Name</th>
                <th>price</th>
                <th>Location</th>
                <th>phone</th>

                <th>pay</th>
              </tr>
            </thead>
            <tbody>
              {myOrder.map((order, i) => (
                <MyCart key={order._id} i={i} order={order}>
                  {" "}
                </MyCart>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Myorders;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContexts } from '../auth/AuthProvider';
import MyCart from './MyCart';

const Myorders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const {user} = useContext(AuthContexts)
   useEffect(() => {
    fetch(`http://localhost:5000/myOrder?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
   }, [user.email])
    return (
        <div>
           {
            myOrder.map(order => <MyCart key={order._id} order={order}> </MyCart> )
           }
        </div>
    );
};

export default Myorders;
import React from 'react';
import { Link } from 'react-router-dom';

const MyCart = ({order, i}) => {
    
    return (
      <tr>
        <th>{1 + i}</th>
        <td></td>
        <td>{order.company}</td>
        <td>{order.balance}</td>
        <td>{order.address}</td>
        <td>{order.phone} </td>

        <td>
          {order.balance && !order.paid && (
            <Link to={`/dashboard/payment/${order._id}`}>
              <button className="btn btn-sm btn-primary">pay</button>
            </Link>
          )}
          ,
          {order.balance && order.paid && (
            <span className="text-primary">paid</span>
          )}
        </td>
      </tr>
    );
};

export default MyCart;
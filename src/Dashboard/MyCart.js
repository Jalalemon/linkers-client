import React from 'react';
import { Link } from 'react-router-dom';

const MyCart = ({order}) => {
    
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>no</th>
                <th></th>
                <th>product Name</th>
                <th>price</th>
                <th>address</th>
                <th>phone</th>
             
                <th>pay</th>
             
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{1}</th>
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
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyCart;
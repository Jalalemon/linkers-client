import React from 'react';

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
              </tr>
            </thead>
            <tbody>
             
                <tr >
                  <th>{1}</th>
                  <td></td>
                  <td>{order.company}</td>
                  <td>{order.balance}</td>
                  <td>{order.address}</td>
                  <td>{order.phone} </td>
                </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyCart;
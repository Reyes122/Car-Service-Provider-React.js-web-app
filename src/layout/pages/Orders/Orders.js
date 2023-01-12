import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
          const {user} = useContext(AuthContext);
          const [orders, setOrders] = useState([])

          useEffect(() => {
            if(user?.email){
                    fetch(`http://localhost:5000/orders?email=${user?.email}`)
                    .then(res => res.json())
                    .then(data => setOrders(data));
                  }
          },[user?.email])

          const handleDelete = id =>{
            const proc = window.confirm('you want to cancel this order ?');
            if(proc){
                fetch(`http://localhost:5000/orders/${id}`, {
                   method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                   console.log(data);
                   if(data.deletedCount > 0){
                     alert('deleted successfully');
                     const rem = orders.filter(odr => odr._id !== id);
                     setOrders(rem);
                   }
                })
            }
         }
         
         const handleUpdate = id =>{
          fetch(`http://localhost:5000/orders/${id}`,{
            method: 'PATCH',
            headers: {
              'content-type' : 'application/json'
            },
            body : JSON.stringify({status: "Approved"}) 
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
               const remaining = orders.filter(odr => odr._id !== id);
               const appr = orders.find(odr => odr._id === id);
               appr.status = "Approved";
               const newOr = [appr, ...remaining];
               setOrders(newOr);
            }
          })
         }
         
          return (
                    <div>
                              <h2 className="text-5xl">You have {orders?.length} orders</h2>
                              <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr> 
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
          orders.map(order => <OrderRow
          key={order._id}
          order={order}
          handleDelete={handleDelete}
          handleUpdate= {handleUpdate}
          ></OrderRow>)
        }
    </tbody>
  </table>
</div>
                    </div>
          );
};

export default Orders;
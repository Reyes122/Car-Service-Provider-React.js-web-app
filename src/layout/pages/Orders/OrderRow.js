import React, { useEffect, useState } from 'react';
import './OrderRow.css'

const OrderRow = ({order,handleDelete, handleUpdate}) => {
          const {_id,serviceName,service, price, email, customer, status} = order;
          const [serivceOrder, SetServiceOrder] = useState([]);
          useEffect(()=> {
                    fetch(`http://localhost:5000/services/${service}`)
                    .then(res => res.json())
                    .then(data => SetServiceOrder(data));
          },[service])

          return (
                    <div>
                              <tr>
                                        <th>
                                                  <label>
                                                            <button onClick={()=> handleDelete(_id)} className='btn btn-danger'>X</button>
                                                  </label>
                                        </th>
                                        <td>
                                                  <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                      <div className="mask mask-squircle w-12 h-12">
                                                                                <img src={serivceOrder.img} alt="Avatar Tailwind CSS Component" />
                                                                      </div>
                                                            </div>
                                                            <div>
                                                                      <div className="font-bold">{serviceName}</div>
                                                                      <div className="text-sm opacity-50">${price}</div>
                                                            </div>
                                                  </div>
                                        </td>
                                        <td>
                                                  {customer}
                                                  <br />
                                                  <span className="badge badge-ghost badge-sm">{email}</span>
                                        </td>
                                        <td>Indigo</td>
                                        <th>
                                                  <button onClick={()=> handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending' }</button>
                                        </th>
                              </tr>
                    </div>
          );
};

export default OrderRow;
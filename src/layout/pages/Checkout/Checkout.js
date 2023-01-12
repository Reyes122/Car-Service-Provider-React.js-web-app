import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
          const {_id, title, img, price, description} = useLoaderData();
          const {user} = useContext(AuthContext);
          const handlePlaceOrder = event => {
            event.preventDefault();
            const form = event.target;
            const name = `${form.fname.value} ${form.lname.value}`;
            const email = user?.email || 'unregistered';
            const phone = form.phone.value;
            
              const order = {
                service: _id,
                serviceName : title,
                price,
                customer: name,
                email,
                phone
              }

              fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                   'content-type' : 'application/json',
                },
                body : JSON.stringify(order)
              })
              .then(res => res.json())
              .then(data => console.log(data))
              .catch(er => console.error(er));
          }

          return (
                    <div>
                              <br /><br />
                             <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={img} alt="Album"/></figure>
  <div className="card-body">
   <h3 className="card-title">Product ID: {_id}</h3>
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <h2 className='text-4xl'>${price}</h2>
    </div>
  </div>
</div>
                              <br /><br />
                         <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 lg:grid-cols-2 gap-4  mb-5'>
                         <input name='fname' type="text" placeholder="First Name" className="input input-bordered w-full " />
                         <input name='lname' type="text" placeholder="Last Name" className="input input-bordered w-full " />
                         <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                         <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                         <button className="btn btn-warning rounded">Place Your Order</button> 
                         </form>
                         <div>    
                         </div>
                         <br /><br />    
                    </div>
          );
};

export default Checkout;
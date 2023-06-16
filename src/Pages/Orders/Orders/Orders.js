import React, { useContext, useEffect, useState } from 'react';
import OrdersRow from './OrdersRow';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Orders = () => {
  const {user} = useContext(AuthContext);
  const {email} =user;
  const [orders,setOrders] = useState([]);
  //console.log(orders);
useEffect(()=> {
  fetch(`http://localhost:5000/orders?email=${email}`)
  .then(res=>res.json())
  .then(result=> {
    setOrders(result);
  })
  .catch(error=> console.error(error))
},[email])

const handleDelete = id => {
  fetch(`http://localhost:5000/orders/${id}`,
  {
    method:"DELETE"
  })
  .then(res=>res.json())
  .then(result=> {
      if(result.deletedCount > 0){
        const newOrders = orders.filter(order => order._id !== id)
        setOrders(newOrders);
      }
  }
   )
  .catch(err=>console.error(err))
}

const handleStatusUpdate = id => {
  //console.log(id);
  const agree = window.confirm(`Are you sure to Approving the service `);
   
   if(agree) {
    fetch(`http://localhost:5000/orders/${id}`,
    {
      method:'PATCH',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify({})
    })
    .then(res=>res.json())
    .then(result=> {
      
     const remaining = orders.filter(order=> order._id !== id)
     const approving = orders.find(order=> order._id === id)
     approving.status = 'Approved';
  
     const newOrders = [approving,...remaining];
      setOrders(newOrders);
      
  
  
  
    })
    .catch(err=> console.error(err))
   }
  
}

  

  return (
    <div className="overflow-x-auto">
      
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              Delete
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
       {
        orders.map(order => <OrdersRow key={order._id}
        order={order}
        handleDelete={handleDelete}
        handleStatusUpdate={handleStatusUpdate}></OrdersRow>
        )
       }
      </tbody>
 
      
    </table>
  </div>
  );
};

export default Orders;
import React, { useContext, useEffect, useState } from 'react';
import OrdersRow from './OrdersRow';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Orders = () => {
  const {user,logout} = useContext(AuthContext);
  
  const [orders,setOrders] = useState([]);
  //console.log(orders);
useEffect(()=> {
  fetch(`https://car-doctor-server-sigma-indol.vercel.app/orders?email=${user?.email}`,{
    headers:{
      authorization : `Bearer ${localStorage.getItem('genius-token')}`
    },
  })
  .then(res=>{
   
      if (res.status === 401 || res.status === 403) {
          return logout();
      }
      return res.json()
  })
  .then(result=> {
    setOrders(result);
  })
  .catch(error=> console.error(error))
},[user?.email,logout])

const handleDelete = id => {
  fetch(`https://car-doctor-server-sigma-indol.vercel.app/orders/${id}`,
  {
    method:"DELETE",
    headers: {
      authorization : `Bearer ${localStorage.getItem('genius-token')}`
    },
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
    fetch(`https://car-doctor-server-sigma-indol.vercel.app/orders/${id}`,
    {
      method:'PATCH',
      headers:{
        'content-type' : 'application/json',
        authorization : `Bearer ${localStorage.getItem('genius-token')}`
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
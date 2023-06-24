import React, { useEffect, useState } from 'react';

const OrdersRow = ({order,handleDelete,handleStatusUpdate}) => {
  const {serviceId,customerName,price,_id,serviceName,phone,status} = order;
const [userInfo,setUserInfo] = useState([]);
const {img} = userInfo;
 
useEffect(()=> {
  fetch(`https://car-doctor-server-sigma-indol.vercel.app/services/${serviceId}`)
  .then(res=>res.json())
  .then(result=> {
    setUserInfo(result);
  })
},[serviceId])
//console.log(userInfo);
  
  return (
    
       <tr>
          <th>
          <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="w-24 rounded-xl">
                  {
                    img &&
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                  }
                  
                </div>
              </div>
              <div>
                <div className="font-bold">{serviceName}</div>
                <div className="text-sm opacity-50">Price : ${price}</div>
              </div>
            </div>
          </td>
          <td>
            {customerName}
            <br/>
            <span className="badge badge-ghost badge-sm">{phone}</span>
          </td>
          <td>Purple</td>
          <th>
            <button onClick={()=> handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
          </th>
        </tr>
   
  );
};

export default OrdersRow;
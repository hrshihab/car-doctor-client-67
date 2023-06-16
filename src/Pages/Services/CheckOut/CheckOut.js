import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Services from '../../Home/Services/Services';

const CheckOut = () => {
  const data = useLoaderData();
  const {user} = useContext(AuthContext);
  const [services,setServices] = useState(data);
  const {_id,title,price} = services;
  const {email} = user;
  //console.log(services);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.first.value} ${form.last.value}` ;
    const phone = form.phone.value;
    const message = form.message.value; 

    const userInfo = {
      serviceId : _id,
      serviceName: title,
      customerName:name,
      price:price,
      email:email,
      phone:phone,
      message:message

    }
    //console.log(userInfo);
    try {
      const response = await fetch(`http://localhost:5000/services/${_id}`,
      {
        method:"POST",
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(userInfo)
      })
      const result = await response.json();
      //console.log(result);
      if(result.acknowledged)
      {alert('successfully placed');
      form.reset();}
    } catch (error) {
      console.log(error.message);
    }

    


  }
  return (
    <div>
      <h2 className='text-xl font-semibold text-red-500 text-center pb-8'>Check Out For : {title}</h2>
      <form onSubmit={handleSubmit}  className=' bg-slate-50 lg:p-10 p-2 rounded-lg shadow-lg mb-2'>
      
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 justify-items-center mb-10  px-2'>
      <input type="text" name='first' placeholder="First Name" className="input input-bordered input-error w-full" />
      <input type="text" name='last' placeholder="Last Name" className="input input-bordered input-error w-full" />
      <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-error w-full" />
      <input type="text" name='email' defaultValue={email} readOnly  className="input input-bordered input-error w-full" />
      <textarea className="textarea textarea-error w-full col-span-2 lg:h-36  " name='message' placeholder="Write your message"></textarea>

      </div>
      
      <div className='grid justify-items-center mb-10'>
      <input type="submit" value="Submit" className='btn btn-outline btn-error  ' />

      </div>


      </form>

      
      

      
    </div>
  );
};

export default CheckOut;
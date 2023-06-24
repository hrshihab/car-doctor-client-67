import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  const [services,setServices] = useState([]);
  useEffect(()=> {
    fetch('https://car-doctor-server-sigma-indol.vercel.app/services')
    .then(res=> res.json())
    .then(data=> setServices(data))
  },[])
  return (
    <div>
      <div className=' text-center grid justify-items-center py-8 '>
      <h2 className='font-medium text-orange-600'>Service</h2>
      <h1 className='font-bold text-4xl mb-6'>Our Service Area</h1>
      <p className='font-normal text-slate-500 leading-8  lg:w-1/2  '>The majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
   
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {
          services.map(service => <ServicesCard key={service._id}
          service={service}></ServicesCard>)
        }
      </div>
      <div className='text-center py-8'>
      <button className="btn btn-outline btn-error ">More Services</button>

      </div>
       </div>
  );
};

export default Services;
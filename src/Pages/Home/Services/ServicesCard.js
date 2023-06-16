import React from 'react';

const ServicesCard = ({service}) => {
  const {title,img,description,price} = service
  return (
    <div className="card w-fit bg-base-100 shadow-xl">
    <figure><img className=' w-80 h-52' src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <p className=' text-orange-500 font-medium'>Price: ${price}</p>
        <button className="btn btn-outline btn-warning">Call Now</button>
      </div>
      

    </div>
  </div>
  );
};

export default ServicesCard;
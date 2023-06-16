import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {
  const {image,prev,next,id} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full  " style={{height:'600px'}}>
    
    <div className='img-gradient'>
    <img src={image} alt='' className="w-full" />
    </div>
    <div className="absolute flex top-1/4  mt-14 	 transform -translate-y-1/2 left-24  ">
     <h1 className='text-5xl text-white font-bold leading-snug		'>
      Affordable <br />
      Price For Car <br />
      Servicing
     </h1>
    </div>
    <div className="absolute flex top-1/2  w-2/5 	 transform -translate-y-1/2 left-24  mt-16 ">
     <h1 className='text-lg text-white font-normal '>
     There are many variations of passages of  available, but the majority have suffered alteration in some form
     </h1>
    </div>
    <div className="absolute flex top-3/4 gap-5 mt-2  	 transform -translate-y-1/2 left-24  ">
    <button className="btn btn-warning">Warning</button>
    <button className="btn btn-outline btn-warning">Warning</button>


    </div>
    <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
  );
};

export default BannerItem;
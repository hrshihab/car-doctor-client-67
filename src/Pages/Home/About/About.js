import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen py-20  ">
  <div className="hero-content flex-col lg:flex-row gap-10 ">
    <div className='w-1/2  relative '>
    <img src={person} alt='' className=" w-4/5 h-96  rounded-lg shadow-2xl" />
    <img src={parts} alt='' className='absolute w-1/2 right-5 top-3/4 rounded-lg border-white border-8'></img>
    </div>
    
    <div className='w-1/2'>
      <p className=' text-red-500 text-lg font-medium py-3' >About Us</p>
      <h1 className="text-5xl font-bold leading-tight">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="py-6 text-slate-400 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className=' text-slate-400'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. </p>
      <button className="btn btn-primary mt-6">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default About;
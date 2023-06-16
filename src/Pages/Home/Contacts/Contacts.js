import React from 'react';

const Contacts = () => {
  return (
    <footer className="footer p-10 bg-slate-800 text-white my-10 rounded-xl justify-items-center">
  <div>
    <p>We are open monday-friday</p>
    <span className="text-white font-semibold text-xl">7:00 am - 9:00 pm</span> 
   
  </div> 
  <div>
  <p>Have a question ?</p>
    <span className="text-white font-semibold text-xl">+01878 776256</span> 
 
  </div> 
  <div>
  <p>Need a repair?our address</p>
    <span className="text-white font-semibold text-xl">Gollamari,Khulna</span> 

  </div>
</footer>
  );
};

export default Contacts;
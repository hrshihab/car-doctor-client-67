import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../../../Jwt/Auth';


const SocialSignIn = () => {
  const {gSignin} = useContext(AuthContext);
  const [error,setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const googleSingin = () => {
    gSignin()
    .then(res=> {
      const user = res.user;
      //console.log(user);
      setError('');
      auth(user);
      navigate(from,{replace:true});
    })
    .catch(error=>{
      setError(error.message);
    })
  }
  return (
    <>
            
    <FcGoogle className=" hover:cursor-pointer" onClick={googleSingin} />
  </>
  );
};

export default SocialSignIn;
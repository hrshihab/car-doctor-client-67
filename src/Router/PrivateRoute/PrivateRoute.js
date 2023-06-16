import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
  if(loading) {
    return <div><h1>Loading...</h1></div>
  }
  if(user?.uid) return children;
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
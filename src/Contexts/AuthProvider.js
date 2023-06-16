import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext([]);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth,newUser=> {
         console.log(newUser);
         setUser(user);
         setLoading(false)
    })
    return ()=> {
      unsubscribe();
    }
  },[])
  const authInfo = {
    createUser,
    loading,
    setLoading,
    user,
    signInUser
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {
        children
      }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
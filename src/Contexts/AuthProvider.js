import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext([]);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const gProvider = new GoogleAuthProvider();

  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }
  const gSignin = () => {
    return signInWithPopup(auth,gProvider);
  }
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth,newUser=> {
         
         setUser(newUser);
         //console.log(user);
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
    signInUser,
    gSignin,
    logout
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
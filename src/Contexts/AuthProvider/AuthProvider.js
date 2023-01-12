import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
          const [user,setUser] = useState(null);
          const [loading, SetLoading] = useState(true);
         

          const createUser = (email, password) => {
               SetLoading(true);
                    return createUserWithEmailAndPassword(auth, email, password);
          }

          const login = (email, password) => {
               SetLoading(true);
               return signInWithEmailAndPassword(auth, email, password);
          }

          useEffect(() => {
                    const unsubscribe = onAuthStateChanged(auth, currentUser => {
                              console.log(currentUser);
                              setUser(currentUser);
                              SetLoading(false);
                    });

                    return () => {
                              return unsubscribe();
                    }
          }, [])
         
          const authInfo = {
                    user,
                    createUser,
                    login,
                    loading

          }
          return (
                    <AuthContext.Provider value={authInfo}>
                         {children} 
                    </AuthContext.Provider>
          );
};

export default AuthProvider;
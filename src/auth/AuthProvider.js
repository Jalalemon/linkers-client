import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.init';
export const AuthContexts = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const updateUser = (infoUser) => {
      setLoading(true);
      return updateProfile(auth.currentUser, infoUser);
    };
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unSubscribe();
    }, []);

      const info = { signIn, user, logOut, updateUser, loading, createUser };
    return (
      <div>
        <AuthContexts.Provider value={info}>{children}</AuthContexts.Provider>
      </div>
    );
};

export default AuthProvider;
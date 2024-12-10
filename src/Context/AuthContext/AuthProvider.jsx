import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.init';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [Loading, setLoading] = useState(true)

    const registerUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        user,
        Loading,
        registerUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
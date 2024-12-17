import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import axios from 'axios';



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [Loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    const handleGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const registerUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('captured user', currentUser?.email)
            if(currentUser?.email){
                const user = {email: currentUser.email}
                axios.post('https://dream-desk-server.vercel.app/jwt', user, {withCredentials:true})
                .then(res=> {
                    console.log(res.data)
                    setLoading(false)
                })
            }
            else{
                axios.post('https://dream-desk-server.vercel.app/logout', {},{withCredentials:true})
                .then(res =>{
                    console.log(res.data)
                    setLoading(false)
                })
            }
            // else{
            //     axios.post('https://dream-desk-server.vercel.app/logout', {}, {withCredentials:true})
            //     .then(res=> {
            //         console.log('logout',res.data)
            //         setLoading(false)

            //     })
            // }
            

            
        })
        return ()=>{
            unsubscribe()
        };
    }, []);


    const authInfo = {
        user,
        Loading,
        registerUser,
        logInUser,
        signOutUser,
        handleGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
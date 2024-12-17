import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();


    if(loading){
        return <p>Loading...</p>
    }

    if(user){
        return children;
    }
    
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivateRoute;
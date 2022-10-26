import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Private = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    let location = useLocation();
    if (loading) return <div><h1>Loading</h1></div>
    if (user && user.uid) {
        return children
    }


    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;
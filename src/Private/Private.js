import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Private = ({ children }) => {




    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    if (user) {
        return children;
    }
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Private;
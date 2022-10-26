import React, { createContext, useEffect } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';
import { useState } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app);
const UserContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);



    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const SignInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const SignInGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, SignInGoogle, SignInGithub, setLoading, logIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContext;
import React, { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const AuthContext = createContext()
const auth = getAuth(app);
const UserContext = ({ children }) => {
    const user = { displayName: "Hello" }


    const googleProvider = new GoogleAuthProvider();
    const SignInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = { user, SignInGoogle };
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContext;
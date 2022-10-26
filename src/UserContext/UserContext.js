import React, { createContext } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const AuthContext = createContext()
const auth = getAuth(app);
const UserContext = ({ children }) => {
    const user = { displayName: "Hello" }


    const googleProvider = new GoogleAuthProvider();

    const gitProvider = new GithubAuthProvider();
    const SignInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const SignInGithub = () => {
        return signInWithPopup(auth, gitProvider);
    }

    const authInfo = { user, SignInGoogle, SignInGithub };
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContext;
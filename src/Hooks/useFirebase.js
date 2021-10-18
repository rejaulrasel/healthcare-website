import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(' ');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })


        .catch(err => {
            setError(err.message);
            console.log(err.message);
        })

    }
    
    return{
        user,
        error,
        signInUsingGoogle,
    }

}

export default useFirebase;
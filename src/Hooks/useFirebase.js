import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        setError('')
        .then(result => {
            setUser(result.user)
        })

        .catch(err => {
            setError(err.message);
        })

    }
    const signUpUsingEmail = (e) => {
        e.preventDefault()
        setError('')
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            
        })

        .catch(err => {
            setError(err.message);
           
        })
    }

    const signInUsingEmail = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
        })

        .catch(err => {
            setError(err.message)
        })
    }

    const logout = () => {
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .catch(err => {
            setError(err.message);
        })
    }
    
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log('inside state changed', user);
                setUser(user);
            }
        })
    },[])

    
    
    return{
        user,
        error,
        signInUsingGoogle,
        getEmail,
        getPassword,
        signUpUsingEmail,
        logout,
        signInUsingEmail,
        
    }

}

export default useFirebase;
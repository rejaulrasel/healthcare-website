import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })

        .catch(err => {
            setError(err.message);
        })
        .finally(() => setIsLoading(false))

    }
    const signUpUsingEmail = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            
        })

        .catch(err => {
            setError(err.message);
           
        })
        .finally(() => {
                setIsLoading(false)
        })
    }

    const signInUsingEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
        })

        
        .catch(err => {
            setError(err.message)
        })

        .finally( () => {
            setIsLoading(false)
        })
    }

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .catch(err => {
            setError(err.message);
        })
        .finally(() => setIsLoading(false))
    }
    
    
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                console.log('inside state changed', user);
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })

        return () => unsubscribed;
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
        isLoading,
        
    }

}

export default useFirebase;
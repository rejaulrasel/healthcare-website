import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin,setIsLogin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const getEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
            setError('')
        })

        .catch(err => {
            setError(err.message);
            console.log(err.message);
        })

    }
    const signInUsingEmail = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
            setError('')
        })

        .catch(err => {
            setError(err.message);
            console.log(err.message);
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

    const toggleLogin = (e) => {
        console.log(e.target.checked)
        setIsLogin(e.target.checked)
    }
    
    return{
        user,
        error,
        signInUsingGoogle,
        getEmail,
        getPassword,
        signInUsingEmail,
        logout,
        toggleLogin,
        setIsLogin,
    }

}

export default useFirebase;
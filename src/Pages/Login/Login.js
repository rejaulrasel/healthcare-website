import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <div>
            <h1>log in</h1>
            <button onClick={signInUsingGoogle}>google</button>
        </div>
    );
};

export default Login;
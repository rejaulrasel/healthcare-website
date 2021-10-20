import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
const Login = () => {
    const { user, signInUsingGoogle, getEmail, getPassword, signInUsingEmail, error } = useAuth();
    return (
        <div className='container-xl bg-dark text-white pb-5'>
            <h1 className='text-center'><span className='text-light'><i className="fas fa-sign-in-alt"></i></span> Please Log In</h1>

            {!error ? <div className="text-center mt-5">
                {user.email ? <h4>You have Succesfully Login!!</h4> : <h4>You have Succesfully Logout</h4>}
            </div>
            :
            <h4 className='mt-4  w-50  p-2 rounded-4 text-danger'><i className="fas fa-exclamation-circle me-2"></i>{error}</h4>
            }
            <form onSubmit={signInUsingEmail} className='px-5 py-4'>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-12 col-md-8">
                        <input onBlur={getEmail} type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-12 col-md-8">
                        <input onBlur={getPassword} type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <h5>New User? <Link to='/register'>Register</Link></h5>
                    </div>
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning">Sign in</button>
                </div>
            </form>
            <div className="text-center">
                <button onClick={signInUsingGoogle} className='btn btn-warning fs-5'><i className="fab fa-google me-2"></i>Sign in with Google</button>
            </div>


        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, getEmail, getPassword, signUpUsingEmail, error } = useAuth();
    return (
        <div className='container-xl bg-dark text-white pb-5'>
            <h1 className='text-center'><span className='text-light'><i className="fas fa-sign-in-alt"></i></span> Please Register</h1>
            <h3 className='text-light  w-100'>{error}</h3>
            <form onSubmit={signUpUsingEmail} className='px-5 py-4'>
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
                <h5>Already Have an Account <Link to='/login'>Log In</Link></h5>
                    </div>
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-warning"><i className="fas fa-user-plus me-2"></i>Sign up</button>
                </div>
            </form>
            <div className="text-center">
                <button onClick={signInUsingGoogle} className='btn btn-warning fs-5'><i className="fab fa-google me-2"></i>Sign in with Google</button>
            </div>


        </div>
    );
};

export default Register;
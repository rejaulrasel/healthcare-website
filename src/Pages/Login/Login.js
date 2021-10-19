import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
const Login = () => {
    const { signInUsingGoogle,getEmail,getPassword, signInUsingEmail,error} = useAuth();
    return (
        <div className='container-xl bg-dark text-white pb-5'>
            <h3 className='text-light  w-100'>{error}</h3>
            <form onSubmit={signInUsingEmail} className='px-5 py-4'>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-7">
                        <input onBlur={getEmail} type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-7">
                        <input onBlur={getPassword} type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
        <Link to='/register'>
                <h6 className='text-white'>New User?</h6>
            </Link>
        </label>
      </div>
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
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
        return <div className='text-center my-5'>
            <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
        </div>
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    (user?.email || user?.displayName) ?
                        children
                        :
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                        >
                        </Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;
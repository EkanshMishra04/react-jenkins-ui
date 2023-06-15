import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function LoginButton() {
  const {
    user, loginWithRedirect, isAuthenticated, logout,
  } = useAuth0();
  console.log('current user is ', user);
  return (
    <>
      {isAuthenticated ? (

        <button className="btn btn-danger" onClick={() => logout()}>
          {user.name}
          {' '}
          Logout
        </button>
      )
        : <button className="btn btn-success" onClick={() => loginWithRedirect()}>Log In</button>}
    </>
  );
}

export default LoginButton;

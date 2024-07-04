import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginButton from './LoginButton';

const LoginViaGoogle = () => {
  const handleLoginSuccess = (response: any) => {
    console.log('Login Success:', response);
    // Here you can handle the successful login, e.g., save the token, get user info, etc.
  };

  const handleLoginFailure = (response: any) => {
    console.error('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId="363865327063-l00llh6dcje29dtkhsup81arop3dmahs.apps.googleusercontent.com">
      <div className="App">
        <LoginButton
          onLoginSuccess={handleLoginSuccess}
          onLoginFailure={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginViaGoogle;

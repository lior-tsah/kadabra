import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginButton from './LoginButton';

const LoginViaGoogle = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // Here you can handle the successful login, e.g., save the token, get user info, etc.
  };

  const handleLoginFailure = (response) => {
    console.error('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
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

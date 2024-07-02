import React, { useEffect } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const LoginButton = ({ onLoginSuccess, onLoginFailure }: any) => {
  const login = useGoogleLogin({
    onSuccess: onLoginSuccess,
    onError: onLoginFailure,
  });

  return (
    <div>
      <button onClick={() => login()}>Login with Google</button>
    </div>
  );
};

export default LoginButton;

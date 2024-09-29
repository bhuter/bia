import React from 'react';
import Head from 'next/head';
import LoginForm from '@/app/comps/forms/loginForm';

const Login: React.FC = () => {
  return (
    <div>
      <head>
        <title>Login - Bia The African Touch</title>
      </head>
      {/** login form */}
      <LoginForm />
     
    </div>
  );
};

export default Login;

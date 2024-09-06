// pages/_app.tsx

"use client";

import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Preloader from '../comps/forms/Preloader'; // Ensure this path is correct

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
    };

    // Simulate loading delay for demonstration
    const timer = setTimeout(handleComplete, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <Component {...pageProps} />}
    </>
  );
};

export default MyApp;

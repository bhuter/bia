// components/Preloader.tsx

import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full animate-pulse-custom"></div>
    </div>
  );
};

export default Preloader;

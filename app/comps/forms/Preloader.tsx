// components/Preloader.tsx

import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex space-x-4">
        <div className="fabric-roll bg-yellow-500"></div>
        <div className="fabric-roll bg-yellow-400"></div>
        <div className="fabric-roll bg-yellow-300"></div>
      </div>
    </div>
   
  );
};

export default Preloader;

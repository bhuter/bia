import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative p-6'>
    <div className="loader">
      <span className="span"></span>
      <span className="span"></span>
      <span className="span"></span>
      <span className="span"></span>
    </div>
      <style jsx>{`
        @keyframes loader {
          0%, 100% {
            width: 25px;
            height: 25px;
          }
          50% {
            width: 40px;
            height: 40px;
          }
        }
        @keyframes loaderBlock {
          0%, 30% { 
            transform: rotate(0);
          }
          55% {
            background-color: #F37272;
          }
          100% {
            transform: rotate(90deg);
          }
        }
        @keyframes loaderBlockInverse {
          0%, 20% { 
            transform: rotate(0);
          }
          55% {
            background-color: #F37272;
          }
          100% {
            transform: rotate(-90deg);
          }
        }
        .loader {
          position: relative;
          width: 25px;
          height: 25px;
          animation: loader 1.2s infinite ease-in-out;
        }
        .span {
          position: absolute;
          display: block;
          width: 20px;
          height: 20px;
          background-color: #EE4040;
          animation: loaderBlock 1.2s infinite ease-in-out both;
        }
        .span:nth-child(1) {
          top: 0;
          left: 0;
        }
        .span:nth-child(2) {
          top: 0;
          right: 0;
          animation: loaderBlockInverse 1.2s infinite ease-in-out both;
        }
        .span:nth-child(3) {
          bottom: 0;
          left: 0;
          animation: loaderBlockInverse 1.2s infinite ease-in-out both;
        }
        .span:nth-child(4) {
          bottom: 0;
          right: 0;
        }
      `}</style>
    
  </div>
  );
};

export default Preloader;

// src/components/Loading.jsx
import React from 'react';
import './Loading.css'; // Import the CSS file

const Loading = () => {
  // Function to split the text into spans with animation delays
  const splitTextWithDelay = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
        {char}
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mt-16 font-mono">
      <p className="text-center font-bold text-4xl text-amber-500 mb-4 animated-text">
        {splitTextWithDelay('Loading...')}
      </p>
      <img 
        src="https://superstorefinder.net/support/wp-content/uploads/2018/01/orange_circles.gif"
        alt="Loading..." 
        className="w-[80vw] h-[80vh] object-contain" 
      />
    </div>
  );
};

export default Loading;

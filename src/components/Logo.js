import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
    <span className="logo-text">MyShop</span>
    <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 11.5L2 18V9l10 5 10-5v9l-10 5z"/>
    </svg>
  </div>
  );
};

export default Logo;

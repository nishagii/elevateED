import React from 'react';
import './NavigationItem.css';

export const NavigationItem = ({ icon, text, count }) => {
  return (
    <div className="navigationItem">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="navigationIcon"
      />
      <div className="navigationText">{text}</div>
      {count !== undefined && <div className="cartCount">{count}</div>}
    </div>
  );
};

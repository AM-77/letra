import React from 'react';
import './style.css';

export default function Loader() {
  return (
    <div className="loader">
      <img
        className="logo"
        src={`${process.env.PUBLIC_URL}/logo.svg`}
        alt="letra logo"
      />
      <div className="dots">
        <i className="dot" />
        <i className="dot" />
        <i className="dot" />
      </div>
    </div>
  );
}

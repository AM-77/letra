import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="code">404</p>
      <h1 className="status">Page Not Found</h1>
      <Link to="/">Go Back To Home</Link>
    </div>
  );
}

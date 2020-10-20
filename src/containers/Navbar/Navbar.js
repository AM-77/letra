import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import logo from '../../assets/logo.svg';
import './style.css';

export default function Navbar() {
  const renderAlpha = () => {
    const alpha = [];
    let i = 0;
    while (i < 26) {
      const letter = (i + 10).toString(36);
      alpha.push(
        <NavLink
          key={i}
          activeClassName="active"
          className="alpha"
          to={`/artists/${letter}`}
        >
          {letter.toUpperCase()}
        </NavLink>
      );
      i += 1;
    }
    alpha.push(
      <NavLink
        key={26}
        activeClassName="active"
        className="alpha"
        to="/artists/*"
      >
        #
      </NavLink>
    );
    return alpha;
  };

  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="letra logo" />
        </Link>
      </div>
      <div className="alphabets">{renderAlpha()}</div>
      <SearchForm />
    </div>
  );
}

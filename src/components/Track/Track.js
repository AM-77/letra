import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

export default function Track({ track: { link, title } }) {
  return (
    <Link className="track" to={link}>
      {title}
    </Link>
  );
}

Track.propTypes = {
  track: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

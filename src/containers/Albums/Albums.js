import React from 'react';
import PropTypes from 'prop-types';
import Album from '../../components/Album/Album';

export default function Albums({ albums }) {
  return (
    <div className="albums">
      {albums.map((album, index) => (
        <Album album={album} key={index} />
      ))}
    </div>
  );
}

Albums.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      year: PropTypes.string,
      tracks: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string,
          title: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

export default function HotAlbums({ hotAlbums }) {
  const { REACT_APP_SOURCE } = process.env;
  const renderAlbum = (hotAlbum, index) => {
    const { artist, album, artwork, link } = hotAlbum;
    return (
      <Link className="album" key={index} to={link}>
        <h4 className="artist">{artist}</h4>
        <p className="title">{album}</p>
        <div className="artwork">
          <img src={`${REACT_APP_SOURCE}${artwork}`} alt="album artwork" />
        </div>
      </Link>
    );
  };

  return (
    <div className="hotalbums">
      <h2 className="title">Top Trending Albums</h2>
      <div className="albums">
        {hotAlbums.map((album, index) => renderAlbum(album, index))}
      </div>
    </div>
  );
}

HotAlbums.propTypes = {
  hotAlbums: PropTypes.arrayOf(
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

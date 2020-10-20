import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

export default function HotSongs({ hotSongs }) {
  const renderSong = (song, index) => {
    const { artist, artistLink, title, titleLink } = song;
    return (
      <div key={index} className="song">
        <Link className="artist" to={artistLink}>
          {artist}
        </Link>
        <Link className="title" to={titleLink}>
          {title}
        </Link>
      </div>
    );
  };

  return (
    <div className="hotsongs">
      <h2 className="title">Top Trending Songs</h2>
      <div className="songs">
        {hotSongs.map((song, index) => renderSong(song, index))}
      </div>
    </div>
  );
}

HotSongs.propTypes = {
  hotSongs: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

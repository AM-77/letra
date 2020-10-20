import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import Track from '../Track/Track';
import './style.css';

export default function Album({ album }) {
  if (album) {
    return (
      <div className="album">
        <div className="title">
          <h1>
            {album.title !== 'other songs' ? (
              <>
                <span className="name">{album.title}</span>
                <span className="year">{album.year}</span>
              </>
            ) : (
              <span className="name">other songs</span>
            )}
          </h1>
        </div>
        <div className="tracks">
          {album.tracks.map((track, index) => (
            <Track track={track} key={index} />
          ))}
        </div>
      </div>
    );
  }

  return <Loader />;
}

Album.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        title: PropTypes.string,
      })
    ),
  }).isRequired,
};

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import './style.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      artists: [],
      albums: [],
      tracks: [],
    };
  }

  componentDidMount() {
    const { REACT_APP_BASE_URL } = process.env;
    const {
      match: {
        params: { lookingFor },
      },
      history,
    } = this.props;
    Axios.get(`${REACT_APP_BASE_URL}/search/${lookingFor}`)
      .then((res) => {
        this.setState({ ...res.data, isLoading: false });
      })
      .catch(() => history.push('/notfound'));
  }

  renderTracks = (tracks) => {
    if (tracks.length === 0) {
      return <p className="no-result">Nothing was found.</p>;
    }
    return tracks.map(({ title, titleLink, artist, artistLink }, index) => (
      <div key={index} className="found-track">
        <Link className="track" to={titleLink}>
          {title}
        </Link>
        <Link className="artist-name" to={artistLink}>
          {artist}
        </Link>
      </div>
    ));
  };

  renderAlbums = (albums) => {
    if (albums.length === 0) {
      return <p className="no-result">Nothing was found.</p>;
    }
    return albums.map(({ album, artist, link }, index) => (
      <div key={index} className="found-album">
        <p className="album">{album}</p>
        <Link className="artist-name" to={link}>
          {artist}
        </Link>
      </div>
    ));
  };

  renderArtists = (artists) => {
    if (artists.length === 0) {
      return <p className="no-result">Nothing was found.</p>;
    }
    return artists.map(({ name, link }, index) => (
      <div key={index} className="found-artist">
        <Link className="artist-name" to={link}>
          {name}
        </Link>
      </div>
    ));
  };

  render() {
    const { isLoading, tracks, albums, artists } = this.state;
    return (
      <div className="search">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="tracks">
              <h2>Tracks</h2>
              {this.renderTracks(tracks)}
            </div>

            <div className="albums">
              <h2>Albums</h2>
              {this.renderAlbums(albums)}
            </div>

            <div className="artists">
              <h2>Artists</h2>
              {this.renderArtists(artists)}
            </div>
          </>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      lookingFor: PropTypes.string,
    }),
  }).isRequired,
};

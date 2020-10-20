import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';

import './style.css';

export default class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { artist, track },
      },
      history,
    } = this.props;
    const { REACT_APP_BASE_URL } = process.env;
    Axios.get(`${REACT_APP_BASE_URL}/lyrics/${artist}/${track}`)
      .then((res) => {
        this.setState({ lyrics: res.data, isLoading: false });
      })
      .catch(() => history.push('/notfound'));
  }

  renderLyrics = () => {
    const {
      lyrics: { lyrics },
    } = this.state;
    return lyrics.map((line, index) => (
      <p className="line" key={index}>
        {line}
      </p>
    ));
  };

  render() {
    const {
      isLoading,
      lyrics: { title, artist, artistLink },
    } = this.state;
    return (
      <div className="lyrics">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {artistLink ? (
              <Link className="artistLink" to={artistLink}>
                <h2 className="artist">{artist}</h2>
              </Link>
            ) : (
              <h2 className="artist">{artist}</h2>
            )}

            <h4 className="title">{title}</h4>
            <div className="lines">{this.renderLyrics()}</div>
          </>
        )}
      </div>
    );
  }
}

Lyrics.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      track: PropTypes.string,
      artist: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

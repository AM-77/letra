import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import './style.css';

export default class ArtistsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistsList: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { start },
      },
      history: { listen },
    } = this.props;
    this.loadArtistsList(`artists/${start}`);
    listen(({ pathname }) => {
      this.loadArtistsList(pathname);
    });
  }

  loadArtistsList = (link) => {
    const { REACT_APP_BASE_URL } = process.env;
    const {
      history: { push },
    } = this.props;
    this.setState({ isLoading: true }, () => {
      Axios.get(`${REACT_APP_BASE_URL}${link}`)
        .then((res) => {
          this.setState({ artistsList: res.data, isLoading: false });
        })
        .catch(() => push('/notfound'));
    });
  };

  render() {
    const { isLoading, artistsList } = this.state;
    return (
      <div className="artists">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h2>Artists List</h2>
            <div className="artists-list">
              {artistsList.map(({ name, link }, index) => (
                <div className="artist-item" key={index}>
                  <Link to={link}>{name}</Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

ArtistsList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      start: PropTypes.string,
    }),
  }).isRequired,
};

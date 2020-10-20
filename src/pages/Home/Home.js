import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import HotSongs from '../../containers/HotSongs/HotSongs';
import HotAlbums from '../../containers/HotAlbums/HotAlbums';
import './style.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      hotAlbums: [],
      hotSongs: [],
    };
  }

  componentDidMount() {
    const { REACT_APP_BASE_URL } = process.env;
    const { history } = this.props;
    Axios.get(REACT_APP_BASE_URL)
      .then((res) => {
        const { hotsongs, hotalbums } = res.data;
        this.setState({
          hotSongs: hotsongs,
          hotAlbums: hotalbums,
          isLoading: false,
        });
      })
      .catch(() => history.push('/notfound'));
  }

  render() {
    const { isLoading, hotSongs, hotAlbums } = this.state;
    return (
      <div className="home">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="hot">
              <HotAlbums hotAlbums={hotAlbums} />
            </div>
            <div className="hot">
              <HotSongs hotSongs={hotSongs} />
            </div>
          </>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

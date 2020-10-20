import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import Albums from '../../containers/Albums/Albums';
import './style.css';

export default class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { REACT_APP_BASE_URL } = process.env;
    const {
      match: { url },
      history: { push },
    } = this.props;
    Axios.get(`${REACT_APP_BASE_URL}${url}`)
      .then((res) => {
        const { name, albums } = res.data;
        this.setState({ name, albums, isLoading: false });
      })
      .catch(() => push('/notfound'));
  }

  render() {
    const { name, albums, isLoading } = this.state;
    return (
      <div className="artist">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h2 className="name">{name}</h2>
            <Albums albums={albums} />
          </>
        )}
      </div>
    );
  }
}

Artist.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

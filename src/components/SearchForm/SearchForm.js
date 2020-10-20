import React, { Component } from 'react';
import { ReactComponent as Loupe } from '../../assets/loupe.svg';
import './style.css';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lookingFor: '',
    };
  }

  onInputChange = (e) => {
    const key = e.charCode || e.which || e.keyCode || 0;
    if (key === 13) {
      this.search(e);
    } else {
      const { value } = e.target;
      this.setState({ lookingFor: value });
    }
  };

  search = (e) => {
    e.preventDefault();
    const { lookingFor } = this.state;
    if (lookingFor) {
      window.location = `/search/${lookingFor}`;
    }
  };

  render() {
    const { lookingFor } = this.state;
    return (
      <form onSubmit={this.search} className="search-form">
        <input
          className="search-input"
          type="text"
          value={lookingFor}
          onChange={this.onInputChange}
          placeholder="Artist, Album, track's title or Lyrics"
        />
        <button type="submit" onClick={this.search}>
          <Loupe />
        </button>
      </form>
    );
  }
}

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3> {song.title}</h3>
        <LyricCreate songId={song.id} />
        <LyricList lyrics={song.lyrics} />
      </div>
    );
  }
}

export default graphql(query, {
  options: (props) => {
    return { variables: { id: props.match.params.id } };
  },
})(SongDetail);

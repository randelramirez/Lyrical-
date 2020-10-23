import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import React, { Component } from 'react';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
    });

    this.setState({ content: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label htmlFor="lyric">Add a Lyric</label>
        <input
          id="lyric"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

/*
We added id on the returned lyrics so that the newly created lyric appear on the screen 
(updates the UI and include the new lyric) 

See also: index.js {
  dataIdFromObject: (o) => o.id,
}

we can also use  refetchQueries: [{ query }] but this one will make another network request query to refresh the data

we also added likes because we added likes on the fetchSongs query and because of that it no longer update
the UI automatically if we don't add likes here as well

*/
const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);

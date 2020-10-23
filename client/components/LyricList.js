import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  constructor(props) {
    super(props);
  }

  /*
    We added the likes as parameter for optimistic ui update
    without the optimistic ui update when the user clicks the like button there is a delay before the UI updates
    that's because the request goes through the server and then it updates the UI after updating the likes in the server
    we also added the optimisticResponse property on the mutation
  */
  onLike(id, likes) {
    this.props.mutate({
      variables: {
        id,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => {
                this.onLike(id, likes);
              }}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  }

  render() {
    if (!this.props.lyrics.length > 0) return <p>Add lyrics</p>;
    return (
      <React.Fragment>
        Lyrics <ul className="collection">{this.renderLyrics()}</ul>
      </React.Fragment>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);

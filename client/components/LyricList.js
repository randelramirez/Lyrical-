import React, { Component } from 'react';

class LyricList extends Component {
  constructor(props) {
    super(props);
  }

  renderLyrics() {
    return this.props.lyrics.map((lyric) => {
      return (
        <li className="collection-item" key={lyric.id}>
          {lyric.content}
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

export default LyricList;

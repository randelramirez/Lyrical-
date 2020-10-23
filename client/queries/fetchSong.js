import gql from 'graphql-tag';

/*
    NOTE: 
    We added the query for the lyrics here since LyricList component is insde the SongDetail which uses this query as well
    Because of that, we no longer need to make another query for getting the lyrics
    We can also just pass down the data from SongDetail down to LyricList component

*/
export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

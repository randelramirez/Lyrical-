import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'; // communicates to the actual graphql server
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import SongCreate from './components/SongCreate';

// this is safe if we're using mongodb because all ids are unique across collections
const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route path="/" component={App} exact children={<SongList />} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));

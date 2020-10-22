import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'; // communicates to the actual graphql server
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route path="/" component={App} exact children={<SongList />} />
          <Route path="/song/new" component={SongCreate} exact />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));

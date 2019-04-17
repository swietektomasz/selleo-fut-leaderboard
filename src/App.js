import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TournamentList from './containers/TournamentList/TournamentList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path={'/tournaments'} component={TournamentList} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

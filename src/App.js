import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Tournament from './containers/Tournament'
import Stats from './containers/Stats'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="content-body">
            <div className="navbar-container">
              <Navbar />
            </div>
            <div className="content">
              <Switch>
                <Route component={Tournament} path={'/tournaments'} />
                <Route component={Stats} path={'/stats'} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

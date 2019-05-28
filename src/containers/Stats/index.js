import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import List from './List'
import Show from './Show'

export default class Stats extends Component {
  render() {
    return (
      <Switch>
        <Route component={Show} path={'/stats/:player'} />
        <Route component={List} path={'/stats'} />
      </Switch>
    )
  }
}

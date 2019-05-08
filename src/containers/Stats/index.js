import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import List from './List'

export default class Stats extends Component {
  render() {
    return (
      <Switch>
        <Route component={List} path={'/stats'} />
      </Switch>
    )
  }
}

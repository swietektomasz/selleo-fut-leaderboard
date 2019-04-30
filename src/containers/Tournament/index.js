import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import List from './List'
import Show from './Show'

export default class Tournament extends Component {
  render() {
    return (
      <Switch>
        <Route component={Show} path={'/tournaments/:id'} />
        <Route component={List} path={'/tournaments'} />
      </Switch>
    )
  }
}

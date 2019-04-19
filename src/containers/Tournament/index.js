import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import List from './List'

export default class Tournament extends Component {
  render() {
    return (
      <Switch>
        <Route component={List} path={'/tournaments'} />
      </Switch>
    )
  }
}

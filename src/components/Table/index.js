import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Body from './Body'
import Header from './Header'

export default class Table extends Component {
  render() {
    const { body } = this.props
    if (body.length !== 8) {
      return (
        <div>
          <Header />
          {body.map((data, index) => {
            return <Body body={data} key={index} />
          })}
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <Body body={body} />
        </div>
      )
    }
  }
}

Table.propTypes = {
  body: PropTypes.array,
}

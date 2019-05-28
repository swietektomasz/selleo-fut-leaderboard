import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Body extends Component {
  render() {
    const { body } = this.props
    return (
      <div>
        <div className="table-row">
          {body.map((col, index) => {
            return (
              <div className="column" key={index}>
                {col}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

Body.propTypes = {
  body: PropTypes.array,
}

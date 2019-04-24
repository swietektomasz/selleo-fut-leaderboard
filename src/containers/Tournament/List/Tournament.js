import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tournament extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__header">
          <div className="card__title">
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <div className="card__summary">{this.props.description}</div>
        <div className="card__meta">{this.props.date}</div>
      </div>
    )
  }
}

Tournament.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
}

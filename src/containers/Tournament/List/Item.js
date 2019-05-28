import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

export class Item extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="card" onClick={() => history.push(`/tournaments/${this.props.id}`)}>
        <div className="card__header">
          <div className="card__title">
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <div className="card__summary">{this.props.date}</div>
        <div className="card__meta">{this.props.date}</div>
      </div>
    )
  }
}

export default withRouter(Item)

Item.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  history: PropTypes.object,
}

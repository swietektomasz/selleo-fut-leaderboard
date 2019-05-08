import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { getStats } from '../../../store/tournaments/actions'

class List extends Component {
  componentDidMount = () => {
    this.props.getStats()
  }

  render() {
    const { stats, loading, error, history } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>Error</div>
    }

    return (
      <div className="container">
        <div className="cards">
          {Object.entries(stats).map(player => (
            <div
              className="match__header"
              key={player[0]}
              onClick={() => history.push(`/stats/${player[0]}`)}
            >
              <div className="match__title">
                <h3>{player[0]}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ tournaments: { stats, loading, error } }) => {
  return {
    stats,
    loading,
    error,
  }
}

const mapDispatchToProps = {
  getStats,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(List),
)

List.propTypes = {
  getStats: PropTypes.func,
  stats: PropTypes.object,
}

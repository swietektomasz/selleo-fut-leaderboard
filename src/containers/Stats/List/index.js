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
          {Object.entries(stats).map(([playerName]) => (
            <div
              className="match__header"
              key={playerName}
              onClick={() => history.push(`/stats/${playerName}`, playerName)}
            >
              <div className="match__title">
                <h3>{playerName}</h3>
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
  error: PropTypes.bool,
  getStats: PropTypes.func,
  history: PropTypes.object,
  loading: PropTypes.bool,
  stats: PropTypes.object,
}

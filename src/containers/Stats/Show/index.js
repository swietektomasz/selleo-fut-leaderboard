import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getPlayerStats } from '../../../store/tournaments/actions'
import Table from './Table'

class Show extends Component {
  componentDidMount = () => {
    const {
      getPlayerStats,
      match: {
        params: { player },
      },
    } = this.props

    getPlayerStats(player)
  }

  render() {
    const { loading, error, playerStats } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>Error</div>
    }
    return (
      <div className="matches">
        {playerStats.map(stats => <Table key={Object.keys(stats)} stats={stats} />)}
      </div>
    )
  }
}

const mapStateToProps = ({ tournaments: { playerStats, loading, error } }) => {
  return {
    playerStats,
    loading,
    error,
  }
}

const mapDispatchToProps = {
  getPlayerStats,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Show),
)

Show.propTypes = {
  error: PropTypes.bool,
  getPlayerStats: PropTypes.func,
  history: PropTypes.object,
  loading: PropTypes.bool,
  playerStats: PropTypes.array,
}

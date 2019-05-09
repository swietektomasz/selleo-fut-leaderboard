import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getPlayerStats } from '../../../store/tournaments/actions'

class Show extends Component {
  componentDidMount = () => {
    const { getPlayerStats } = this.props

    getPlayerStats('BB')
  }

  render() {
    const { loading, error, stats } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>Error</div>
    }

    return <div className="matches" />
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
  getPlayerStats,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Show),
)

Show.propTypes = {
  getPlayerStats: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}

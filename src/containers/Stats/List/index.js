import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getStats, getTournaments } from '../../../store/tournaments/actions'
import Players from './Players'
import Summary from './Summary'

class List extends Component {
  componentDidMount = () => {
    this.props.getStats()
    this.props.getTournaments()
  }

  render() {
    const { stats, loading, error, summary } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>Error</div>
    }

    return (
      <div className="container">
        <Players stats={stats} />
        <div className="separator" />
        <Summary stats={summary} />
      </div>
    )
  }
}

const mapStateToProps = ({ tournaments: { stats, loading, error, summary } }) => {
  return {
    stats,
    loading,
    error,
    summary,
  }
}

const mapDispatchToProps = {
  getStats,
  getTournaments,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)

List.propTypes = {
  error: PropTypes.bool,
  getStats: PropTypes.func,
  getTournaments: PropTypes.func,
  loading: PropTypes.bool,
  summary: PropTypes.object,
  stats: PropTypes.any,
}

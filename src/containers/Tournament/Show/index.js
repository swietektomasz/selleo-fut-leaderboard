import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

import { getTournament, updateTournament } from '../../../store/tournaments/actions'
import MatchForm from './Form'
import Stats from './Stats'

class Show extends Component {
  componentDidMount = () => {
    const {
      activeTournament,
      getTournament,
      match: {
        params: { id },
      },
    } = this.props

    if (
      isEmpty(activeTournament) ||
      (activeTournament && activeTournament.id.toString() !== id.toString())
    ) {
      getTournament(id)
    }
  }

  _finishTournament = () => {
    const {
      activeTournament: { id },
      updateTournament,
    } = this.props

    updateTournament(id)
  }

  render() {
    const { activeTournament, loading, error } = this.props

    if (loading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>Error</div>
    }

    return (
      <div className="matches">
        <div className="match">
          <div className="match__header">
            <div className="match__title">
              <h3>{activeTournament.name}</h3>
            </div>
          </div>
          <div className="match__summary">
            {activeTournament.matches.map(match => <MatchForm key={match.id} match={match} />)}
          </div>
          <div>
            <button className="create-btn" onClick={this._finishTournament}>
              finish tournament
            </button>
          </div>
        </div>
        <Stats />
      </div>
    )
  }
}

const mapStateToProps = ({ tournaments: { activeTournament, loading, error } }) => {
  return {
    activeTournament,
    loading,
    error,
  }
}

const mapDispatchToProps = {
  getTournament,
  updateTournament,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Show),
)

Show.propTypes = {
  match: PropTypes.object,
  getTournament: PropTypes.func,
  updateTournament: PropTypes.func,
  activeTournament: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
}

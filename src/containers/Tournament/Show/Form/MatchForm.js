import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateMatch } from '../../../../store/tournaments/actions'

class MatchForm extends Component {
  state = {
    home_player_score: null,
    away_player_score: null,
  }

  _submitMatch = () => {
    const { home_player_score, away_player_score } = this.state
    const {
      activeTournament: { id },
      match,
      updateMatch,
    } = this.props
    const _match = { ...match, home_player_score, away_player_score }

    updateMatch(id, _match)
  }

  _setMatchScore = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    const { match } = this.props

    return (
      <div>
        <label>{match.home_player_name}</label>
        <input
          defaultValue={match.home_player_score}
          name="home_player_score"
          onChange={this._setMatchScore}
          type="text"
        />
        <label>{match.away_player_name}</label>
        <input
          defaultValue={match.away_player_score}
          name="away_player_score"
          onChange={this._setMatchScore}
          type="text"
        />
        <button onClick={this._submitMatch}>save</button>
      </div>
    )
  }
}

const mapStateToProps = ({ tournaments: { activeTournament } }) => {
  return { activeTournament }
}

const mapDispatchToProps = {
  updateMatch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MatchForm)

MatchForm.propTypes = {
  match: PropTypes.object,
}

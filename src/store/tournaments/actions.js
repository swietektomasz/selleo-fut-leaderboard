import {
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_LOADING,
  GET_TOURNAMENT,
  UPDATE_MATCH,
  UPDATE_TOURNAMENT,
  GET_STATS,
  GET_PLAYER_STATS,
  GET_SUMMARY,
  CREATE_TOURNAMENT,
} from './types'
import client from '../../utils/apiClient'

const _setTournaments = payload => ({
  type: GET_TOURNAMENTS,
  payload,
})

const _getTournamentsError = payload => ({
  type: GET_TOURNAMENTS_ERROR,
  payload,
})

const _getTournamentsLoading = payload => ({
  type: GET_TOURNAMENTS_LOADING,
  payload,
})

const _getTournament = payload => ({
  type: GET_TOURNAMENT,
  payload,
})

const _updateMatch = payload => ({
  type: UPDATE_MATCH,
  payload,
})

const _updateTournament = payload => ({
  type: UPDATE_TOURNAMENT,
  payload,
})

const _getStats = payload => ({
  type: GET_STATS,
  payload,
})

const _getPlayerStats = payload => ({
  type: GET_PLAYER_STATS,
  payload,
})

const _getSummary = payload => ({
  type: GET_SUMMARY,
  payload,
})

const _createTournament = payload => ({
  type: CREATE_TOURNAMENT,
  payload,
})

export const getTournaments = () => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client('tournaments', {})
      .then(data => {
        dispatch(_setTournaments(data))
        dispatch(_getSummary(data))
      })
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

export const createTournament = () => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client('tournaments', { method: 'POST' })
      .then(data => dispatch(_createTournament(data)))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

export const getTournament = id => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client(`tournaments/${id}`, {})
      .then(data => dispatch(_getTournament(data)))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

export const updateMatch = (tournamentId, match) => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client(`tournaments/${tournamentId}/matches/${match.id}`, {
      body: JSON.stringify(match),
      method: 'PATCH',
    })
      .then(data => dispatch(_updateMatch(data)))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

export const updateTournament = id => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client(`tournaments/${id}`, {
      body: JSON.stringify({ tournament: { state: 'finished' } }),
      method: 'PATCH',
    })
      .then(data => dispatch(_updateTournament(data)))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

export const getStats = () => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client('stats', {})
      .then(data => dispatch(_getStats(data)))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

export const getPlayerStats = id => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client(`player_stats/${id}`, {})
      .then(data => dispatch(_getPlayerStats(data)))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

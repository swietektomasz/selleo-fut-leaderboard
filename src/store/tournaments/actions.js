import {
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_LOADING,
  GET_TOURNAMENT,
  UPDATE_MATCH,
  UPDATE_TOURNAMENT,
  GET_STATS,
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

export const getTournaments = () => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client('/tournaments', {})
      .then(data => dispatch(_setTournaments(data)))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

export const createTournament = () => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client('/tournaments', { method: 'POST' })
      .then(data => console.log(data))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

export const getTournament = id => {
  return dispatch => {
    dispatch(_getTournamentsLoading)

    client(`/tournaments/${id}`, {})
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

    client('/stats', {})
      .then(data => dispatch(_getStats(data)))
      .catch(error => dispatch(_getTournamentsError(error)))
  }
}

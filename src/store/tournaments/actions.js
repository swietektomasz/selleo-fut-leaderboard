import { GET_TOURNAMENTS, GET_TOURNAMENTS_ERROR, GET_TOURNAMENTS_LOADING } from './types'
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

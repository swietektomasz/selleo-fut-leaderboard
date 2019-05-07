import {
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_LOADING,
  GET_TOURNAMENT,
  UPDATE_MATCH,
  UPDATE_TOURNAMENT,
} from './types'

const tournaments = (
  state = { error: false, loading: true, nodes: [], activeTournament: {} },
  { payload, type },
) => {
  switch (type) {
    case GET_TOURNAMENTS: {
      return { ...state, error: false, loading: false, nodes: payload }
    }
    case GET_TOURNAMENTS_ERROR: {
      return { ...state, error: payload, loading: false, nodes: [] }
    }
    case GET_TOURNAMENTS_LOADING: {
      return { ...state, error: false, loading: true, nodes: [] }
    }
    case GET_TOURNAMENT: {
      return { ...state, error: false, loading: false, activeTournament: payload }
    }
    case UPDATE_MATCH: {
      const matches = state.activeTournament.matches.map(match => {
        if (match.id === payload.id) {
          return payload
        }
        return match
      })
      return {
        ...state,
        error: false,
        loading: false,
        activeTournament: { ...state.activeTournament, matches },
      }
    }
    case UPDATE_TOURNAMENT: {
      return {
        ...state,
        error: false,
        loading: false,
        activeTournament: payload,
      }
    }
    default:
      return state
  }
}

export default tournaments

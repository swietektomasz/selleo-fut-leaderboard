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
} from './types'

const tournaments = (
  state = {
    error: false,
    loading: true,
    nodes: [],
    activeTournament: { matches: [], table: {} },
    stats: [],
    playerStats: [],
    summary: {
      Kovson: { 0: [], 1: [], 2: [] },
      Czikarito: { 0: [], 1: [], 2: [] },
      BB: { 0: [], 1: [], 2: [] },
    },
  },
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
    case GET_STATS: {
      return { ...state, error: false, loading: false, stats: payload }
    }
    case GET_PLAYER_STATS: {
      return {
        ...state,
        error: false,
        loading: false,
        playerStats: payload,
      }
    }
    case GET_SUMMARY: {
      const { summary } = state
      const data = payload.map(tournament => {
        return Object.entries(tournament.table).map((table, index) => {
          return { [table[0]]: index }
        })
      })

      const order = data.reduce((previous, current) => {
        return previous.concat(current)
      })

      order.forEach(obj => {
        summary[Object.keys(obj)][Object.values(obj)].push(true)
      })

      return { ...state, summary }
    }
    default:
      return state
  }
}

export default tournaments

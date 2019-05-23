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

export const defaultState = {
  error: false,
  loading: true,
  nodes: [],
  activeTournament: { matches: [], table: {} },
  stats: [],
  playerStats: [],
  summary: {},
}

const tournaments = (
  state = {
    ...defaultState,
  },
  { payload, type },
) => {
  switch (type) {
    case GET_TOURNAMENTS: {
      return { ...state, error: false, loading: false, nodes: payload }
    }
    case GET_TOURNAMENTS_ERROR: {
      return { ...state, error: payload, loading: false, nodes: [...state.nodes] }
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
      const defaultPoints = { 0: 0, 1: 0, 2: 0 }
      const summary = []

      const data = payload.map(({ table }) =>
        Object.entries(table).map(([playerName], position) => ({ [playerName]: position })),
      )
      const order = data.reduce((previous, current) => previous.concat(current), [])

      order.forEach(obj => {
        const playerName = Object.keys(obj)[0]
        const playerPosition = Object.values(obj)[0]
        const currentPlayer = summary.find(player => playerName === player.name)
        const currentPlayerIndex = summary.findIndex(player => playerName === player.name)

        if (!currentPlayer) {
          const curr = {
            ...defaultPoints,
            name: playerName,
            [playerPosition]: 1,
          }
          summary.push(curr)
        } else {
          summary[currentPlayerIndex] = {
            ...currentPlayer,
            [playerPosition]: currentPlayer[playerPosition] + 1,
          }
        }
      })

      return { ...state, summary }
    }
    case CREATE_TOURNAMENT: {
      return { ...state, nodes: [...state.nodes, payload] }
    }

    default:
      return state
  }
}

export default tournaments

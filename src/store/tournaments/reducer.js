import {
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_LOADING,
  GET_SINGLE_TOURNAMENT,
} from './types'

const tournaments = (state = { error: false, loading: true, nodes: [] }, { payload, type }) => {
  switch (type) {
    case GET_TOURNAMENTS: {
      return { error: false, loading: false, nodes: payload }
    }
    case GET_TOURNAMENTS_ERROR: {
      return { error: payload, loading: false, nodes: [] }
    }
    case GET_TOURNAMENTS_LOADING: {
      return { error: false, loading: true, nodes: [] }
    }
    case GET_SINGLE_TOURNAMENT: {
      return { error: false, loading: false, nodes: [{ payload }] }
    }
    default:
      return state
  }
}

export default tournaments

import reducer, { defaultState } from '../reducer'
import {
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_LOADING,
  GET_TOURNAMENTS,
  GET_TOURNAMENT,
  UPDATE_MATCH,
  UPDATE_TOURNAMENT,
  GET_STATS,
  GET_PLAYER_STATS,
  GET_SUMMARY,
  CREATE_TOURNAMENT,
} from '../types'

describe('tournamentReducer', () => {
  it(`should resolve ${GET_TOURNAMENTS} type`, () => {
    const payload = [{ name: 'test1', id: 1 }, { name: 'test2', id: 2 }]

    expect(reducer({}, { payload, type: GET_TOURNAMENTS })).toEqual({
      error: false,
      loading: false,
      nodes: [{ id: 1, name: 'test1' }, { id: 2, name: 'test2' }],
    })

    expect(reducer(undefined, { payload, type: GET_TOURNAMENTS })).toEqual({
      ...defaultState,
      loading: false,
      nodes: [{ id: 1, name: 'test1' }, { id: 2, name: 'test2' }],
    })
  })

  it(`should resolve ${GET_TOURNAMENT} type`, () => {
    const payload = [{ name: 'test1', id: 1 }]

    expect(reducer({}, { payload, type: GET_TOURNAMENT })).toEqual({
      error: false,
      loading: false,
      activeTournament: [{ id: 1, name: 'test1' }],
    })

    expect(reducer(undefined, { payload, type: GET_TOURNAMENT })).toEqual({
      ...defaultState,
      loading: false,
      activeTournament: [{ id: 1, name: 'test1' }],
    })
  })

  it(`should resolve ${UPDATE_MATCH} type`, () => {
    const payload = { id: 1, stats: 'Kovson won' }

    expect(reducer({ activeTournament: { matches: [] } }, { payload, type: UPDATE_MATCH })).toEqual(
      {
        error: false,
        loading: false,
        activeTournament: { matches: [] },
      },
    )

    expect(
      reducer(
        {
          activeTournament: {
            matches: [{ id: 1, stats: 'Czikarito won' }, { id: 2, stats: 'BB won' }],
          },
        },
        { payload, type: UPDATE_MATCH },
      ),
    ).toEqual({
      error: false,
      loading: false,
      activeTournament: { matches: [{ id: 1, stats: 'Kovson won' }, { id: 2, stats: 'BB won' }] },
    })

    expect(
      reducer(
        { activeTournament: { matches: [{ name: 'test2', id: 2 }] } },
        { payload, type: UPDATE_MATCH },
      ),
    ).toEqual({
      error: false,
      loading: false,
      activeTournament: { matches: [{ name: 'test2', id: 2 }] },
    })

    expect(reducer(undefined, { payload, type: UPDATE_MATCH })).toEqual({
      ...defaultState,
      loading: false,
      activeTournament: { matches: [], table: {} },
    })
  })

  it(`should resolve ${UPDATE_TOURNAMENT} type`, () => {
    const payload = [{ name: 'test1', id: 1 }]

    expect(reducer({}, { payload, type: UPDATE_TOURNAMENT })).toEqual({
      error: false,
      loading: false,
      activeTournament: [{ id: 1, name: 'test1' }],
    })

    expect(reducer(undefined, { payload, type: UPDATE_TOURNAMENT })).toEqual({
      ...defaultState,
      loading: false,
      activeTournament: [{ id: 1, name: 'test1' }],
    })
  })

  it(`should resolve ${GET_STATS} type`, () => {
    const payload = [{ name: 'test1', id: 1 }]

    expect(reducer({}, { payload, type: GET_STATS })).toEqual({
      error: false,
      loading: false,
      stats: [{ id: 1, name: 'test1' }],
    })

    expect(reducer(undefined, { payload, type: GET_STATS })).toEqual({
      ...defaultState,
      loading: false,
      stats: [{ id: 1, name: 'test1' }],
    })
  })

  it(`should resolve ${GET_PLAYER_STATS} type`, () => {
    const payload = [{ name: 'test1', id: 1 }]

    expect(reducer({}, { payload, type: GET_PLAYER_STATS })).toEqual({
      error: false,
      loading: false,
      playerStats: [{ id: 1, name: 'test1' }],
    })

    expect(reducer(undefined, { payload, type: GET_PLAYER_STATS })).toEqual({
      ...defaultState,
      loading: false,
      playerStats: [{ id: 1, name: 'test1' }],
    })
  })

  // it(`should resolve ${GET_SUMMARY} type`, () => {
  //   const payload = [{ name: 'test1', id: 1 }]

  //   expect(reducer({}, { payload, type: GET_SUMMARY })).toEqual({
  //     error: false,
  //     loading: false,
  //     playerStats: [{ id: 1, name: 'test1' }],
  //   })

  //   expect(reducer(undefined, { payload, type: GET_SUMMARY })).toEqual({
  //     ...defaultState,
  //     loading: false,
  //     playerStats: [{ id: 1, name: 'test1' }],
  //   })
  // })
})

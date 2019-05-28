import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import tournaments from './tournaments/reducer'

const leaderboardApp = combineReducers({
  tournaments,
})

const store = createStore(leaderboardApp, applyMiddleware(thunk))

export default store

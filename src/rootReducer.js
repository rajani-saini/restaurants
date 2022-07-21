import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appReducer from './containers/app/reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  global: appReducer
})
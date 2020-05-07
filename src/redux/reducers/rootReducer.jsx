import { combineReducers } from 'redux'
import config from './templateConfig/'
import Navigation from './navigation/'
import todoReducer from './todo/'
import Notes from './note/'
import chatReducer from './chat/'
import emailReducer from './email/'
import Icons from './icons/'
import { authReducer as auth } from './authReducer'
import exchangeRates from './exchangeRatesReducer'

const notification = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth,
  config,
  exchangeRates,
  notification,
  Navigation,
  todoApp: todoReducer,
  noteApp: Notes,
  chatApp: chatReducer,
  emailApp: emailReducer,
  Icons,
})

export default rootReducer

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

const rootReducer = combineReducers({
  auth,
  config,
  exchangeRates,
  Navigation,
  todoApp: todoReducer,
  noteApp: Notes,
  chatApp: chatReducer,
  emailApp: emailReducer,
  Icons,
})

export default rootReducer

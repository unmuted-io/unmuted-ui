import { combineReducers, Reducer } from 'redux'
import { Account, AuthReducer } from '../../types'

const INITIAL_STATE = {
  isLoggingIn: false,
  isRegistering: false,
  account: null
}

// type AccountAction = {
//   type: 'ACCOUNT', data: { account: Account }
// } | { type: 'UPDATE_USERNAME_SUCCESS', data : { username: string } }

export const account = (state = null, action) => {
  const { data, type } = action
  switch (type) {
    case 'ACCOUNT':
      return data.account
    case 'UPDATE_USERNAME_SUCCESS':
      return {
        ...state,
        username: data.username
      }
    case 'LOGOUT':
        return null
    default:
      return state
  }
}

export const edgeAccount = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_EDGE_ACCOUNT':
      return action.data
    case 'LOGOUT':
        return null
    default:
      return state
  }
}

type IsLoggingInAction = { type: 'IS_LOGGING_IN', data: { isLoggingIn: boolean } }

export const isLoggingIn = (state: boolean = false, action: IsLoggingInAction): boolean => {
  const { data, type } = action
  switch (type) {
    case 'IS_LOGGING_IN':
      return data.isLoggingIn
    default:
      return state
  }
}

type IsRegisteringAction = { type: 'UPDATE_IS_REGISTERING', data: { isRegistering: boolean } }

export const isRegistering = (state: boolean = false, action: IsRegisteringAction): boolean => {
  const { data, type } = action
  switch (type) {
    case 'UPDATE_IS_REGISTERING':
      return data.isRegistering
    default:
      return state
  }
}

export const authReducer: Reducer<AuthReducer> = combineReducers({
  account,
  edgeAccount,
  isLoggingIn,
  isRegistering
})

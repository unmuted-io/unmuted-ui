import { combineReducers } from 'redux'

export const account = (state = null, action: any) => {
  const { data } = action
  switch (action.type) {
    case 'ACCOUNT':
      return data
    case 'UPDATE_USERNAME_SUCCESS':
      return {
        ...state,
        username: data
      }
    default:
      return state
  }
}

export const edgeAccount = (state = null, action: any) => {
  switch (action.type) {
    case 'UPDATE_EDGE_ACCOUNT':
      return action.data
    default:
      return state
  }
}


export const authReducer = combineReducers({
  account,
  edgeAccount
})

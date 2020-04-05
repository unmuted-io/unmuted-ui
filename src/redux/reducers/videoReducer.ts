import { combineReducers } from 'redux'
import { Video } from '../../types'
import { VideoReducer } from '../../types'

export const recommended = (state: Video[] = [], action: any) => {
  switch (action.type) {
    case 'FETCH_RECOMMENDED_VIDEOS_SUCCESS':
      return action.data
    default:
      return state
  }
}


export default combineReducers({
  recommended
})

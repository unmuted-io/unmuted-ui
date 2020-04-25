import {
  call,
  put,
  takeEvery,
  select
} from 'redux-saga/effects'
import axios from 'axios'
import { AxiosResponse } from '../../types'

const { REACT_APP_API_BASE_URL } = process.env

// move to component?
function* updateViewCount(data: any) {
  const { rand, lastPosition } = data.data
  const state = yield select()
  const { auth } = state
  const username = (auth.account && auth.account.username) || null
  const response: AxiosResponse = yield call(() => axios.put(`${REACT_APP_API_BASE_URL}/videos/view`, {
    rand,
    lastPosition,
    username
  }))
}

function* videosSaga() {
  yield takeEvery('UPDATE_VIEW_COUNT', updateViewCount)
}

export default videosSaga

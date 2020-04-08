import {
  call,
  put,
  takeEvery,
  select
} from 'redux-saga/effects'
import axios from 'axios'
import { useHistory } from "react-router-dom"

function* updateUsername(input: { type: string, data: { username: string, history: any } }) {
  const { REACT_APP_API_BASE_URL } = process.env
  const state = yield select()
  const { email } = state.auth.account
  const response = yield call(() => axios.put(`${REACT_APP_API_BASE_URL}/auth/username`, {
    email,
    username: input.data.username
  }))
  yield put({
    type: 'UPDATE_USERNAME_SUCCESS',
    data: response.data.username
  })
  input.data.history.push('/')
}

function* authSaga() {
  yield takeEvery('UPDATE_USERNAME', updateUsername)
}

export default authSaga

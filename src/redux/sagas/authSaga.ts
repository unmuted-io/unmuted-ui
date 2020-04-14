import {
  call,
  put,
  takeEvery,
  select
} from 'redux-saga/effects'
import axios from 'axios'
import { AxiosResponse } from '../../types'

const { REACT_APP_API_BASE_URL } = process.env

function* updateUsername(input: { type: string, data: { username: string, history: any } }) {
  const state = yield select()
  // email will be present on regular account, edge_account on Edge Account
  const email = state.auth.account && state.auth.account.email
  const { edgeAccount } = state.auth
  const response: AxiosResponse = yield call(() => axios.put(`${REACT_APP_API_BASE_URL}/auth/username`, {
    email,
    edge_username: edgeAccount.username,
    username: input.data.username
  }))
  yield put({
    type: 'UPDATE_USERNAME_SUCCESS',
    data: response.data.username
  })
  input.data.history.push('/')
}

// login and possible register upon EdgeLogin
function* authenticateEdgeLogin(data: any): any {
  const { account, history } = data.data
  const state = yield select()
  yield put({ type: 'UPDATE_EDGE_ACCOUNT', data: account })
  // check if user exists
  const checkUserResponse: AxiosResponse = yield call(() => axios.get(`${REACT_APP_API_BASE_URL}/user/edge_username/${account.username}`))
  if (checkUserResponse.status === 204) { // no one with this Edge username exists in db
    // create new user
    const formData: FormData = new FormData()
    formData.append('edge_username', account.username)
    const registerResponse: AxiosResponse = yield call(() => axios.post(`${REACT_APP_API_BASE_URL}/auth/register`, {
      edge_username: account.username
    }))
    // send user to get a username
    history.push({
      pathname: '/username',
      state: {
        edgeUsername: account.username
      }
    })
  } else if (checkUserResponse.status === 200) { // user *does* exist
    console.log('user does exist')
    yield put({ type: 'ACCOUNT', data: { ...checkUserResponse.data } })
    history.push('/')
  }
  console.log('after conditionals')
}

function* authSaga() {
  yield takeEvery('UPDATE_USERNAME', updateUsername)
  yield takeEvery('AUTHENTICATE_EDGE_LOGIN', authenticateEdgeLogin)
}

export default authSaga

import { call, put, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import { AxiosResponse } from '../../types'
import { dataURLtoBlob } from '../../utility/utility'
const { REACT_APP_API_BASE_URL } = process.env

function * updateUsername (input: { type: string; data: { username: string; history: any } }) {
  const state = yield select()
  // email will be present on regular account, edge_account on Edge Account
  const email = state.auth.account && state.auth.account.email
  const { edgeAccount } = state.auth
  const response: AxiosResponse = yield call(() =>
    axios.put(`${REACT_APP_API_BASE_URL}/auth/username`, {
      email,
      edge_username: (edgeAccount && edgeAccount.username) || null,
      username: input.data.username,
    })
  )
  yield put({
    type: 'UPDATE_USERNAME_SUCCESS',
    data: response.data,
  })
  input.data.history.push('/')
}

// login and possible register upon EdgeLogin
function * authenticateEdgeLogin (data: any): any {
  const { account, history, fromUrl } = data.data
  const state = yield select()
  yield put({ type: 'UPDATE_EDGE_ACCOUNT', data: account })
  // check if user exists
  const checkUserResponse: AxiosResponse = yield call(() =>
    axios.get(`${REACT_APP_API_BASE_URL}/user/edge_username/${account.username}`)
  )
  if (checkUserResponse.status === 204) {
    // no one with this Edge username exists in db
    // create new user
    const formData: FormData = new FormData()
    formData.append('edge_username', account.username)
    const registerResponse: AxiosResponse = yield call(() =>
      axios.post(`${REACT_APP_API_BASE_URL}/auth/register`, {
        edge_username: account.username,
      })
    )
    // send user to get a username
    history.push({
      pathname: '/username',
      state: {
        edgeUsername: account.username,
      },
    })
  } else if (checkUserResponse.status === 200) {
    // user *does* exist
    console.log('user does exist')
    const account = {
      ...checkUserResponse.data.user,
      ...checkUserResponse.data.access_token,
    }
    yield put({ type: 'ACCOUNT', data: { account } })
    history.push(fromUrl || '/')
  }
  console.log('after conditionals')
}

function * updateAccountImage (data: any) {
  const { data: { base64Image, type }} = data
  const blob = dataURLtoBlob(base64Image)
  const state = yield select()
  const { token } = state.auth.account
  const formData = new FormData()
  formData.append('file', blob)
  formData.append('type', type)
  const response: AxiosResponse = yield call(() => axios({
    method: 'post',
    url: `${REACT_APP_API_BASE_URL}/user/image/save`,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    }
  }))
  const { data: { settings } } = response
  yield put({
    type: 'UPDATE_ACCOUNT_SETTINGS',
    data: { settings }
  })
}

function * saveProfile ({ type, data }) {
  console.log('in save profile, data: ', data)
  const state = yield select()
  const { settings, token } = state.auth.account
  const newSettings = {
    ...settings,
    ...data
  }
  const response: AxiosResponse = yield call(() => axios({
    method: 'put',
    url: `${REACT_APP_API_BASE_URL}/user/settings`,
    data: newSettings,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }))
  yield put ({
    type: 'UPDATE_ACCOUNT_SETTINGS',
    data: { settings: response.data.settings }
  })
  yield put({
    type: 'NEW_NOTIFICATION',
    data: { type: 'success', message: 'Profile saved successfully', autoDismiss: true}
  })
}

function * authSaga () {
  yield takeEvery('UPDATE_USERNAME', updateUsername)
  yield takeEvery('AUTHENTICATE_EDGE_LOGIN', authenticateEdgeLogin)
  yield takeEvery('UPDATE_ACCOUNT_IMAGE_REQUEST', updateAccountImage)
  yield takeEvery('SAVE_PROFILE_REQUEST', saveProfile)
}

export default authSaga

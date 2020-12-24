import FormData from 'form-data'
import { UserInfo, LoginSuccessResponse, RegisterSuccessResponse, RegisterFailResponse } from '../../types'
import { AxiosResponse } from '../../types/fetchTypes'
import axios from 'axios'

const { REACT_APP_API_BASE_URL } = process.env

export const attemptAutoLoginFromCookies = (history: any) => async (dispatch: any, getState: any) => {
  try {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken) return
    const url = `${REACT_APP_API_BASE_URL}/auth/login`
    // @ts-ignore
    const loginResponse = await axios({
      url,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    if (loginResponse.statusText !== 'OK') {
      console.log(loginResponse.statusText)
      throw new Error(loginResponse.statusText)
    }
    const { access_token, user } = loginResponse.data
    localStorage.setItem('access_token', access_token.token)
    localStorage.setItem('refresh_token', access_token.refreshToken)
    // const currentTimestamp = new Date().getTime()
    // const currentTimestampFixed = currentTimestamp / 1000
    // const futureTimestamp = (currentTimestampFixed + 86400).toString()
    dispatch({ type: 'ACCOUNT', data: { account: { ...user, ...access_token } } })
    // localStorage.setItem('expiration', futureTimestamp)
    if (history.location.pathname === '/register') {
      // vs just logging in
      // history.goBack()
      history.push({
        pathname: '/username',
        state: {
          ...user
        }
      })
    } else {
      if (process.env.NODE_ENV === 'development') return history.push('/')
      history.push((history.location && history.location.pathname) || '/')
    }
  } catch (error) {
    let { message, response } = error
    if (response && response.data && response.data.message) {
      message = response.data.message
    }
    dispatch({
      type: 'NEW_NOTIFICATION',
      data: {
        type: 'error',
        message,
        autoDismiss: true
      }
    })
    dispatch(logout())
  }
}

export const login = (userInfo: UserInfo, history: any, isAnimated?: boolean, isFromCookies?: boolean) => async (
  dispatch: any
) => {
  dispatch({ type: 'IS_LOGGING_IN', data: { isLoggingIn: true } })
  let loginResponse
  // slow down login process so that user knows they are being logged in
  setTimeout(async () => {
    try {
      const { username, password, email } = userInfo
      const url = `${REACT_APP_API_BASE_URL}/auth/login`
      const data: FormData = new FormData()
      data.append('password', password)
      data.append('email', email)
      loginResponse = await axios(url, {
        method: 'POST',
        data
      })
      if (loginResponse.statusText !== 'OK') {
        console.log(loginResponse.statusText)
        throw new Error(loginResponse.statusText)
      }
      const { access_token, user } = loginResponse.data
      localStorage.setItem('access_type', access_token.type)
      localStorage.setItem('access_token', access_token.token)
      localStorage.setItem('refresh_token', access_token.refreshToken)
      // const currentTimestamp = new Date().getTime()
      // const currentTimestampFixed = currentTimestamp / 1000
      // const futureTimestamp = (currentTimestampFixed + 86400).toString()
      dispatch({ type: 'ACCOUNT', data: { account: { ...user, ...access_token } } })
      // localStorage.setItem('expiration', futureTimestamp)
      if (process.env.NODE_ENV === 'development') return history.push('/')
      if (history.location.pathname === '/register') {
        // vs just logging in
        // history.goBack()
        history.push({
          pathname: '/username',
          state: {
            ...userInfo
          }
        })
      } else {
        let newPath = '/'
        // use regular path unless it was /login in which case still go to '/' (homepage)
        if (history.location && history.location.pathname !== '/login' && history.location.pathname) {
          newPath = history.location.pathname
        }
        history.push(newPath)
      }
    } catch (error) {
      let { message, response } = error
      if (response && response.data && response.data.message) {
        message = response.data.message
      }
      dispatch({
        type: 'NEW_NOTIFICATION',
        data: {
          type: 'error',
          message,
          autoDismiss: true
        }
      })
      dispatch(logout())
    }
    // should isLoggingIn reducer just look at ACCOUNT action?
    dispatch({ type: 'IS_LOGGING_IN', data: { isLoggingIn: false } })
  }, 1000)
}

export const refreshToken = () => (dispatch, getState) => {}

export const createUser = (newUserInfo: UserInfo, history: object) => async (dispatch: any, getState: any) => {
  dispatch({ type: 'UPDATE_IS_REGISTERING', data: { isRegistering: true } })
  // slow down process to make user know they are being registered / processed
  setTimeout(async () => {
    try {
      const { username, password, email } = newUserInfo
      const { REACT_APP_API_BASE_URL } = process.env
      const url = `${REACT_APP_API_BASE_URL}/auth/register`
      const registerFormData = new FormData()
      // @ts-ignore
      const createUserResponse: AxiosResponse = await axios.post(url, newUserInfo)

      const createUserData: RegisterSuccessResponse | RegisterFailResponse = createUserResponse.data
      dispatch(login(newUserInfo, history, false))
    } catch (e) {
      console.log('Error: ', e)
      dispatch({ type: 'AUTH_ERROR', data: { authError: e.message } })
    }
    dispatch({ type: 'UPDATE_IS_REGISTERING', data: { isRegistering: false } })
  }, 2000)
}

export const logout = () => (dispatch: any): void => {
  dispatch({
    type: 'LOGOUT'
  })
  localStorage.clear()
}

export const updateEdgeAccount = (account: any) => (dispatch: any, getState: any) => {
  dispatch({
    type: 'UPDATE_EDGE_ACCOUNT',
    data: account
  })
}

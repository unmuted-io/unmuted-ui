
import FormData from 'form-data'
import { UserInfo, LoginSuccessResponse, RegisterSuccessResponse, RegisterFailResponse } from '../../types'
import { AxiosResponse } from '../../types/fetchTypes';

export const attemptAutoLoginFromCookies = (history: any) => (dispatch: any, getState: any) => {
  const username = localStorage.getItem('username')
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')
  const access_token = localStorage.getItem('access_token')
  const type = localStorage.getItem('access_type')
  if (!username || !email || !password) return
  const userInfo = {
    username,
    email,
    password
  }
  dispatch(login(userInfo, history))
}

export const createUser = (newUserInfo: UserInfo , history: object ) => async (dispatch: any, getState: any) => {
  dispatch({ type: 'IS_CREATING_ACCOUNT', data: true })
  try {
    const { username, password, email } = newUserInfo
    const { REACT_APP_API_BASE_URL } = process.env
    const url = `${REACT_APP_API_BASE_URL}/auth/register`
    const formData: FormData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('email', email)
    // @ts-ignore
    const createUserResponse: AxiosResponse = await axios.post(url, {
      body: formData
    })

    const createUserData: RegisterSuccessResponse | RegisterFailResponse = createUserResponse.data
    dispatch(login(newUserInfo, history, false))
  } catch (e) {
    console.log('Error: ', e)
    dispatch({ type: 'AUTH_ERROR', data: { authError: e.message } })
  }
}

export const login = (userInfo: UserInfo, history: any, isAnimated?: boolean) => async (dispatch: any, getState: any) => {
  if (isAnimated !== false) {
    dispatch({ type: 'IS_LOGGING_IN', data: { isLoggingIn: true } })
  }
  try {
    const { username, password, email } = userInfo
    const { REACT_APP_API_BASE_URL } = process.env
    const url = `${REACT_APP_API_BASE_URL}/auth/login`
    const formData: FormData = new FormData()
    formData.append('password', password)
    formData.append('email', email)
    // @ts-ignore
    const loginResponse = await fetch(url, {
      method: 'POST',
      // @ts-ignore
      body: formData
    })
    if (!loginResponse.ok) {
      console.log(loginResponse.statusText)
      throw new Error (loginResponse.statusText)
    }
    const loginData: LoginSuccessResponse = await loginResponse.json()
    const { user, access_token } = loginData
    localStorage.setItem('email', email)
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    localStorage.setItem('access_type', access_token.type)
    localStorage.setItem('access_token', access_token.token)
    // const currentTimestamp = new Date().getTime()
    // const currentTimestampFixed = currentTimestamp / 1000
    // const futureTimestamp = (currentTimestampFixed + 86400).toString()
    dispatch({ type: 'ACCOUNT', data: { account: { ...loginData.user, ...loginData.access_token } } })
    // localStorage.setItem('expiration', futureTimestamp)
    if (history.location.pathname === '/register') { // vs just logging in
      // history.goBack()
      history.push({
        pathname: '/username',
        state: {
          ...userInfo
        }
      })
    } else {
      history.push('/')
    }
  } catch (e) {
    console.log('Error: ', e)
    dispatch({ type: 'AUTH_ERROR', data: { authError: 'There was a problem logging in with those credentials. Please check your credentials and try again.' } })
  }
  // should isLoggingIn reducer just look at ACCOUNT action?
  dispatch({ type: 'IS_LOGGING_IN', data: { isLoggingIn: false}})
}

export const logout = () => (dispatch: any): void => {
  dispatch({
    type: 'ACCOUNT',
    data: { account: null }
  })
  localStorage.clear()
}

export const updateEdgeAccount = (account: any) => (dispatch: any, getState: any) => {
  dispatch({
    type: 'UPDATE_EDGE_ACCOUNT',
    data: account
  })
}
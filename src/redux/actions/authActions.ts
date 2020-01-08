
import FormData from 'form-data'
import { UserInfo } from '../../utility/types'

export const createUser = (newUserInfo: UserInfo , history: Object ) => async (dispatch: any, getState: any) => {
  dispatch({ type: 'IS_CREATING_ACCOUNT', data: true })
  try {
    const { username, password, email } = newUserInfo
    const url = `http://localhost:3333/auth/register`
    const formData: FormData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('email', email)
    // @ts-ignore
    const createUserResponse = await fetch(url, {
      method: 'POST',
      body: formData
    })
    const createUserData = await createUserResponse.json()
    if (!createUserResponse.ok) {
      dispatch({ type: 'AUTH_ERROR', data: { authError: createUserData.message } })
      throw new Error(createUserData.message)
    }
    if (createUserData.user) {
      newUserInfo.access_token = createUserData.access_token
      dispatch(login(newUserInfo, history, false))
    }
  } catch (e) {
    console.log('Error: ', e)
    dispatch({ type: 'AUTH_ERROR', data: { authError: e.message } })
  }
}

export const login = (userInfo: UserInfo, history: any, isAnimated?: boolean) => async (dispatch: any, getState: any) => {
  if (isAnimated !== false) {
    dispatch({ type: 'IS_LOGGING_IN', data: true })
  }
  try {
    const { username, password, email } = userInfo
    const url = `http://localhost:3333/auth/login`
    const formData: FormData = new FormData()
    formData.append('password', password)
    formData.append('email', email)
    // @ts-ignore
    const loginResponse = await fetch(url, {
      method: 'POST',
      body: formData
    })
    if (!loginResponse.ok) {
      console.log(loginResponse.statusText)
      throw new Error (loginResponse.statusText)
    }
    const loginData = await loginResponse.json()
    const { id, access_token } = loginData
    localStorage.setItem('email', email)
    localStorage.setItem('username', username)
    localStorage.setItem('id', id)
    localStorage.setItem('passwordHash', loginData.password)
    localStorage.setItem('access_type', access_token.type)
    localStorage.setItem('access_token', access_token.token)
    // const currentTimestamp = new Date().getTime()
    // const currentTimestampFixed = currentTimestamp / 1000
    // const futureTimestamp = (currentTimestampFixed + 86400).toString()
    dispatch({ type: 'ACCOUNT', data: { loginData } })
    // localStorage.setItem('expiration', futureTimestamp)
    history.push('/upload-video')
    console.log('history pushed')
  } catch (e) {
    console.log('Error: ', e)
    dispatch({ type: 'AUTH_ERROR', data: { authError: 'There was a problem logging in with those credentials. Please check your credentials and try again.' } })
  }
}

export const logout = () => (dispatch: any, getState: any) => {
  dispatch({
    type: 'ACCOUNT',
    data: null
  })
  localStorage.clear()
}

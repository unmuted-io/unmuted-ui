
export interface AccessToken {
  access_token: string
  refresh_token: string | null
}

export interface UserInfo {
  username: string
  email: string
  password: string
  access_token?: AccessToken
}

export interface LoginResponseData {
  user: {
    id: string,
    username: string,
    email: string,
    password: string,
    created_at: string,
    updated_at: string
  },
  access_token: {
    type: string,
    token: string,
    refreshToken: null | string
  }
}
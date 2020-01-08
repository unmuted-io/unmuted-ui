
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

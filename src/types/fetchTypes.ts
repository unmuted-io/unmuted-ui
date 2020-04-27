export interface AxiosResponse {
  data: any,
  status: number,
  statusText: string,
  headers: object,
  config: object
  request?: object
}


export interface AccessToken {
  access_token: string
  refresh_token: string | null,
  type: string,
  token: string
}

export interface UserInfo {
  username?: string
  email: string
  password: string
  access_token?: AccessToken,
  created_at?: string,
  updated_at?: string
}

export interface LoginSuccessResponse {
  user: UserInfo,
  access_token: AccessToken
}

export interface RegisterSuccessResponse {
  user: boolean,
  access_token: AccessToken
}

export interface RegisterFailResponse {
  message: string
}
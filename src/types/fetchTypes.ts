export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: object
  config: object
  request?: object
}

export interface AccessToken {
  access_token: string
  refresh_token: string | null
  type: string
  token: string
}

export interface UserInfo {
  username?: string
  email: string
  password: string
  access_token?: AccessToken
  created_at?: string
  updated_at?: string
}

export interface LoginSuccessResponse {
  user: UserInfo
  access_token: AccessToken
}

export interface RegisterSuccessResponse {
  user: boolean
  access_token: AccessToken
}

export interface RegisterFailResponse {
  message: string;
}

export interface NomicsPriceResponse {
  circulating_supply: string;
  currency: string;
  high: string;
  high_timestamp: string;
  id: string;
  logo_url: string;
  market_cap: string;
  max_supply: string;
  name: string;
  price: string;
  price_date: string;
  price_timestamp: string;
  rank: string;
  symbol: string;
}

export interface ExchangeRate {
  currencyCode: string;
  name: string;
  price: string;
}

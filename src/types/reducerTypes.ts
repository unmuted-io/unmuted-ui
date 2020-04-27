
export interface VideoReducer {
  recommended: any[]
}

export type Account = {
  username: string,
  edge_username?: string,
  type: string,
  bearer: string
} | null


export interface EdgeAccount {

}

export interface AuthReducer {
  isLoggingIn: boolean,
  isRegistering: boolean,
  account: Account,
  edgeAccount: any
}

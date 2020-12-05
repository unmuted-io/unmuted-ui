import { ExchangeRate } from './index'

export type VideoReducer = {
  recommended: any[]
}

export type Account = {
  id: number
  username: string
  email?: string
  telos_account_name?: string
  type: string
  token: string
  profile: {
    profileImageUrl?: string
    coverImageUrl?: string
    fullName?: string
    description?: string
  }
} | null

export type EdgeAccount = {
  id: string
  keys: any
  username: string
  currencyConfig: any
  activeWalltIds: string[]
  currencyWallets: {
    [key: string]: {
      fiatCurrencyCode: string
      balances: { [currencyCode: string]: string }
      blockHeight: number
      syncRatio: number
    }
  }
  currencyTools: {
    [pluginName: string]: {
      currencyInfo: {
        currencyCode: string
        displayName: string
        pluginName: string
        walletType: string
        addressExplorer: string
        transactionExplorer: string
        denominations: any[]
        symbolImage: string
        symbolImageDarkMono: string
        metaTokens: any[]
      }
    }
  }
}

export type AuthReducer = {
  isLoggingIn: boolean
  isRegistering: boolean
  account: Account
  edgeAccount: any
}

export type ExchangeRatesReducer = {
  [currencyCode: string]: ExchangeRate
}

export type Notification = {
  message: string
  type: string
  autoDismiss: boolean
}

import {
  AuthReducer,
  ExchangeRatesReducer,
  Notification
} from './index'

export type State = {
  exchangeRates: ExchangeRatesReducer;
  auth: AuthReducer;
  notification: Notification
}

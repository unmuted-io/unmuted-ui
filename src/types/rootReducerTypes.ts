import {
  AuthReducer,
  ExchangeRatesReducer
} from './index'

export type State = {
  exchangeRates: ExchangeRatesReducer;
  auth: AuthReducer;
}

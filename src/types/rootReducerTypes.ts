import {
  AuthReducer,
  ExchangeRatesReducer
} from './index'

export type RootState = {
  exchangeRates: ExchangeRatesReducer;
  auth: AuthReducer;
}

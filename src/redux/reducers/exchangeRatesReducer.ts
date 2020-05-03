import { createReducer } from 'reduxsauce'
import { ExchangeRatesReducer } from '../../types'

const INITIAL_STATE = {}

export const updateExchangeRates = (state = INITIAL_STATE, action): ExchangeRatesReducer => {
  return action.data
}

export const HANDLERS = {
  UPDATE_EXCHANGE_RATES: updateExchangeRates
}

export default createReducer(INITIAL_STATE, HANDLERS)

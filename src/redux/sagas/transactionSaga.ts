import { call, put, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import { AxiosResponse, SuperChatData } from '../../types'

const { REACT_APP_API_BASE_URL } = process.env

function* sendTransaction(input: { type: string; data: { data: SuperChatData } }) {
  const state = yield select()

}

function* transactionSaga() {
  yield takeEvery('SEND_TRANSACTION', sendTransaction)
}

export default transactionSaga

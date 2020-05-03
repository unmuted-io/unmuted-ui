import {
  spawn
} from 'redux-saga/effects'
import recommendedVideosSaga from './videosSaga'
import authSaga from './authSaga'

export default function * rootSaga () {
  yield spawn(recommendedVideosSaga)
  yield spawn(authSaga)
}

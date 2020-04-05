import {
  spawn
} from 'redux-saga/effects'
import recommendedVideosSaga from './videosSaga'

export default function* rootSaga() {
  yield spawn(recommendedVideosSaga)
}
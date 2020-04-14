import {
  call,
  put,
  takeEvery,
  select
} from 'redux-saga/effects'
import axios from 'axios'
import { AxiosResponse } from '../../types'

const { REACT_APP_API_BASE_URL } = process.env

function* fetchRecommendedVideos() {
  const recommendedVideos: AxiosResponse = yield call(() => axios.get(`${REACT_APP_API_BASE_URL}/videos/rec`))
  yield put({
    type: 'FETCH_RECOMMENDED_VIDEOS_SUCCESS',
    data: recommendedVideos.data.videos
  })
}

function* updateViewCount(data: any) {
  const { sourceRand, lastPosition } = data.data
  const state = yield select()
  const { auth } = state
  const username = (auth.account && auth.account.user && auth.account.user.username) || null
  const response: AxiosResponse = yield call(() => axios.put(`${REACT_APP_API_BASE_URL}/videos/view`, {
    sourceRand,
    lastPosition,
    username
  }))
}

function* recommendedVideosSaga() {
  yield takeEvery('FETCH_RECOMMENDED_VIDEOS', fetchRecommendedVideos)
  yield takeEvery('UPDATE_VIEW_COUNT', updateViewCount)
}

export default recommendedVideosSaga

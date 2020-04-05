import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import axios from 'axios'

function* fetchRecommendedVideos() {
  const { REACT_APP_API_BASE_URL } = process.env
  const recommendedVideos = yield call(() => axios.get(`${REACT_APP_API_BASE_URL}/videos/rec`))
  yield put({
    type: 'FETCH_RECOMMENDED_VIDEOS_SUCCESS',
    data: recommendedVideos.data.videos
  })
}

function* recommendedVideosSaga() {
  yield takeEvery('FETCH_RECOMMENDED_VIDEOS', fetchRecommendedVideos)
}

export default recommendedVideosSaga

import { VIDEO_PROGRESS } from '../constants/videos'

export const getProgressFromJson = (json: string) => {
  let value
  let message
  const data = JSON.parse(json)
  const videoProgress = data.video.progress
  value = VIDEO_PROGRESS[videoProgress]
  if (videoProgress === 'TRANSCODING_STARTED' || videoProgress === 'TRANSCODING_IN_PROGRESS') {
    let allFilesProgress = 0.0
    const fileCount = Object.keys(data.video.files).length
    let allFilesProgressPercent = 0
    /* eslint-disable guard-for-in */
    for (const fileName in data.video.files) {
      const thisFileProgress = 1.0
      const dbValue = data.video.files[fileName]
      const partialProgress = VIDEO_PROGRESS[dbValue]
      allFilesProgress += partialProgress || thisFileProgress
    }
    allFilesProgressPercent = fileCount ? allFilesProgress / fileCount : 0
    value =
      allFilesProgressPercent * (VIDEO_PROGRESS.TRANSCODING_COMPLETE - VIDEO_PROGRESS[videoProgress]) +
      VIDEO_PROGRESS[videoProgress]
  }
  return {
    value,
    message: videoProgress,
  }
}

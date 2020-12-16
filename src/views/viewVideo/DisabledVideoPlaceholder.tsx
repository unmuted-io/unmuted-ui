import React, { ReactElement, Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Progress } from 'reactstrap'
import { getProgressFromJson } from '../../utility/videos'
import useInterval from '../../utility/hooks'

interface Props {
  rand: string
}

function DisabledVideoPlaceholder({ rand }: Props): ReactElement {
  const { REACT_APP_API_BASE_URL } = process.env
  const [progress, setProgress] = useState({ value: 0, message: '' })
  useEffect(() => {
    fetchVideoData()
  }, [])

  const fetchVideoData = async () => {
    try {
      const videoResponse = await axios.get(`${REACT_APP_API_BASE_URL}/videos/${rand}`)
      const { data } = videoResponse
      const processedProgressData = getProgressFromJson(data.processed)
      setProgress(processedProgressData)
      console.log('processedProgressData: ', processedProgressData)
    } catch (err) {}
  }

  useInterval(fetchVideoData, 10000)
  const { value, message } = progress

  return (
    <Fragment>
      <div className="disabled-video-placeholder">
        <div className="repositioned-placeholder">
          <i className={`feather icon-video `} />
        </div>
      </div>
      <Progress animated color="success" value={value * 100}>
        {message}
      </Progress>
    </Fragment>
  )
}

export default DisabledVideoPlaceholder

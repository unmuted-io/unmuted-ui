import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import VideoThumbnail from '../videoThumbnail/VideoThumbnail'
import { getAxiosConfig } from '../../utility/fetch'
import { ChannelVideo, Account, State } from '../../types'
import axios from 'axios'

interface Props {
  query?: string
  id: number
}

const ListVideos = (props: Props) => {
  const [videos, setVideos]: [ChannelVideo[], any] = useState([])
  const account: Account = useSelector((state: State) => state.auth.account)

  const fetchLatestChannelVideos = async () => {
    const latestChannelVideoResponse = await axios({
      ...getAxiosConfig({
        endpoint: `videos/channel/${props.id}`
      })
    })
    const videoData: ChannelVideo[] = latestChannelVideoResponse.data
    setVideos(videoData)
  }

  useEffect(() => {
    fetchLatestChannelVideos()
  }, [])

  return <div>{videos.map((video) => <VideoThumbnail key={video.rand} {...video} />)}</div>
}

export default ListVideos

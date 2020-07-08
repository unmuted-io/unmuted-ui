import React, { useState, useEffect } from 'react'
import VideoThumbnail from '../videoThumbnail/VideoThumbnail'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { FETCH_USERS } from '../../graphql/queries'

interface Props {
  query?: string
  channel: string
}

const ListVideos = (props: Props) => {
  // @ts-ignore
  const {loading, error, videos = []} = useQuery(FETCH_USERS)

  return (
    <div>
      {videos && videos.map(video => (
        <VideoThumbnail
          {...video}
        />
      ))}
    </div>
  )
}

export default ListVideos

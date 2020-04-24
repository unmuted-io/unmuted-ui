import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Video } from '../../types/'
import {
  cutOffText,
  secondsToHms
} from '../../utility/utility'
import PlaceholderImage from "../../assets/images/placeholder.png"

export interface VideoThumbnailProps {
  title: string,
  description: string,
  source: string,
  rand: string,
  processed?: 0 | 1,
  id?: number,
  created_at: string,
  updated_at: string,
  username: string,
  count: number
}

export interface VideoThumbnailState {

}

class VideoThumbnail extends React.Component<VideoThumbnailProps, VideoThumbnailState> {
  render() {
    const {
      title,
      description,
      source,
      created_at,
      username,
      count,
      rand
    } = this.props
    const createdAtTime = (new Date(created_at)).getTime()
    const nowTime = (new Date()).getTime()
    const msTimeDifference = nowTime - createdAtTime
    const timeAgo = secondsToHms(msTimeDifference / 1000)
    return (
      <div className='recently-viewed-thumbnail'>
        <div className='recently-viewed-thumbnail-image'>
          <NavLink to={`/videos/${rand}`}>
            <img className='recently-viewed-thumbnail-image-content' src={PlaceholderImage} />
          </NavLink>
        </div>
        <div className='recently-viewed-thumbnail-info'>
          <div className='recently-viewed-thumbnail-avatar'></div>
          <div className='recently-viewed-thumbnail-info-text'>
            <div className='recently-viewed-thumbnail-info-text-title-area'>
              <NavLink to={`/videos/${rand}`}>
                <span className='recently-viewed-thumbnail-info-text-title-area-content'>{title}</span>
              </NavLink>
            </div>
            <span className='recently-viewed-thumbnail-info-text-user'>{username}</span><br />
            <span className='recently-viewed-thumbnail-info-text-views'>{count} Views</span> | <span className='video-thumbnail-info-text-time'>{`${timeAgo} ago`}</span>
            <span className='recently-viewed-thumbnail-info-text-description'>{description}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStatToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default VideoThumbnail;
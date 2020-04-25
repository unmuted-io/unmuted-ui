import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Video } from '../../types/'
import {
  cutOffText,
  secondsToHms
} from '../../utility/utility'
import PlaceholderImage from "../../assets/images/placeholder.png"

const { REACT_APP_API_BASE_URL } = process.env

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
  currentThumbnail: string,
  timer: number
}

class VideoThumbnail extends React.Component<VideoThumbnailProps, VideoThumbnailState> {
  hoverInterval: any

  constructor(props) {
    super(props)
    this.state = {
      currentThumbnail: PlaceholderImage,
      timer: 0
    }
    this.hoverInterval
  }
  onMouseIn = () => {
    console.log('mouse in')
    this.hoverInterval = setInterval(() => {
      const { timer } = this.state
      this.setState({
        timer: timer + 100
      })
      console.log('this.state.timer: ', this.state.timer)
    }, 100)
  }

  onMouseOut = () => {
    console.log('mouse out')
    clearInterval(this.hoverInterval)
  }

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
    const { currentThumbnail, timer } = this.state
    const shortenedTitle = cutOffText(title, 60)
    const createdAtTime = (new Date(created_at)).getTime()
    const nowTime = (new Date()).getTime()
    const msTimeDifference = nowTime - createdAtTime
    const timeAgo = secondsToHms(msTimeDifference / 1000)
    const thumbnailTimer = Math.floor(timer / 1000)
    const thumbnailIterator = (thumbnailTimer % 8) + 1
    const thumbnailSource = `${REACT_APP_API_BASE_URL}/videos/processed/thumbnails/${source.replace('.mp4', '')}-${thumbnailIterator}.png`
    console.log('thumbnailSource: ', thumbnailSource)
    return (
      <div className='video-thumbnail'>
        <div className='video-thumbnail-image'>
          <NavLink to={`/videos/${rand}`}>
            <img className='video-thumbnail-image-content' src={thumbnailSource} onMouseOver={this.onMouseIn} onMouseOut={this.onMouseOut} />
          </NavLink>
        </div>
        <div className='video-thumbnail-info'>
          <div className='video-thumbnail-avatar'></div>
          <div className='video-thumbnail-info-text'>
            <NavLink to={`/videos/${rand}`}>
              <span className='video-thumbnail-info-text-title'>{shortenedTitle}</span>
            </NavLink><br />
            <span className='video-thumbnail-info-text-user'>{username}</span><br />
            <span className='video-thumbnail-info-text-views'>{count} Views</span> | <span className='video-thumbnail-info-text-time'>{`${timeAgo} ago`}</span>
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
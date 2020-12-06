import React from 'react'
import { Link } from 'react-router-dom'
import { Video } from '../../types/'
import { cutOffText, secondsToHms } from '../../utility/utility'
import profileImage from '../../assets/images/widget/img-round1.jpg'
import PlaceholderImage from '../../assets/images/placeholder.png'

const { REACT_APP_API_BASE_URL, REACT_APP_DSTOR_API_BASE_URL } = process.env

export interface VideoThumbnailProps {
  title: string
  description: string
  source: string
  rand: string
  id?: number
  created_at: string
  updated_at: string
  username: string
  count: number
  profile: string
  processed: string
}

export interface VideoThumbnailState {
  currentThumbnail: string
  timer: number
}

class VideoThumbnail extends React.Component<VideoThumbnailProps, VideoThumbnailState> {
  hoverInterval: any

  constructor(props) {
    super(props)
    this.state = {
      currentThumbnail: PlaceholderImage,
      timer: 0,
    }
    this.hoverInterval
  }

  onMouseIn = () => {
    this.hoverInterval = setInterval(() => {
      const { timer } = this.state
      this.setState({
        timer: timer + 100,
      })
    }, 100)
  }

  onMouseOut = () => {
    clearInterval(this.hoverInterval)
  }

  componentWillUnmount = () => {
    clearInterval(this.hoverInterval)
  }

  render() {
    const { title, description, source, created_at, username, count, rand, profile, processed } = this.props
    const { currentThumbnail, timer } = this.state
    const shortenedTitle = cutOffText(title, 60)
    const createdAtTime = new Date(created_at).getTime()
    const nowTime = new Date().getTime()
    const msTimeDifference = nowTime - createdAtTime
    const timeAgo = secondsToHms(msTimeDifference / 1000)
    // const thumbnailTimer = Math.floor(timer / 1000)
    // const thumbnailIterator = (thumbnailTimer % 8) + 1
    // const thumbnailSource = `${REACT_APP_API_BASE_URL}/images/videos/thumbnails/${source.replace(
    //   '.mp4',
    //   ''
    // )}-360x240-${thumbnailIterator}.png`
    const profileImageUrl = profile ? JSON.parse(profile).profileImageUrl : ''
    const profileImageSrc = profileImageUrl ? `${REACT_APP_API_BASE_URL}/${profileImageUrl}` : profileImage
    const processedObj = JSON.parse(processed)
    const thumbnails = processedObj.thumbnails.files
    const thumbnailValues = Object.values(thumbnails)
    const thumbnailSource = `${REACT_APP_DSTOR_API_BASE_URL}/ipfs/${thumbnailValues[0]}`
    return (
      <div className="video-thumbnail">
        <div className="video-thumbnail-image">
          <Link to={`/videos/${rand}`}>
            <img
              className="video-thumbnail-image-content"
              src={thumbnailSource}
              onMouseOver={this.onMouseIn}
              onMouseOut={this.onMouseOut}
            />
          </Link>
        </div>
        <div className="video-thumbnail-info">
          <div className="avatar">
            <Link to={`/channel/${username}`}>
              <img className={`img-fluid img-thumbnail clickable`} src={profileImageSrc} alt="Profile-user" />
            </Link>
          </div>
          <div className="video-thumbnail-info-text">
            <Link to={`/videos/${rand}`}>
              <span className="title">{shortenedTitle}</span>
            </Link>
            <br />
            <span className="user">
              <Link to={`/channel/${username}`}>{username}</Link>
            </span>
            <br />
            <span className="views">{count} Views</span> | <span className="time">{`${timeAgo} ago`}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStatToProps = (state) => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default VideoThumbnail

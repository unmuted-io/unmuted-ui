import React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { connect } from 'react-redux'
import { ViewCountUpdate } from '../../types'

interface VideoPlayerComponentProps {
  updateViewCount: (data: ViewCountUpdate) => void;
  rand: string;
}

interface VideoPlayerComponentState {

}

class VideoPlayer extends React.Component<VideoPlayerComponentProps, VideoPlayerComponentState> {
  videoNode: any
  timeupdateCount: number
  player: any

  constructor (props: VideoPlayerComponentProps) {
    super(props)
    this.timeupdateCount = 0
  }

  componentDidMount (): void {
    const { updateViewCount, rand } = this.props
    // instantiate Video.js
    console.log('instantiating videojs, this.props: ', this.props)
    this.player = videojs(this.videoNode, this.props, function onPlayerReady () {
      console.log('onPlayerReady', this)
    })
    this.player.on('timeupdate', () => {
      if (this.timeupdateCount >= 40) {
        const lastPosition = this.player.currentTime()
        // trigger movie watched
        updateViewCount({
          rand,
          lastPosition
        })
        // then turn off this event
        this.player.off('timeupdate')
        console.log('this.player.livetracker:', this.player.livetracker)
      }
      this.timeupdateCount++
    })
  }

  // destroy player on unmount
  componentWillUnmount (): void {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render (): object {
    return (
      <div>
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateViewCount: (data: ViewCountUpdate) => dispatch({ type: 'UPDATE_VIEW_COUNT', data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)

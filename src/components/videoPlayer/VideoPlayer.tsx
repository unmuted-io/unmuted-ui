import React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default class VideoPlayer extends React.Component {
  player: any
  videoNode: any
  timeupdateCount: number

  constructor (props) {
    super(props)
    this.timeupdateCount = 0
  }

  componentDidMount(): void {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    })
    this.player.on('timeupdate', () => {
      if (this.timeupdateCount >= 40) {
        // trigger movie watched

        // then turn off this event
        this.player.off('timeupdate')
      }
      this.timeupdateCount++
    })
  }

  // destroy player on unmount
  componentWillUnmount(): void {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render(): object {
    return (
      <div>
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    )
  }
}
import React, { Component, Fragment } from "react"
import { Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from "reactstrap"
import DropzoneComponent from "react-dropzone-component"
import InputMask from "react-input-mask"
import ReactNumeric, { predefinedOptions } from "react-numeric"
import MainCard from "../../components/mainCard/mainCard"
import WebSocketChat from '../../components/WebSocketChat/WebSocketChat'
import { useParams } from 'react-router-dom'
import EOSIOClient from '../../eosioClient'
// import videojs from 'video.js'

// const eosClient = new EOSIOClient('haytemrtg4ge') // hardcode app name

class ViewVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      source: ''
    }
  }

  componentWillMount = async () => {
    const { REACT_APP_API_BASE_URL } = process.env
    const { rand } = this.props.match.params
    const videoResponse = await fetch(`${REACT_APP_API_BASE_URL}/videos/TZAWGQLDZMAR2`)
    const videoData = await videoResponse.json()
    this.setState({
      ...videoData[0]
    })
  }

  // sendSuperChat = (data) => {
  //   eosClient.transaction(data)
  // }

  render() {
    const { REACT_APP_API_BASE_URL } = process.env
    const { source, title, description } = this.state
    const videoPath = `${REACT_APP_API_BASE_URL}/videos/processed/${source}`
    if (!source) return (<div></div>)
    return (
      <Row id='view-video'>
        <Col sm={12} lg={8} id='video-wrapper'>
          <Card>
            <CardBody>
              <video  data-vjs-player
                id="primary-video"
                className="video-js vjs-default-skin"
                controls
                width='100%'
                preload="auto"
                poster="MY_VIDEO_POSTER.jpg"
                data-setup="{ 'fluid': true }"
                autoPlay={true}
                muted={true}
                style={{ display: 'flex' }}
              >
                <source src='https://coolestguidesontheplanet.com/videodrome/cgp_video/mymoviei.mp4' type="video/mp4" />
                <source src="MY_VIDEO.webm" type="video/webm" />
                <p className="vjs-no-js">
                  To view this video please enable JavaScript, and consider upgrading to a
                  web browser that
                  <a href="https://videojs.com/html5-video-support/" target="_blank"
                    >supports HTML5 video</a>
                </p>
                </video>
                <div id='primary-video-info'>
                  <p>{description}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card>
              <CardBody style={{ height: 480, display: 'flex', flexDirection: 'row' }}>
                <WebSocketChat sendSuperChat={this.sendSuperChat} />
              </CardBody>
            </Card>
          </Col>
        </Row>
    )
  }
}

export default ViewVideo

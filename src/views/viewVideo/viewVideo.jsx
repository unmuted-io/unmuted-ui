import React, { Component, Fragment } from "react"
import { Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from "reactstrap"
import DropzoneComponent from "react-dropzone-component"
import InputMask from "react-input-mask"
import ReactNumeric, { predefinedOptions } from "react-numeric"
import MainCard from "../../components/mainCard/mainCard"
import WebSocketChat from '../../components/WebSocketChat/WebSocketChat'
import { useParams } from 'react-router-dom'


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
    const { rand } = this.props.match.params
    const videoResponse = await fetch(`http://localhost:3333/videos/${rand}`)
    const videoData = await videoResponse.json()
    this.setState({
      ...videoData[0]
    })
  }

  render() {
    const { source, title, description } = this.state
    const videoPath = `http://localhost:3333/videos/processed/${source}`
    if (!source) return (<div></div>)
    return (
      <Row id='view-video'>
        <Col sm={12} lg={8} id='video-wrapper'>
          <Card>
            <CardBody>
              <video
                id="primary-video"
                className="video-js"
                controls
                preload="auto"
                width="100%"
                poster="MY_VIDEO_POSTER.jpg"
                data-setup="{}"
                autoPlay={true}
                muted={true}
              >
                <source src={`${videoPath}`} type="video/mp4" />
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
              <CardBody>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <WebSocketChat />
              </CardBody>
            </Card>
          </Col>
        </Row>
    )
  }
}

export default ViewVideo

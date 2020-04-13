import React, { Component, Fragment } from "react"
import { Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from "reactstrap"
import DropzoneComponent from "react-dropzone-component"
import InputMask from "react-input-mask"
import ReactNumeric, { predefinedOptions } from "react-numeric"
import MainCard from "../../components/mainCard/mainCard"
import WebSocketChat from '../../components/WebSocketChat/WebSocketChat'
import { useParams } from 'react-router-dom'
import EOSIOClient from '../../eosioClient'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer'

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
    const videoResponse = await fetch(`${REACT_APP_API_BASE_URL}/videos/RLLIABUKNBB2K`)
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
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: 'https://coolestguidesontheplanet.com/videodrome/cgp_video/mymoviei.mp4',
        type: 'video/mp4'
      }],
      fill: true,
      aspectRatio: '16:9'
    }
    if (!source) return (<div />)
    return (
      <Row id='view-video'>
        <Col sm={12} lg={8} id='video-wrapper'>
          <Card>
            <CardBody>
                <VideoPlayer { ...videoJsOptions } />
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

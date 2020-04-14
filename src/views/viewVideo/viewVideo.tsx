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
interface ViewVideoComponentProps {
  match: any
}

interface ViewVideoComponentState {
  title: string,
  description: string,
  sourceRand: string
}

class ViewVideo extends Component<ViewVideoComponentProps, ViewVideoComponentState> {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      sourceRand: ''
    }
  }

  componentWillMount = async () => {
    const { REACT_APP_API_BASE_URL } = process.env
    const { rand } = this.props.match.params
    const videoResponse = await fetch(`${REACT_APP_API_BASE_URL}/videos/ZUBZGTYF6LQPS`)
    const videoData = await videoResponse.json()
    this.setState({
      ...videoData[0],
      sourceRand: rand
    })
  }

  sendSuperChat = (data) => {
    // change to Edge, or show QR code
    // eosClient.transaction(data)
  }

  render() {
    const { REACT_APP_API_BASE_URL } = process.env
    const { sourceRand, title, description } = this.state
    const videoPath = `${REACT_APP_API_BASE_URL}/videos/processed/${sourceRand}`
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      sources: [{
        src: 'https://coolestguidesontheplanet.com/videodrome/cgp_video/mymoviei.mp4',
        type: 'video/mp4'
      }],
      fill: true,
      aspectRatio: '16:9'
    }
    if (!sourceRand) return (<div />)
    return (
      <Row id='view-video'>
        <Col sm={12} lg={8} id='video-wrapper'>
          <Card>
            <CardBody>
                <VideoPlayer { ...videoJsOptions } sourceRand={sourceRand} />
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

import React, { Component, Fragment } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from 'reactstrap'
import DropzoneComponent from 'react-dropzone-component'
import InputMask from 'react-input-mask'
import ReactNumeric, { predefinedOptions } from 'react-numeric'
import MainCard from '../../components/mainCard/mainCard'
import WebSocketChat from '../../components/WebSocketChat/WebSocketChat'
import { useParams } from 'react-router-dom'
import EOSIOClient from '../../eosioClient'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer'
import { string } from '@amcharts/amcharts4/core'

// const eosClient = new EOSIOClient('haytemrtg4ge') // hardcode app name
interface ViewVideoComponentProps {
  match: any
}

interface ViewVideoComponentState {
  title: string
  description: string
  sourceRand: string
  created_at: string
  username: string
  count: number
}

class ViewVideo extends Component<ViewVideoComponentProps, ViewVideoComponentState> {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      sourceRand: '',
      created_at: '',
      username: '',
      count: 0,
    }
  }

  componentWillMount = async () => {
    const { REACT_APP_API_BASE_URL } = process.env
    const { rand } = this.props.match.params
    const videoResponse = await fetch(`${REACT_APP_API_BASE_URL}/videos/ZUBZGTYF6LQPS`)
    const videoData = await videoResponse.json()
    this.setState({
      ...videoData[0],
      sourceRand: rand,
    })
  }

  sendSuperChat = (data) => {
    // change to Edge, or show QR code
    // eosClient.transaction(data)
  }

  render() {
    const { REACT_APP_API_BASE_URL } = process.env
    const { sourceRand, title, description, created_at, username, count } = this.state
    if (!sourceRand) return <div />
    const videoPath = `${REACT_APP_API_BASE_URL}/videos/processed/${sourceRand}`
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      sources: [
        {
          src: 'https://coolestguidesontheplanet.com/videodrome/cgp_video/mymoviei.mp4',
          type: 'video/mp4',
        },
      ],
      fill: true,
      aspectRatio: '16:9',
    }
    const date = new Date(created_at)
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })
    const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(date)
    const createdAtSyntax = `${mo} ${da}, ${ye}`

    return (
      <Row id="view-video">
        <Col sm={12} lg={8} id="video-wrapper">
          <Card>
            <CardBody>
              <VideoPlayer {...videoJsOptions} sourceRand={sourceRand} />
              <div className="primary-video-info">
                <h3 className="primary-video-info-title">{title}</h3>
                <h4 className="primary-video-info-username">{username}</h4>
                <p className="primary-video-info-description">
                  <span className="primary-video-info-description-stats">
                    {count} views | {createdAtSyntax}
                  </span><br /><br />
                  <span className="primary-video-info-description-content">{description}</span>
                </p>
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

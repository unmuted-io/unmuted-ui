import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
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
import axios from 'axios'
import { AxiosResponse } from '../../types'

const { REACT_APP_API_BASE_URL } = process.env

// const eosClient = new EOSIOClient('haytemrtg4ge') // hardcode app name
interface ViewVideoComponentProps {
  match: any
  account: any
}

interface ViewVideoComponentState {
  title: string
  description: string
  sourceRand: string
  created_at: string
  username: string
  count: number
  videoRating: number
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
      videoRating: 0,
      count: 0,
    }
  }

  componentWillMount = async () => {
    const { rand } = this.props.match.params
    const { account } = this.props
    const videoResponse: AxiosResponse = await axios.get(`${REACT_APP_API_BASE_URL}/videos/ZUBZGTYF6LQPS`)
    const videoData = videoResponse.data
    this.setState({
      ...videoData,
      sourceRand: rand,
    })
    if (account) {
      const videoRatingResponse: AxiosResponse = await axios.get(
        `${REACT_APP_API_BASE_URL}/video-rating/ZUBZGTYF6LQPS/user/${account.username}`
      )
      const videoRating = videoRatingResponse.data
      this.setState({
        videoRating: videoRating.direction,
      })
    }
  }

  sendSuperChat = (data) => {
    // change to Edge, or show QR code
    // eosClient.transaction(data)
  }

  onThumbClick = async (input: number) => {
    const { videoRating, sourceRand } = this.state
    const { account } = this.props
    // ignore if not logged in
    if (!account) return
    if (input === 1) {
      if (videoRating === 1) {
      } else if (videoRating === 0) {
      } else {
      }
    } else {
      if (videoRating === 1) {
      } else if (videoRating === 0) {
      } else {
      }
    }
    this.setState(
      {
        videoRating: input,
      },
      async () => {
        const response: AxiosResponse = await axios.post(`${REACT_APP_API_BASE_URL}/video-rating`, {
          username: account.username,
          uuid: sourceRand,
          direction: input,
        })
      }
    )
  }

  render() {
    const { REACT_APP_API_BASE_URL } = process.env
    const { sourceRand, title, description, created_at, username, count, videoRating } = this.state
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
    const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(date)
    const createdAtSyntax = `${mo} ${da}, ${ye}`

    return (
      <Row id="view-video">
        <Col sm={12} lg={8} id="video-wrapper">
          <Card>
            <CardBody>
              <VideoPlayer {...videoJsOptions} sourceRand={sourceRand} />
              <div className="primary-video-info">
                <div className="primary-video-info-upper">
                  <div className="primary-video-info-upper-summary">
                    <h3 className="primary-video-info-upper-summary-title">{title}</h3>
                    <h4 className="primary-video-info-upper-summary-username">{username}</h4>
                  </div>
                  <div className="primary-video-info-upper-interaction">
                    <div className="votes">
                      <div className="vote-icon-wrap">
                        <i
                          className="feather icon-thumbs-up vote-icon"
                          onClick={() => this.onThumbClick(1)}
                          style={{ color: videoRating === 1 ? '#00cc00' : 'inherit' }}
                        />
                        <span className="vote-count">9999</span>
                      </div>
                      <div className="vote-icon-wrap">
                        <i
                          className="feather icon-thumbs-down vote-icon"
                          onClick={() => this.onThumbClick(-1)}
                          style={{ color: videoRating === -1 ? 'red' : 'inherit' }}
                        />
                        <span className="vote-count">9999</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="primary-video-info-description">
                  <span className="primary-video-info-description-stats">
                    {count} views | {createdAtSyntax}
                  </span>
                  <br />
                  <br />
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

const mapStateToProps = (state) => {
  return {
    account: state.auth.account,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewVideo)

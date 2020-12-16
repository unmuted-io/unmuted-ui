import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer'
import axios from 'axios'
import { AxiosResponse } from '../../types'
import profileImage from '../../assets/images/widget/img-round1.jpg'
import SlotText from '../../components/SlotText'
import PopoverItem from '../../components/PopoverItem'
import SentimentTokenInfo from '../../components/BrandTooltip/SentimentTokenInfo'
import DisabledVideoPlaceholder from './DisabledVideoPlaceholder'

const { REACT_APP_API_BASE_URL, REACT_APP_DSTOR_API_BASE_URL } = process.env

// const eosClient = new EOSIOClient('haytemrtg4ge') // hardcode app name
interface ViewVideoComponentProps {
  match: any
  account: any
}

interface ViewVideoComponentState {
  title: string
  description: string
  rand: string
  source: string
  created_at: string
  username: string
  count: number
  hash: string
  userScore: number
  upvoteScores: number[]
  downvoteScores: number[]
  upvoteRotation: string
  downvoteRotation: string
  profile: string
  isVotingDisabled: boolean
  processed: string
  is_active: boolean
}

class ViewVideo extends Component<ViewVideoComponentProps, ViewVideoComponentState> {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      rand: '',
      source: '',
      created_at: '',
      username: '',
      profile: '',
      userScore: 0,
      count: 0,
      hash: '',
      upvoteScores: [-1, 0, 1],
      downvoteScores: [-1, 0, 1],
      upvoteRotation: 'none',
      downvoteRotation: 'none',
      isVotingDisabled: false,
      processed: '',
      is_active: false,
    }
  }

  UNSAFE_componentWillMount = async () => {
    const { rand } = this.props.match.params
    const { account } = this.props
    const videoResponse: AxiosResponse = await axios.get(`${REACT_APP_API_BASE_URL}/videos/${rand}`)
    const videoData = videoResponse.data
    this.setState({
      ...videoData,
      rand,
    })
    const userScoresStatsResponse: AxiosResponse = await axios.get(`${REACT_APP_API_BASE_URL}/video-rating/${rand}`)
    const stats = userScoresStatsResponse.data
    const currentUpvoteValue = parseInt(stats['1'])
    const currentDownvoteValue = parseInt(stats['1'])
    this.setState({
      upvoteScores: [currentUpvoteValue - 1, currentUpvoteValue, currentUpvoteValue + 1],
      downvoteScores: [currentDownvoteValue - 1, currentDownvoteValue, currentDownvoteValue + 1],
    })
    if (account && videoData.is_active) {
      const userScoreResponse: AxiosResponse = await axios.get(
        `${REACT_APP_API_BASE_URL}/video-rating/${rand}/user/${account.username}`
      )
      const userScore = userScoreResponse.data
      this.setState({
        userScore: userScore.direction,
      })
    }
  }

  onThumbClick = async (input: number) => {
    const { userScore, rand, upvoteScores, downvoteScores, isVotingDisabled } = this.state
    const { account } = this.props
    // ignore if not logged in or user just voted right beforehand
    if (!account || isVotingDisabled) return
    // initialize variables as current state
    let newUserScore = userScore
    let newUpvoteScore = upvoteScores[1]
    let newDownvoteScore = downvoteScores[1]
    let upvoteRotation
    let downvoteRotation
    // if pressed up
    if (input === 1) {
      // if already upvoted
      if (userScore === 1) {
        // then undo upvote
        newUserScore = 0
        newUpvoteScore--
        upvoteRotation = 'rotated-up'
        // if was 0 before
      } else if (userScore === 0) {
        // then add upvote
        newUserScore = 1
        newUpvoteScore++
        upvoteRotation = 'rotated-down'
      } else {
        // if was -1 before
        newUserScore = 1
        newUpvoteScore++
        newDownvoteScore--
        upvoteRotation = 'rotated-down'
        downvoteRotation = 'rotated-up'
      }
    } else {
      // if was 1 and input is -1
      if (userScore === 1) {
        newUserScore = -1
        newUpvoteScore--
        newDownvoteScore++
        downvoteRotation = 'rotated-down'
        upvoteRotation = 'rotated-up'
        // if input is -1 and previous was 0
      } else if (userScore === 0) {
        newUserScore = -1
        newDownvoteScore++
        downvoteRotation = 'rotated-down'
      } else {
        // if input is -1 and was already -1
        newUserScore = 0
        newDownvoteScore--
        downvoteRotation = 'rotated-up'
      }
    }
    this.setState(
      {
        userScore: newUserScore,
        upvoteRotation,
        downvoteRotation,
        isVotingDisabled: true,
      },
      async () => {
        setTimeout(() => {
          this.setState({
            upvoteRotation: 'none',
            downvoteRotation: 'none',
            upvoteScores: [newUpvoteScore - 1, newUpvoteScore, newUpvoteScore + 1],
            downvoteScores: [newDownvoteScore - 1, newDownvoteScore, newDownvoteScore + 1],
            isVotingDisabled: false,
          })
        }, 1000)
        const response: AxiosResponse = await axios.post(`${REACT_APP_API_BASE_URL}/video-rating`, {
          username: account.username,
          uuid: rand,
          direction: input,
        })
      }
    )
  }

  render() {
    const {
      rand,
      title,
      description,
      created_at,
      username,
      count,
      userScore,
      upvoteScores,
      downvoteScores,
      source,
      hash,
      profile,
      upvoteRotation,
      downvoteRotation,
      processed,
      is_active,
    } = this.state
    if (!rand) return <div />
    const processedJSON = JSON.parse(processed)
    let playlistHash
    for (const file in processedJSON.video.files) {
      if (file.includes('.m3u8')) {
        playlistHash = processedJSON.video.files[file]
      }
    }
    const videoIdentifier = source.replace('.mp4', '')
    const videoPath = `${REACT_APP_DSTOR_API_BASE_URL}/ipfs/${playlistHash}`
    const poster = `${REACT_APP_API_BASE_URL}/images/videos/thumbnails/${videoIdentifier}-1.png`
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      muted: false,
      sources: [
        {
          type: 'application/x-mpegurl',
          src: videoPath,
        },
      ],
      fill: true,
      aspectRatio: '16:9',
      liveui: true,
      liveTracker: true,
    }
    const date = new Date(created_at)
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })
    const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(date)
    const createdAtSyntax = `${mo} ${da}, ${ye}`
    const profileImageUrl = profile ? JSON.parse(profile).profileImageUrl : ''
    const profileImageSrc = profileImageUrl ? `${REACT_APP_API_BASE_URL}/${profileImageUrl}` : profileImage
    const upvoteScoresValues = upvoteScores.map((score) => score.toString())
    const downvoteScoresValues = downvoteScores.map((score) => score.toString())
    return (
      <Row id="view-video">
        <Col sm={12} lg={8} id="video-wrapper">
          <Card>
            <CardBody>
              {is_active ? <VideoPlayer {...videoJsOptions} rand={rand} /> : <DisabledVideoPlaceholder rand={rand} />}
              <div className="primary-video-info">
                <div className="upper">
                  <div className="summary">
                    <h3 className="title">{title}</h3>
                  </div>
                  <div className="upper">
                    <PopoverItem
                      placement="top"
                      button="Brand"
                      color="warning"
                      title="Brand Channel"
                      text={<SentimentTokenInfo />}
                      className="mr-4"
                    />
                    <div className="votes">
                      <div className="vote-icon-wrap">
                        <i
                          className="feather icon-thumbs-up vote-icon"
                          onClick={() => this.onThumbClick(1)}
                          style={{ color: userScore === 1 ? '#00cc00' : 'inherit' }}
                        />
                        <SlotText rotation={upvoteRotation} values={upvoteScoresValues} />
                      </div>
                      <div className="vote-icon-wrap">
                        <i
                          className="feather icon-thumbs-down vote-icon"
                          onClick={() => this.onThumbClick(-1)}
                          style={{ color: userScore === -1 ? 'red' : 'inherit' }}
                        />
                        <SlotText rotation={downvoteRotation} values={downvoteScoresValues} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower">
                  <div className="left">
                    <Link to={`/channel/${username}`}>
                      <img src={profileImageSrc} className="img-fluid img-thumbnail clickable user-avatar" />
                    </Link>
                  </div>
                  <div className="right">
                    <h5>
                      <Link to={`/channel/${username}`} className="channel-link">
                        {username}
                      </Link>
                    </h5>
                    <span>
                      {count} views | {createdAtSyntax}
                    </span>
                    <br />
                    <br />
                    <span>{description}</span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card style={{ height: '100%' }}>
            <CardBody style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
              {/*<WebSocketChat rand={rand} /> */}
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

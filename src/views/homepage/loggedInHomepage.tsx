import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import MainCard from '../../components/mainCard/mainCard'
import { ClipLoader } from 'react-spinners'
import { connect, Connect } from 'react-redux'
import VideoThumbnail from '../videoThumbnail/VideoThumbnail'
import axios from 'axios'

export interface LoggedInHomepageProps {
  account: any
}

export interface LoggedInHomepageState {
  recommended: any[]
}

class LoggedInHomepage extends React.Component<LoggedInHomepageProps, LoggedInHomepageState> {
  constructor(props: LoggedInHomepageProps) {
    super(props)
    this.state = {
      recommended: [],
    }
  }

  componentDidMount = () => {
    this.fetchRecommendedVideos()
  }

  fetchRecommendedVideos = async () => {
    const { REACT_APP_API_BASE_URL } = process.env
    const { account } = this.props
    const username = account ? account.username : ''
    try {
      const recommendedVideoResponse = await axios.get(`${REACT_APP_API_BASE_URL}/videos/rec/20/${username}`)
      this.setState({
        recommended: recommendedVideoResponse.data.videos,
      })
    } catch (err) {
      console.error('fetchRecommendedVideos error')
    }
  }

  render() {
    const { recommended } = this.state
    return (
      <MainCard title="Recommended" isOption className="recommended-videos-grid">
        {Object.values(recommended).map((video) => {
          return <VideoThumbnail key={video.rand + Math.floor(Math.random() * 99999)} {...video} />
        })}
      </MainCard>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHomepage)

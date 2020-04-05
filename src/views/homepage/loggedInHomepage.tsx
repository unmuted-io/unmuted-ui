import React, { Component } from "react";
import {
  Row,
  Col
} from "reactstrap";
import MainCard from "../../components/mainCard/mainCard"
import { ClipLoader } from 'react-spinners'
import { connect, Connect } from 'react-redux'
import VideoThumbnail from '../videoThumbnail/VideoThumbnail'

export interface LoggedInHomepageProps {
  fetchRecommendedVideos: () => void,
  recommended: any[]
}

export interface LoggedInHomepageState {

}

class LoggedInHomepage extends React.Component<LoggedInHomepageProps, LoggedInHomepageState> {
  constructor(props: LoggedInHomepageProps) {
    super(props)

  }

  componentDidMount = () => {
    const { fetchRecommendedVideos } = this.props
    fetchRecommendedVideos()
  }

  render() {
    const { recommended } = this.props
    return (
      <MainCard title="Recommended" isOption className='recommended-videos-grid'>
        {Object.values(recommended).map(video => {
          return (
            <VideoThumbnail
              key={video.rand}
              {...video}
            />
          )
        })}
      </MainCard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recommended: state.videos.recommended
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecommendedVideos: () => dispatch({ type: 'FETCH_RECOMMENDED_VIDEOS' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHomepage)
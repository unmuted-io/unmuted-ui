import React, { Component } from "react";
import {
  Row,
  Col
} from "reactstrap";
import MainCard from "../../components/mainCard/mainCard"
import { ClipLoader } from 'react-spinners'
import { connect, Connect } from 'react-redux'
import RecentlyViewedThumbnail from '../recentlyViewed/recentlyViewedThumbnail'

export interface RecentlyViewedProps {
  fetchRecommendedVideos: () => void,
  recommended: any[]
}

export interface RecentlyViewedState {

}

class RecentlyViewed extends React.Component<RecentlyViewedProps, RecentlyViewedState> {
  constructor(props: RecentlyViewedProps) {
    super(props)

  }

  componentDidMount = () => {
    const { fetchRecommendedVideos } = this.props
    fetchRecommendedVideos()
  }

  render() {
    const { recommended } = this.props
    return (
      <Row>
        <Col sm={12}>
          <MainCard title="Recently Viewed" isOption className='recommended-videos-grid'>
            {Object.values(recommended).map(video => {
              return (
                <RecentlyViewedThumbnail
                  key={video.rand}
                  {...video}
                />
              )
            })}
          </MainCard>
        </Col>
      </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyViewed)
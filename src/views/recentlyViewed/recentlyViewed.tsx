import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap'
import MainCard from '../../components/mainCard/mainCard'
import { ClipLoader } from 'react-spinners'
import { connect, Connect } from 'react-redux'
import RecentlyViewedThumbnail from '../recentlyViewed/recentlyViewedThumbnail'
import axios from 'axios'

export interface RecentlyViewedProps {
  account: any;
}

export interface RecentlyViewedState {
  recentlyViewed: any[];
}

class RecentlyViewed extends React.Component<RecentlyViewedProps, RecentlyViewedState> {
  constructor (props: RecentlyViewedProps) {
    super(props)
    this.state = {
      recentlyViewed: []
    }
  }

  componentDidMount = () => {
    this.fetchRecommendedVideos()
  }

  fetchRecommendedVideos = async () => {
    const { REACT_APP_API_BASE_URL } = process.env
    const { account } = this.props
    const recentlyViewedVideoResponse = await axios
      .get(`${REACT_APP_API_BASE_URL}/videos/recently-viewed/${account.username}/20`)
    this.setState({
      recentlyViewed: recentlyViewedVideoResponse.data
    })
  }

  render () {
    const { recentlyViewed } = this.state
    return (
      <Row>
        <Col sm={12}>
          <MainCard title="Recently Viewed" isOption className='recommended-videos-grid'>
            {Object.values(recentlyViewed).map(video => {
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.auth.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyViewed)

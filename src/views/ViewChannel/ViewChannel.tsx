import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import coverImage from '../../assets/images/widget/slider7-800x266.jpg'
import profileImage from '../../assets/images/widget/img-round1.jpg'
import { State, AxiosResponse } from '../../types'
import axios from 'axios'
import ChannelInfo from './ChannelInfo'
import SentimentTokenInfo from '../../components/BrandTooltip/SentimentTokenInfo'
import ListVideos from '../videos/ListVideos'

const { REACT_APP_API_BASE_URL } = process.env

type ViewChannelProps = {
  match: any
  dispatch: any
}

type ViewChannelState = {
  profileImageUrl: string
  coverImageUrl: string
  isSubscribed: boolean
  subscriberCount: number
  id: number
}

export class ViewChannelComponent extends Component<ViewChannelProps, ViewChannelState> {
  constructor (props: ViewChannelProps) {
    super(props)
    this.state = {
      profileImageUrl: '',
      coverImageUrl: '',
      isSubscribed: false,
      subscriberCount: 0,
      id: null
    }
  }

  componentDidMount = async (): Promise<void> => {
    const { dispatch, match } = this.props
    const { channel } = match.params
    try {
      const fetchChannelResponse: AxiosResponse = await axios({
        method: 'GET',
        url: `${REACT_APP_API_BASE_URL}/channel/${channel}`
      })
      const { coverImageUrl, profileImageUrl, id } = fetchChannelResponse.data
      this.setState({
        coverImageUrl,
        profileImageUrl,
        id
      })
    } catch (e) {
      dispatch({
        type: 'NEW_NOTIFICATION',
        data: {
          type: 'error',
          message: 'Unable to fetch profile images'
        }
      })
    }
  }

  onClickSubscribe = () => {
    const { isSubscribed } = this.state
    this.setState({
      isSubscribed: !isSubscribed
    })
  }

  render () {
    const { channel } = this.props.match.params
    const { profileImageUrl, coverImageUrl, isSubscribed, id } = this.state
    const coverImageSrc = coverImageUrl ? `${REACT_APP_API_BASE_URL}/${coverImageUrl}` : coverImage
    const profileImageSrc = profileImageUrl ? `${REACT_APP_API_BASE_URL}/${profileImageUrl}` : profileImage

    return (
      <div id='view-channel'>
        <Row>
          <Col>
            <div className='cover-image-wrap'>
              <img src={coverImageSrc} className='cover-image' />
            </div>
            <ChannelInfo
              profileImageUrl={profileImageSrc}
              subscriberCount={0}
              channel={channel}
              isSubscribed={isSubscribed}
              onClickSubscribe={this.onClickSubscribe}
            />
          </Col>
        </Row>
        <Row>
          <Col s='12' lg='9'>
            {!!id && (
              <ListVideos
                id={id}
              />
            )}
          </Col>
          <Col s='12' lg='3'>
            <SentimentTokenInfo />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewChannelComponent)

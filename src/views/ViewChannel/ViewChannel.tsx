import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import MainCard from '../../components/mainCard/mainCard'
import coverImage from '../../assets/images/widget/slider7.jpg'
import profileImage from '../../assets/images/widget/img-round1.jpg'
import { State, AxiosResponse, Account } from '../../types'
import axios from 'axios'
import ChannelInfo from './ChannelInfo'

const { REACT_APP_API_BASE_URL } = process.env

type ViewChannelProps = {
  match: any
  dispatch: any
  account: Account
}

type ViewChannelState = {
  profileImageUrl: string
  coverImageUrl: string
  isSubscribed: boolean
  subscriberCount: number
}

export class ViewChannelComponent extends Component<ViewChannelProps, ViewChannelState> {
  constructor (props: ViewChannelProps) {
    super(props)
    this.state = {
      profileImageUrl: '',
      coverImageUrl: '',
      isSubscribed: false,
      subscriberCount: 0
    }
  }

  componentDidMount = async (): Promise<void> => {
    const { dispatch, match, account } = this.props
    const { channel } = match.params
    const user_id = account ? account.id : ''
    try {
      const fetchChannelResponse: AxiosResponse = await axios({
        method: 'GET',
        url: `${REACT_APP_API_BASE_URL}/channel/${channel}/${user_id}`
      })
      const { coverImageUrl, profileImageUrl } = fetchChannelResponse.data
      this.setState({
        coverImageUrl,
        profileImageUrl
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

  componentWillReceiveProps = async (nextProps: ViewChannelProps) => {
    const { account } = this.props
    if (account != nextProps.account) {
      const { dispatch, match } = this.props
      const { channel } = match.params
      const user_id = account ? account.id : ''
      try {
        const fetchChannelResponse: AxiosResponse = await axios({
          method: 'GET',
          url: `${REACT_APP_API_BASE_URL}/channel/${channel}/${user_id}`
        })
        const { coverImageUrl, profileImageUrl } = fetchChannelResponse.data
        this.setState({
          coverImageUrl,
          profileImageUrl
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
  }

  onClickSubscribe = async () => {
    const { dispatch, match, account } = this.props
    const { channel } = match.params
    const { isSubscribed } = this.state
    this.setState({
      isSubscribed: !isSubscribed
    })
    const updateIsSubscribedResponse = await axios({
      method: 'POST',
      url: `${REACT_APP_API_BASE_URL}/subscription/${account.id}/${channel}`,
      data: {
        isSubscribed: !isSubscribed
      }
    })
    console.log('updateIsSubscribedResponse: ', updateIsSubscribedResponse)
  }

  render () {
    const { channel } = this.props.match.params
    const { profileImageUrl, coverImageUrl, isSubscribed } = this.state
    const coverImageSrc = coverImageUrl ? `${REACT_APP_API_BASE_URL}/${coverImageUrl}` : coverImage
    const profileImageSrc = profileImageUrl ? `${REACT_APP_API_BASE_URL}/${profileImageUrl}` : profileImage

    return (
      <Row>
        <Col id='view-channel'>
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
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    account: state.auth.account
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewChannelComponent)

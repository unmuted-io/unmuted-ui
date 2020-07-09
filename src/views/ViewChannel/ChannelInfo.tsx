import React, { memo } from 'react'
import { Button } from 'reactstrap'

interface ChannelInfoProps {
  profileImageUrl: string;
  subscriberCount: number;
  channel: string;
  isSubscribed: boolean;
  onClickSubscribe: () => void
}

export default memo(function ChannelInfo (props: ChannelInfoProps) {
  const {
    profileImageUrl,
    channel,
    subscriberCount,
    onClickSubscribe,
    isSubscribed
  } = props
  return (
    <div className='channel-info'>
      <div className='channel-avatar-wrap'>
        <img src={profileImageUrl} className='img-fluid img-thumbnail clickable user-avatar' />
      </div>
      <div className='channel-info-wrap'>
        <div className='channel-name'>{channel}</div>
        <div className='subscribers'>{subscriberCount} subscribers</div>
      </div>
      <div className='channel-subscribe-wrap'>
        <Button
          color={isSubscribed ? 'secondary' : 'primary'}
          size='lg'
          onClick={onClickSubscribe}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </Button>
      </div>
    </div>
  )
})

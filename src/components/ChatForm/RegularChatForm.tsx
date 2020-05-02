import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  Button,

  Form
} from 'reactstrap'

interface ChatFormOwnProps {
  rand: string,
  onSubmit: Function,
  onChangeInput: (input: any) => void,
  input: string
}

interface ChatFormStateProps {
  account: Account
}

interface ChatFormDispatchProps {
}

type ChatFormProps = ChatFormOwnProps & ChatFormStateProps & ChatFormDispatchProps

interface ChatFormState {
  chat: object
  input: string
  isConnected: boolean
}

class ChatFormComponent extends React.Component<ChatFormProps, ChatFormState> {
  constructor(props: ChatFormProps) {
    super(props)
    this.state = {
      chat: {},
      input: '',
      isConnected: false
    }
  }

  render () {
    const {
      account,
      onSubmit,
      onChangeInput
    } = this.props
    const { input, } = this.state
    return (
      <div>
        <Form type="submit" onSubmit={onSubmit} disabled={!!account}>
          <div className="chat-area">
            <input
              disabled={!account}
              className={'chat-area-input'}
              type="text"
              value={input}
              onChange={onChangeInput}
            />
            <Button color="primary" className="mb-4">
              Send
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state): ChatFormStateProps => {
  return {
    account: state.auth.account
  }
}

export default connect(mapStateToProps)(ChatFormComponent)

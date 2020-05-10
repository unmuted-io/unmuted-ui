import React from 'react'
import { connect } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import { Notification, State } from '../../types'

type ToastedLayoutProps = {
  notification: Notification,
  addToast: (message: string, { appearance: string, autoDismiss: boolean }) => void
}

function withToast(Component) {
  return function WrappedComponent(props) {
    const toastFuncs = useToasts()
    return <Component {...props} {...toastFuncs} />;
  }
}

export class ToastedLayout extends React.Component<ToastedLayoutProps> {

  UNSAFE_componentWillReceiveProps = (nextProps: ToastedLayoutProps) => {
    const { notification, addToast } = this.props
    const { message, type, autoDismiss = true } = nextProps.notification
    if (nextProps.notification !== notification) {
      addToast(message, {
        appearance: type,
        autoDismiss: autoDismiss || true
      })
    }
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  notification: state.notification
})

export default connect(mapStateToProps)(withToast(ToastedLayout))
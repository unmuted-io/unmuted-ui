import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  AuthSinginComponent,
  AuthSinginComponentStateProps,
  AuthSinginComponentDispatchProps
} from '../../views/authentication/authSingin'
import { login } from '../actions/authActions'
import { UserInfo } from '../../types'

const mapStateToProps = (state: any): AuthSinginComponentStateProps => {
  return {
    isLoggingIn: state.auth.isLoggingIn
  }
}

const mapDispatchToProps = (dispatch: any): AuthSinginComponentDispatchProps => {
  return {
    dispatch,
    login: (userInfo: UserInfo, history: any, isAnimated?: boolean) => {
      dispatch(login(userInfo, history, true))
    }
  }
}

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthSinginComponent))
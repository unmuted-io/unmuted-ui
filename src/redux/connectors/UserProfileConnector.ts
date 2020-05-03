import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import UserProfile from '../../layout/header/component/userprofile'

const mapStateToProps = (state: any) => {
  return {
    account: state.auth.account
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout())
  }
}

export const UserProfileConnector = connect(mapStateToProps, mapDispatchToProps)(UserProfile)

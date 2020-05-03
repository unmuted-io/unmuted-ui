import { connect } from 'react-redux'
import Register from '../../views/authentication/Register'
import { createUser } from '../actions/authActions'
import { UserInfo } from '../../types'

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    isRegistering: state.auth.isRegistering
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createUser: (newUserInfo: UserInfo, history: any) => dispatch(createUser(newUserInfo, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

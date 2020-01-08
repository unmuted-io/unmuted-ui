import { connect } from 'react-redux';
import Register from '../../views/authentication/authSingup'
import { createUser } from '../actions/authActions'
import { UserInfo } from '../../utility/types'

const mapStateToProps = (state: any, ownProps: any) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createUser: (newUserInfo: UserInfo, history: any) => dispatch(createUser(newUserInfo, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
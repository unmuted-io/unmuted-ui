import { connect } from 'react-redux'
import AuthSingin from '../../views/authentication/authSingin'
import { updateEdgeAccount } from '../actions/authActions'

const mapStateToProps = (state: any) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateEdgeAccount:  (account: any) => dispatch(updateEdgeAccount(account))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSingin)
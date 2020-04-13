import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AuthSingin from '../../views/authentication/authSingin'

const mapStateToProps = (state: any) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    authenticateEdgeLogin:  (account: any, history: any) => {
      dispatch({ type: 'AUTHENTICATE_EDGE_LOGIN', data: { account, history } })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthSingin))
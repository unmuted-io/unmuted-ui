import { connect } from 'react-redux';
import UploadVideoWizard from '../../views/uploadVideoWizard/uploadVideoWizard'

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    account: state.auth.account
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadVideoWizard)
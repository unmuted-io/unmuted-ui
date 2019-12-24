import { connect } from 'react-redux';
import Header from '../../layout/header/';
import { collapseMenuRes } from '../../redux/actions/templateConfig/';


const mapStateToProps = state => ({
  headerFixed: state.config.headerFixed,
  bgHeader: state.config.headerBg,
  resMenu: state.config.resMenu,
  layout: state.config.layout,
})

const mapDispatchToProps = {
  collapseMenuRes
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)

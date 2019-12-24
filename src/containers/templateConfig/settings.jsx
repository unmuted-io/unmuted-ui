import { connect } from 'react-redux';
import Sttings from '../../layout/themeSettings/';
import {
  layOutType,
  colorIcon,
  fixedMEnu,
  fixedHeader,
  layoutBox,
  layoutRtl,
  menuDropDownIcon,
  menuListStyle,
  menuActiveColor,
  menuTitleColor,
  hideCaption,
  hideBreadcrumb,
  headerBg,
  bgBrand,
  bgMenu,
  bgGradient,
  bgPattern,
  bgImage,
  resetTemplate
} from '../../redux/actions/templateConfig/';

const body = (layout) => {
  if (layout === "dark") {
    document.body.classList.add("dark-demo")
  } else {
    document.body.classList.remove("dark-demo")
  }
  return layout
}

const boXLayOutMake = (layout) => {
  if (layout) {
    document.body.classList.add("container")
  } else {
    document.body.classList.remove("container")
  }
  if (layout) {
    document.body.classList.add("box-layout")
  } else {
    document.body.classList.remove("box-layout")
  }
}

const rtlLayOutMake = (layout) => {
  if (layout) {
    document.body.classList.add("rtl-layout")
  } else {
    document.body.classList.remove("rtl-layout")
  }
}




const mapStateToProps = state => ({
  layoutType: body(state.config.layoutType),
  iconColor: state.config.iconColor,
  menuFixed: state.config.menuFixed,
  headerFixed: state.config.headerFixed,
  boxLayout: boXLayOutMake(state.config.boxLayout),
  rtl: rtlLayOutMake(state.config.rtl),
  dropdownIconMenu: state.config.menuDropdownIcon,
  menuListIcon: state.config.menuListIcon,
  activeColor: state.config.menuActiveColor,
  titleColor: state.config.menuTitleColor,
  captionHide: state.config.hideCaption,
  headerBreadcrumbHide: state.config.headerBreadcrumbHide,
  bgHeader: state.config.headerBg,
  brandBg: state.config.brandBg,
  menuBg: state.config.menuBg,
  menuBgGradient: state.config.menuBgGradient,
  menuBgPattern: state.config.menuBgPattern,
  menuBgImage: state.config.menuBgImage,
})

const mapDispatchToProps = {
  layOutType,
  colorIcon,
  fixedMEnu,
  fixedHeader,
  layoutBox,
  layoutRtl,
  menuDropDownIcon,
  menuListStyle,
  menuActiveColor,
  menuTitleColor,
  hideCaption,
  hideBreadcrumb,
  headerBg,
  bgBrand,
  bgMenu,
  bgGradient,
  bgPattern,
  bgImage,
  resetTemplate
}


export default connect(mapStateToProps, mapDispatchToProps)(Sttings)

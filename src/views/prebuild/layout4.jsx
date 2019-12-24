import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layoutPrebuild,
  configBlock,
  bgMenu,
  bgBrand,
  headerBg
} from '../../redux/actions/templateConfig';

class Layout4 extends Component {
  componentWillMount() {
    if (this.props.templayout !== "layout-4") {
      this.props.layoutPrebuild("layout-4")
    }
    if (this.props.configBlockg) {
      this.props.configBlock()
    }
    if (this.props.menuBg !== "light") {
      this.props.bgMenu("light")
    }
    if (this.props.brandBg !== "blue") {
      this.props.bgBrand("blue")
    }
    if (this.props.bgHeader !== "blue") {
      this.props.headerBg("blue")
    }
  }
  render() {
    return <LayoutCard
      title="Layout 4"
      prebuildLayout="layout-4"
      configBloc="false"
    />;
  }
}


const mapStateToProps = state => ({
  templayout: state.config.prebuildLayout,
  configBlockg: state.config.configBlock,
  menuBg: state.config.menuBg,
  brandBg: state.config.brandBg,
  bgHeader: state.config.headerBg,
})

const mapDispatchToProps = {
  layoutPrebuild,
  configBlock,
  bgMenu,
  bgBrand,
  headerBg,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout4);
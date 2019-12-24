import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layoutPrebuild,
  configBlock,
  bgMenu,
  bgBrand
} from '../../redux/actions/templateConfig';

class Layout2 extends Component {
  componentWillMount() {
    if (this.props.templayout !== "layout-3") {
      this.props.layoutPrebuild("layout-3")
    }
    if (this.props.configBlockg) {
      this.props.configBlock()
    }
    if (this.props.brandBg !== "blue") {
      this.props.bgBrand("blue")
    }
  }
  render() {
    return <LayoutCard
      title="Layout 3"
      prebuildLayout="layout-3"
      configBloc="false"
    />;
  }
}


const mapStateToProps = state => ({
  templayout: state.config.layout,
  configBlockg: state.config.configBlockg,
  menuBg: state.config.menuBg,
  brandBg: state.config.brandBg,
})

const mapDispatchToProps = {
  layoutPrebuild,
  configBlock,
  bgMenu,
  bgBrand
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout2);
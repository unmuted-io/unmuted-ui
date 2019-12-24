import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layoutPrebuild,
  configBlock,
  bgMenu
} from '../../redux/actions/templateConfig';

class Layout2 extends Component {
  componentWillMount() {
    if (this.props.templayout !== "layout-2") {
      this.props.layoutPrebuild("layout-2")
    }
    if (this.props.configBlockg) {
      this.props.configBlock()
    }
    if (this.props.menuBg !== "blue") {
      this.props.bgMenu("blue")
    }
  }
  render() {
    return <LayoutCard
      title="Layout 2"
      prebuildLayout="layout-2"
      configBloc="false"
    />;
  }
}


const mapStateToProps = state => ({
  templayout: state.config.prebuildLayout,
  configBlockg: state.config.configBlock,
  menuBg: state.config.menuBg,
})

const mapDispatchToProps = {
  layoutPrebuild,
  configBlock,
  bgMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout2);
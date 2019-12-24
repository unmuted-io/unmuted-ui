import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layoutPrebuild,
  configBlock,
  fixedMEnu,
  fixedHeader,
} from '../../redux/actions/templateConfig';

class Layout5 extends Component {
  componentWillMount() {
    if (this.props.templayout !== "layout-5") {
      this.props.layoutPrebuild("layout-5")
    }
    if (this.props.configBlockg) {
      this.props.configBlock()
    }
    if (this.props.menuFixed) {
      this.props.fixedMEnu()
    }
    if (this.props.headerFixed) {
      this.props.fixedHeader()
    }
  }
  render() {
    return <LayoutCard
      title="Layout 5"
      prebuildLayout="layout-5"
      configBloc="false"
    />;
  }
}


const mapStateToProps = state => ({
  templayout: state.config.prebuildLayout,
  configBlockg: state.config.configBlock,
  menuFixed: state.config.menuFixed,
  headerFixed: state.config.headerFixed,
})

const mapDispatchToProps = {
  layoutPrebuild,
  configBlock,
  fixedMEnu,
  fixedHeader,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout5);
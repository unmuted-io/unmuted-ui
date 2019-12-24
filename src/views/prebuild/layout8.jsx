import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layoutPrebuild,
  configBlock,
  layOut,
  fixedHeader,
} from '../../redux/actions/templateConfig';

class Layout6 extends Component {
  componentWillMount() {
    if (this.props.templayout !== "layout-8") {
      this.props.layoutPrebuild("layout-8")
    }
    if (this.props.configBlockg) {
      this.props.configBlock()
    }
    if (this.props.headerFixed) {
      this.props.fixedHeader()
    }
    if (this.props.layouta !== "horizontal") {
      this.props.layOut("horizontal")
    }
  }
  render() {
    return <LayoutCard
      title="Layout 8"
      prebuildLayout="layout-8"
      configBloc="false"
    />;
  }
}


const mapStateToProps = state => ({
  templayout: state.config.prebuildLayout,
  configBlockg: state.config.configBlock,
  layouta: state.config.layout,
  headerFixed: state.config.headerFixed,
})

const mapDispatchToProps = {
  layoutPrebuild,
  configBlock,
  layOut,
  fixedHeader,
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout6);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  fixedMEnu,
  fixedHeader,
} from '../../redux/actions/templateConfig/';

class StaticLayout extends Component {
  componentWillMount() {
    if (this.props.menuFixed) {
      this.props.fixedMEnu()
    }
    if (this.props.headerFixed) {
      this.props.fixedHeader()
    }
  }
  render() {
    return (
      <LayoutCard
        title="Static Layout"
        layout="vertical"
        fixedHeader="false"
        menuFixed="false"
      />);
  }
}
const mapStateToProps = state => ({
  menuFixed: state.config.menuFixed,
  headerFixed: state.config.headerFixed,
})

const mapDispatchToProps = {
  fixedMEnu,
  fixedHeader,
}

export default connect(mapStateToProps, mapDispatchToProps)(StaticLayout);
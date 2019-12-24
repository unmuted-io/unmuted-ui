import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layOutType,
} from '../../redux/actions/templateConfig';

class LightLayout extends Component {
  componentWillMount() {
    if (this.props.layoutTypeC !== "light") {
      this.props.layOutType("light")
    }
  }
  render() {
    return (
      <LayoutCard
        title="Light Layout"
        layoutType="light"
      />);
  }
}
const mapStateToProps = state => ({
  layoutTypeC: state.config.layoutType,
})

const mapDispatchToProps = {
  layOutType,
}

export default connect(mapStateToProps, mapDispatchToProps)(LightLayout);
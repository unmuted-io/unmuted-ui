import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layOutType,
} from '../../redux/actions/templateConfig';

class DarkLayout extends Component {
  componentWillMount() {
    if (this.props.layoutTypeC !== "dark") {
      this.props.layOutType("dark")
    }
  }
  render() {
    return (
      <LayoutCard
        title="Dark Layout"
        layoutType="dark"
      />);
  }
}
const mapStateToProps = state => ({
  layoutTypeC: state.config.layoutType,
})

const mapDispatchToProps = {
  layOutType,
}

export default connect(mapStateToProps, mapDispatchToProps)(DarkLayout);
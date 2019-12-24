import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layoutBox,
} from '../../redux/actions/templateConfig';

class BoxLayout extends Component {
  componentWillMount() {
    if (!this.props.boxLayout) {
      this.props.layoutBox()
    }
  }
  render() {
    return (
      <LayoutCard
        title="Box Layout"
        boxLayout="true"
      />);
  }
}
const mapStateToProps = state => ({
  boxLayout: state.config.boxLayout,
})

const mapDispatchToProps = {
  layoutBox,
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxLayout);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layoutRtl,
} from '../../redux/actions/templateConfig';

class RtlLayout extends Component {
  componentWillMount() {
    if (!this.props.rtl) {
      this.props.layoutRtl()
    }
  }
  render() {
    return (
      <LayoutCard
        title="RTL Layout"
        rtl="true"
      />);
  }
}
const mapStateToProps = state => ({
  rtl: state.config.rtl,
})

const mapDispatchToProps = {
  layoutRtl,
}

export default connect(mapStateToProps, mapDispatchToProps)(RtlLayout);
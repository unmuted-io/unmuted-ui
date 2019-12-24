import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  colorIcon,
} from '../../redux/actions/templateConfig';

class ColorIcon extends Component {
  componentWillMount() {
    if (!this.props.iconColor) {
      this.props.colorIcon()
    }
  }
  render() {
    return (
      <LayoutCard
        title="Color Icon"
        iconColor="true"
      />);
  }
}
const mapStateToProps = state => ({
  iconColor: state.config.iconColor,
})

const mapDispatchToProps = {
  colorIcon,
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorIcon);
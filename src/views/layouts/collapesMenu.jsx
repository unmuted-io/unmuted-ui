import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  collapseMenu,
} from '../../redux/actions/templateConfig';

class CollapesMenu extends Component {
  componentWillMount() {
    if (!this.props.meunCol) {
      this.props.collapseMenu()
    }
  }
  render() {
    return (
      <LayoutCard
        title="Collapse Menu"
        collapseMenu="true"
      />);
  }
}
const mapStateToProps = state => ({
  meunCol: state.config.collapseMenu,
})

const mapDispatchToProps = {
  collapseMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(CollapesMenu);
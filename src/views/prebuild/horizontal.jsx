import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutCard from '../../components/mainCard/layoutCard';
import {
  layOut,
  fixedHeader
} from '../../redux/actions/templateConfig';


class TemplateLayout extends Component {
  componentWillMount() {
    if (this.props.templayout !== 'horizontal') {
      this.props.layOut('horizontal')
    }
    if (!this.props.fixedHeadert) {
      this.props.fixedHeader()
    }
  }
  render() {
    return <LayoutCard
      title="Horizontal Layout"
      layout='horizontal'
      fixedHeader="false"
    />;
  }
}


const mapStateToProps = state => ({
  templayout: state.config.layout,
  fixedHeadert: state.config.fixedHeader,
})

const mapDispatchToProps = {
  layOut,
  fixedHeader
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateLayout);
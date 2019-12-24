import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavGroup from './navgroup'


class NavContent extends Component {

  render() {
    const {
      parentUi,
      parentLi,
      parentLiA,
      parentLiCa,
      toggleCls,
      activeToggle,
      collapesTitle,
      chaildLi,
      chaildLiA,
      subUi
    } = this.props

    const navItems = this.props.navigation.map(item => {
      switch (item.type) {
        case 'group':
          return <NavGroup
            layout={this.props.layout}
            key={item.id}
            group={item}
            parentLi={parentLi}
            parentLiA={parentLiA}
            parentLiCa={parentLiCa}
            toggleCls={toggleCls}
            activeToggle={activeToggle}
            collapesTitle={collapesTitle}
            chaildLi={chaildLi}
            chaildLiA={chaildLiA}
            subUi={subUi}
            {...this.props}
          />;
        default:
          return false;
      }
    });

    let navs = ''
    if (this.props.layout === 'horizontal') {
      navs = navItems
    } else {
      navs = (
        <ul className={parentUi ? parentUi : null}>
          {navItems}
        </ul>
      )
    }

    return navs
  }
}

export default withRouter(NavContent);
import React, { Component, Fragment } from 'react';
import NavCollapse from '../navcollapes';
import NavItem from '../navitem';


class NavGroup extends Component {
  render() {
    const props = this.props
    const {
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
    let navItems;
    if (props.group.children) {
      const groups = props.group.children;
      navItems = Object.keys(groups).map(item => {
        item = groups[item];
        switch (item.type) {
          case 'collapse':
            return <NavCollapse
              key={item.id}
              collapse={item}
              type="main"
              toggleCls={toggleCls}
              activeToggle={activeToggle}
              collapesTitle={collapesTitle}
              chaildLi={chaildLi}
              chaildLiA={chaildLiA}
              subUi={subUi}
              {...this.props}
            />;
          case 'item':
            return <NavItem
              layout={props.layout}
              key={item.id}
              item={item}
              LiClass={parentLi}
              LiClassA={parentLiA}
              {...this.props}
            />;
          default:
            return false;
        }
      });
    }
    return (
      <Fragment>
        <li key={props.group.id} className={parentLiCa ? parentLiCa : null}><label>{props.group.title}</label></li>
        {navItems}
      </Fragment >
    );
  }
}

export default NavGroup;
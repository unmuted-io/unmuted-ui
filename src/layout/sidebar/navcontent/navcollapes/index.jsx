import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavIcon from '../navicon';
import NavBadge from '../navbadge';
import NavItem from '../navitem/navItemCollapes';
import LoopNavCollapse from './index';
import { withRouter } from 'react-router-dom';
import { navCollapseLeave, navCollapseToggle, navContentLeave } from '../../../../redux/actions/navigation/';


class NavCollapse extends Component {
  componentDidMount() {
    let currentIndex = ((document.location.pathname).toString().split('/')).findIndex(id => {
      return (id === this.props.collapse.id)
    });
    if (currentIndex > -1) {
      this.props.navCollapseToggle(this.props.collapse.id, this.props.type);
    }

    if (this.props.layout === 'horizontal') {
      this.props.navContentLeave()
    }
  }
  render() {
    const { isOpen, isTrigger } = this.props;

    let navItems = '';
    if (this.props.collapse.children) {
      const collapses = this.props.collapse.children;
      navItems = Object.keys(collapses).map(item => {
        item = collapses[item];
        switch (item.type) {
          case 'collapse':
            return <LoopNavCollapse
              key={item.id}
              collapse={item}
              type="sub"
              toggleCls={this.props.toggleCls}
              activeToggle={this.props.activeToggle}
              collapesTitle={this.props.collapesTitle}
              chaildLi={this.props.chaildLi}
              chaildLiA={this.props.chaildLiA}
              subUi={this.props.subUi}
            />;
          case 'item':
            return <NavItem {...this.props} LiClass={this.props.chaildLi} LiClassA={this.props.chaildLiA} layout={this.props.layout} key={item.id} item={item} />;
          default:
            return false;
        }
      });
    }

    let itemTitle = this.props.collapse.title;
    if (this.props.collapse.icon) {
      itemTitle = <span className="pcoded-mtext">
        {this.props.collapse.title}
        <NavBadge layout={this.props.layout} items={this.props.collapse} />
      </span>;
    }

    let navLinkClass = [];
    navLinkClass.push(this.props.collapesTitle ? this.props.collapesTitle : null)

    let navItemClass = []
    navItemClass.push(this.props.toggleCls ? this.props.toggleCls : null)

    let openIndex = isOpen.findIndex(id => {
      return (id === this.props.collapse.id)
    });
    if (openIndex > -1) {
      navItemClass = [...navItemClass, 'active'];
      if (this.props.layout !== 'horizontal') {
        navLinkClass = [...navLinkClass, 'active'];
      }
    }
    let triggerIndex = isTrigger.findIndex(id => {
      return (id === this.props.collapse.id)
    });
    if (triggerIndex > -1) {
      navItemClass = [...navItemClass, (this.props.activeToggle ? this.props.activeToggle : "")];
    }
    let currentIndex = ((document.location.pathname).toString().split('/')).findIndex(id => {
      return (id === this.props.collapse.id)
    });
    if (currentIndex > -1) {
      navItemClass = [...navItemClass, 'active'];
      if (this.props.layout !== 'horizontal') {
        navLinkClass = [...navLinkClass, 'active'];
      }
    }

    const subContent = (
      <Fragment>
        <Link to="#" className={navLinkClass.join(' ')} onClick={() => this.props.navCollapseToggle(this.props.collapse.id, this.props.type)}>
          <NavIcon items={this.props.collapse} />
          {itemTitle}
        </Link>
        <ul className={this.props.subUi ? this.props.subUi : null}>
          {navItems}
        </ul>
      </Fragment>
    );
    let mainContent = '';
    if (this.props.layout === 'horizontal') {
      mainContent = (
        <li className={navItemClass.join(' ')} onMouseLeave={() => this.props.navCollapseLeave(this.props.collapse.id, this.props.type)} onMouseEnter={() => this.props.navCollapseToggle(this.props.collapse.id, this.props.type)}>
          {subContent}
        </li>
      );
    } else {
      mainContent = (
        <li className={navItemClass.join(' ')}>
          {subContent}
        </li>
      );
    }
    return mainContent;
  }
}


const mapStateToProps = state => ({
  isOpen: state.Navigation.isOpen,
  isTrigger: state.Navigation.isTrigger
})

const mapDispatchToProps = {
  navCollapseLeave,
  navCollapseToggle,
  navContentLeave
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavCollapse));
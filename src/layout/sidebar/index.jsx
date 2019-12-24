import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import windowSize from 'react-window-size';

import navigation from '../../menus';
import NavContent from './navcontent';
import NavLogo from './navlogo/navLogo';


class Sidebar extends Component {
  state = {
    upgrate: true,
    scrollWidth: 0,
    prevDisable: true,
    nextDisable: false
  }
  upgrate = () => {
    this.setState({ upgrate: false })
  }

  scrollPrevHandler = () => {
    const wrapperWidth = document.getElementById('sidenav-wrapper').clientWidth;

    let scrollWidth = this.state.scrollWidth - wrapperWidth;
    if (scrollWidth < 0) {
      this.setState({ scrollWidth: 0, prevDisable: true, nextDisable: false });
    } else {
      this.setState({ scrollWidth: scrollWidth, prevDisable: false });
    }
  };

  scrollNextHandler = () => {
    const wrapperWidth = document.getElementById('sidenav-wrapper').clientWidth;
    const contentWidth = document.getElementById('sidenav-horizontal').clientWidth;

    let scrollWidth = this.state.scrollWidth + (wrapperWidth - 80);
    if (scrollWidth > (contentWidth - wrapperWidth)) {
      scrollWidth = contentWidth - wrapperWidth + 80;
      this.setState({ scrollWidth: scrollWidth, prevDisable: false, nextDisable: true });
    } else {
      this.setState({ scrollWidth: scrollWidth, prevDisable: false });
    }
  };
  componentWillMount() {
    if (this.props.windowWidth < 1200 && this.props.windowWidth > 991) {
      if (!this.props.meunCol) {
        this.props.collapseMenu()
      }
    }
  }
  render() {
    let mainContent = '';
    if (this.props.layout === 'horizontal') {
      let prevClass = ['sidenav-horizontal-prev'];
      if (this.state.prevDisable) {
        prevClass = [...prevClass, 'disabled'];
      }
      let nextClass = ['sidenav-horizontal-next'];
      if (this.state.nextDisable) {
        nextClass = [...nextClass, 'disabled'];
      }

      mainContent = (
        <div className="navbar-content sidenav-horizontal sidenav" id="layout-sidenav">
          <a href="#!" className={prevClass.join(' ')} onClick={this.scrollPrevHandler}><span /></a>
          <div id="sidenav-wrapper" className="sidenav-horizontal-wrapper">
            <ul id="sidenav-horizontal" className="nav pcoded-inner-navbar sidenav-inner" onMouseLeave={() => this.props.navContentLeave()} style={{ marginLeft: '-' + this.state.scrollWidth + 'px' }}>
              <NavContent
                navigation={navigation.items}
                parentLi="nav-item"
                parentLiA="nav-link"
                parentLiCa="nav-item pcoded-menu-caption"
                toggleCls="pcoded-hasmenu"
                activeToggle="pcoded-trigger"
                collapesTitle="nav-link"
                subUi="pcoded-submenu"
                {...this.props}
              />
            </ul>
          </div>
          <a href="#!" className={nextClass.join(' ')} onClick={this.scrollNextHandler}><span /></a>
        </div>
      );
    } else {
      mainContent = (
        <PerfectScrollbar className="scroll-div navbar-content">
          <NavContent
            navigation={navigation.items}
            parentUi="nav pcoded-inner-navbar"
            parentLi="nav-item"
            parentLiA="nav-link"
            parentLiCa="nav-item pcoded-menu-caption"
            toggleCls="nav-item pcoded-hasmenu"
            activeToggle={["pcoded-trigger"]}
            collapesTitle="nav-link"
            subUi="pcoded-submenu"
            {...this.props}
          />
          {this.state.upgrate ?
            (<div className="card text-center">
              <div className="card-block">
                <button onClick={this.upgrate} className="close" type="button">×</button>
                <i className="feather icon-sunset f-40"></i>
                <h6 className="mt-3">Upgrade to pro</h6>
                <p>upgrade for get full themes and 30min support</p>
                <Link to="#" className="btn btn-gradient-primary btn-sm text-white m-0">Upgrade</Link>
              </div>
            </div>) : null}
        </PerfectScrollbar>)
    }
    return (
      <nav className={classnames(`pcoded-navbar`, {
        "navbar-collapsed": this.props.meunCol,
        "menu-light": this.props.layoutType === "light" || this.props.menuBg === "light",
        "navbar-dark": this.props.layoutType === "dark",
        "icon-colored": this.props.iconColor,
        "menupos-fixed": this.props.menuFixed && this.props.layout === "vertical",
        "drp-icon-style2": this.props.dropdownIconMenu === "style2",
        "drp-icon-style3": this.props.dropdownIconMenu === "style3",
        "menu-item-icon-style2": this.props.menuListIcon === "style2",
        "menu-item-icon-style3": this.props.menuListIcon === "style3",
        "menu-item-icon-style4": this.props.menuListIcon === "style4",
        "menu-item-icon-style5": this.props.menuListIcon === "style5",
        "menu-item-icon-style6": this.props.menuListIcon === "style6",
        "active-blue": this.props.activeColor === "blue",
        "active-red": this.props.activeColor === "red",
        "active-purple": this.props.activeColor === "purple",
        "active-info": this.props.activeColor === "info",
        "active-dark": this.props.activeColor === "dark",
        "title-blue": this.props.titleColor === "blue",
        "title-red": this.props.titleColor === "red",
        "title-purple": this.props.titleColor === "purple",
        "title-info": this.props.titleColor === "info",
        "title-dark": this.props.titleColor === "dark",
        "caption-hide": this.props.captionHide,
        "header-hide": this.props.headerBreadcrumbHide,
        "brand-blue": this.props.bgBrand === "blue",
        "brand-red": this.props.bgBrand === "red",
        "brand-purple": this.props.bgBrand === "purple",
        "brand-info": this.props.bgBrand === "info",
        "brand-dark": this.props.bgBrand === "dark",
        "brand-dark navbar-blue": this.props.menuBg === "blue",
        "brand-dark navbar-red": this.props.menuBg === "red",
        "brand-dark navbar-purple": this.props.menuBg === "purple",
        "brand-dark navbar-info": this.props.menuBg === "info",
        "brand-dark navbar-dark": this.props.menuBg === "dark",
        "navbar-gradient-blue": this.props.menuBgGradient === "blue",
        "navbar-gradient-red": this.props.menuBgGradient === "red",
        "navbar-gradient-purple": this.props.menuBgGradient === "purple",
        "navbar-gradient-info": this.props.menuBgGradient === "info",
        "navbar-gradient-dark": this.props.menuBgGradient === "dark",
        "navbar-pattern-1": this.props.menuBgPattern === "pt1",
        "navbar-pattern-2": this.props.menuBgPattern === "pt2",
        "navbar-pattern-3": this.props.menuBgPattern === "pt3",
        "navbar-pattern-4": this.props.menuBgPattern === "pt4",
        "navbar-pattern-5": this.props.menuBgPattern === "pt5",
        "navbar-pattern-6": this.props.menuBgPattern === "pt6",
        "navbar-image-1": this.props.menuBgImage === "img1",
        "navbar-image-2": this.props.menuBgImage === "img2",
        "navbar-image-3": this.props.menuBgImage === "img3",
        "navbar-image-4": this.props.menuBgImage === "img4",
        "navbar-image-5": this.props.menuBgImage === "img5",
        "mob-open": this.props.resMenu,
        "theme-horizontal default": this.props.layout === "horizontal"
      })}>
        <div className={classnames("navbar-wrapper", {
          container: this.props.prebuildLayout === "layout-8"
        })}>
          <NavLogo {...this.props} />
          {mainContent}
        </div>
      </nav>
    );
  }
}

export default withRouter(windowSize(Sidebar));
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane, FormGroup, Label } from 'reactstrap';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar'

//import layout1 from '../../assets/images/layout/layout-1.jpg';
import layout2 from '../../assets/images/layout/layout-2.jpg';
import layout3 from '../../assets/images/layout/layout-3.jpg';
import layout4 from '../../assets/images/layout/layout-4.jpg';
import layout5 from '../../assets/images/layout/layout-5.jpg';
import layout6 from '../../assets/images/layout/layout-6.jpg';
//import layout7 from '../../assets/images/layout/layout-7.jpg';
import layout8 from '../../assets/images/layout/layout-8.jpg';
/* import layout9 from '../../assets/images/layout/layout-9.jpg';
import layout10 from '../../assets/images/layout/layout-10.jpg';
import layout11 from '../../assets/images/layout/layout-11.jpg';
import layout12 from '../../assets/images/layout/layout-12.jpg';
import layout13 from '../../assets/images/layout/layout-13.jpg';
import layout14 from '../../assets/images/layout/layout-14.jpg'; */


class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setting: false,
      activeTab: "1",
      prebuild: false,
      styler: true
    }
    this.toggleTab = this.toggleTab.bind(this);
    this.togglePrebuild = this.togglePrebuild.bind(this)
    this.toggleStyler = this.toggleStyler.bind(this)
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  togglePrebuild() {
    this.setState(prevState => ({ setting: true, prebuild: !prevState.prebuild, styler: !prevState.styler }))
  }
  toggleStyler() {
    this.setState(prevState => ({ setting: true, prebuild: false, styler: true }))
  }
  toggleSettings() {
    this.setState(prevState => ({ setting: !prevState.setting, prebuild: false, styler: true }))
  }

  render() {

    return (
      <div className={classnames("menu-styler", {
        open: this.state.setting && this.state.styler,
        "open prebuild-open": this.state.setting && this.state.prebuild,
      })}>
        <div className="style-toggler">
          <Link to="#" onClick={this.toggleSettings}></Link>
        </div>
        <div className="prebuild-toggler">
          <div className="prebuild-group">
            <Link to="#" className={classnames("prebuild-link-styler", {
              active: this.state.styler
            })}
              onClick={this.toggleStyler}
            >STYLER</Link>
            <Link to="#" className={classnames("prebuild-link-layout", {
              active: this.state.prebuild
            })}
              onClick={this.togglePrebuild}
            >PREBUILD LAYOUTS</Link>
          </div>
        </div>
        <div className="style-block">
          <h6 className="mb-2">
            Elite Able Live Menu Customizer
          </h6>
          <hr className="my-0" />
          <h6>Layouts</h6>
          <div className="theme-color layout-type">
            <Link to="#"
              onClick={() => this.props.layOutType("default")}
              className={classnames({
                active: this.props.layoutType === "default"
              })}
              data-value="menu-dark" title="Default Layout"><span></span><span></span></Link>
            <Link to="#"
              onClick={() => this.props.layOutType("light")}
              className={classnames({
                active: this.props.layoutType === "light"
              })}
              data-value="menu-light" title="Light"><span></span><span></span></Link>
            <Link to="#"
              onClick={() => this.props.layOutType("dark")}
              className={classnames({
                active: this.props.layoutType === "dark"
              })}
              data-value="dark" title="Dark"><span></span><span></span></Link>
            <Link onClick={() => this.props.resetTemplate()} to="#" data-value="reset" title="Reset">Reset to Default</Link>
          </div>
          <p className="f-12 mb-1">
            <span className="text-c-red">
              *
            </span>
            in Prebuild Layout you redirect to new page
          </p>
          <Button onClick={this.togglePrebuild} color="success" className="btn-square btn-block prebuild-link">Try our Prebuild Layouts</Button>
          <div className="form-group mb-3">
            <div className="switch switch-primary d-inline m-r-10">
              <input type="checkbox" id="icon-colored" onClick={() => this.props.colorIcon()}
                defaultChecked={this.props.iconColor}
              />
              <label htmlFor="icon-colored" className="cr"></label>
              <label className="p-l-10">Icon Color</label>
            </div>
          </div>
          <Nav pills className="mb-2">
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames("nav-link", {
                  active: this.state.activeTab === "1"
                })}
                onClick={() => {
                  this.toggleTab("1");
                }}
              >
                Home
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames("nav-link", {
                  active: this.state.activeTab === "2"
                })}
                onClick={() => {
                  this.toggleTab("2");
                }}
              >
                Layout
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames("nav-link", {
                  active: this.state.activeTab === "3"
                })}
                onClick={() => {
                  this.toggleTab("3");
                }}
              >
                Extra
            </NavLink>
            </NavItem>
          </Nav>
          <PerfectScrollbar style={{ height: "calc(100vh - 340px)", position: "relative" }}>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <h6>header background</h6>
                <div className="theme-color header-color">
                  <Link
                    onClick={() => this.props.headerBg("light")}
                    className={classnames({
                      active: this.props.bgHeader === "light"
                    })}
                    to="#" data-value="header-default"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.headerBg("blue")}
                    className={classnames({
                      active: this.props.bgHeader === "blue"
                    })}
                    to="#" data-value="header-blue"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.headerBg("red")}
                    className={classnames({
                      active: this.props.bgHeader === "red"
                    })}
                    to="#" data-value="header-red"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.headerBg("purple")}
                    className={classnames({
                      active: this.props.bgHeader === "purple"
                    })}
                    to="#" data-value="header-purple"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.headerBg("info")}
                    className={classnames({
                      active: this.props.bgHeader === "info"
                    })}
                    to="#" data-value="header-info"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.headerBg("dark")}
                    className={classnames({
                      active: this.props.bgHeader === "dark"
                    })}
                    to="#" data-value="header-dark"><span></span><span></span></Link>
                </div>
                <h6>Menu Brand Color</h6>
                <div className="theme-color brand-color">
                  <Link
                    onClick={() => this.props.bgBrand("light")}
                    className={classnames({
                      active: this.props.brandBg === "light"
                    })}
                    to="#" data-value="brand-default"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgBrand("blue")}
                    className={classnames({
                      active: this.props.brandBg === "blue"
                    })}
                    to="#" data-value="brand-blue"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgBrand("red")}
                    className={classnames({
                      active: this.props.brandBg === "red"
                    })}
                    to="#" data-value="brand-red"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgBrand("purple")}
                    className={classnames({
                      active: this.props.brandBg === "purple"
                    })}
                    to="#" data-value="brand-purple"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgBrand("info")}
                    className={classnames({
                      active: this.props.brandBg === "info"
                    })}
                    to="#" data-value="brand-info"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgBrand("dark")}
                    className={classnames({
                      active: this.props.brandBg === "dark"
                    })}
                    to="#" data-value="brand-dark"><span></span><span></span></Link>
                </div>
                <h6>Menu background</h6>
                <div className="theme-color navbar-color">
                  <Link
                    onClick={() => this.props.bgMenu("default")}
                    className={classnames({
                      active: this.props.menuBg === "default"
                    })}
                    to="#" data-value="navbar-default"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgMenu("blue")}
                    className={classnames({
                      active: this.props.menuBg === "blue"
                    })}
                    to="#" data-value="navbar-blue"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgMenu("red")}
                    className={classnames({
                      active: this.props.menuBg === "red"
                    })}
                    to="#" data-value="navbar-red"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgMenu("purple")}
                    className={classnames({
                      active: this.props.menuBg === "purple"
                    })}
                    to="#" data-value="navbar-purple"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgMenu("info")}
                    className={classnames({
                      active: this.props.menuBg === "info"
                    })}
                    to="#" data-value="navbar-info"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgMenu("dark")}
                    className={classnames({
                      active: this.props.menuBg === "dark"
                    })}
                    to="#" data-value="navbar-dark"><span></span><span></span></Link>
                </div>
                <h6>Menu background [ Gradient ]</h6>
                <div className="theme-color navbar-gradient-color">
                  <Link
                    onClick={() => this.props.bgGradient("default")}
                    className={classnames({
                      active: this.props.menuBgGradient === "default"
                    })}
                    to="#" data-value="navbar-default"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgGradient("blue")}
                    className={classnames({
                      active: this.props.menuBgGradient === "blue"
                    })}
                    to="#" data-value="navbar-gradient-blue"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgGradient("red")}
                    className={classnames({
                      active: this.props.menuBgGradient === "red"
                    })}
                    to="#" data-value="navbar-gradient-red"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgGradient("purple")}
                    className={classnames({
                      active: this.props.menuBgGradient === "purple"
                    })}
                    to="#" data-value="navbar-gradient-purple"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgGradient("info")}
                    className={classnames({
                      active: this.props.menuBgGradient === "info"
                    })}
                    to="#" data-value="navbar-gradient-info"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgGradient("dark")}
                    className={classnames({
                      active: this.props.menuBgGradient === "dark"
                    })}
                    to="#" data-value="navbar-gradient-dark"><span></span><span></span></Link>
                </div>
                <h6>Menu background [ Pattern ]</h6>
                <div className="theme-color navbar-pattern">
                  <Link
                    onClick={() => this.props.bgPattern("pt1")}
                    className={classnames({
                      active: this.props.menuBgPattern === "pt1"
                    })}
                    to="#" data-value="navbar-pattern-1"></Link>
                  <Link
                    onClick={() => this.props.bgPattern("pt2")}
                    className={classnames({
                      active: this.props.menuBgPattern === "pt2"
                    })}
                    to="#" data-value="navbar-pattern-2"></Link>
                  <Link
                    onClick={() => this.props.bgPattern("pt3")}
                    className={classnames({
                      active: this.props.menuBgPattern === "pt3"
                    })}
                    to="#" data-value="navbar-pattern-3"></Link>
                  <Link
                    onClick={() => this.props.bgPattern("pt4")}
                    className={classnames({
                      active: this.props.menuBgPattern === "pt4"
                    })}
                    to="#" data-value="navbar-pattern-4"></Link>
                  <Link
                    onClick={() => this.props.bgPattern("pt5")}
                    className={classnames({
                      active: this.props.menuBgPattern === "pt5"
                    })}
                    to="#" data-value="navbar-pattern-5"></Link>
                  <Link
                    onClick={() => this.props.bgPattern("pt6")}
                    className={classnames({
                      active: this.props.menuBgPattern === "pt6"
                    })}
                    to="#" data-value="navbar-pattern-6"></Link>
                </div>
                <h6>Navbar Image</h6>
                <div className="theme-color navbar-images">
                  <Link
                    onClick={() => this.props.bgImage("img1")}
                    className={classnames({
                      active: this.props.menuBgImage === "img1"
                    })}
                    to="#" data-value="navbar-image-1"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgImage("img2")}
                    className={classnames({
                      active: this.props.menuBgImage === "img2"
                    })}
                    to="#" data-value="navbar-image-2"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgImage("img3")}
                    className={classnames({
                      active: this.props.menuBgImage === "img3"
                    })}
                    to="#" data-value="navbar-image-3"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgImage("img4")}
                    className={classnames({
                      active: this.props.menuBgImage === "img4"
                    })}
                    to="#" data-value="navbar-image-4"><span></span><span></span></Link>
                  <Link
                    onClick={() => this.props.bgImage("img5")}
                    className={classnames({
                      active: this.props.menuBgImage === "img5"
                    })}
                    to="#" data-value="navbar-image-5"><span></span><span></span></Link>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="form-group mb-0">
                  <div className="switch switch-primary d-inline m-r-10">
                    <input type="checkbox" id="theme-rtl"
                      onClick={() => this.props.layoutRtl()}
                      defaultChecked={this.props.rtl} />
                    <label htmlFor="theme-rtl" className="cr"></label>
                  </div>
                  <label>RTL</label>
                </div>
                <div className="form-group mb-0">
                  <div className="switch switch-primary d-inline m-r-10">
                    <input type="checkbox" id="menu-fixed"
                      onClick={() => this.props.fixedMEnu()}
                      defaultChecked={this.props.menuFixed} />
                    <label htmlFor="menu-fixed" className="cr"></label>
                  </div>
                  <label>Menu Fixed</label>
                </div>
                <div className="form-group mb-0">
                  <div className="switch switch-primary d-inline m-r-10">
                    <input
                      type="checkbox"
                      id="header-fixed"
                      onClick={() => this.props.fixedHeader()}
                      defaultChecked={this.props.headerFixed} />
                    <label htmlFor="header-fixed" className="cr"></label>
                  </div>
                  <label>Header Fixed</label>
                </div>
                <div className="form-group mb-0">
                  <div className="switch switch-primary d-inline m-r-10">
                    <input
                      type="checkbox"
                      id="box-layouts"
                      onClick={() => this.props.layoutBox()}
                      defaultChecked={this.props.boxLayout}
                    />
                    <label htmlFor="box-layouts" className="cr"></label>
                  </div>
                  <label>Box Layouts</label>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <h6>Menu Dropdown Icon</h6>
                <div className="theme-color">
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in-1"
                        id="drpicon-1"
                        onClick={() => this.props.menuDropDownIcon("default")}
                        defaultChecked={this.props.dropdownIconMenu === "default"}
                      />
                      <Label for="drpicon-1" className="cr">
                        <i className="feather icon-chevron-right"></i>
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in-1"
                        id="drpicon-2"
                        onClick={() => this.props.menuDropDownIcon("style2")}
                        defaultChecked={this.props.dropdownIconMenu === "style2"}
                      />
                      <Label for="drpicon-2" className="cr">
                        <i className="feather icon-chevrons-right"></i>
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in-1"
                        id="drpicon-3"
                        onClick={() => this.props.menuDropDownIcon("style3")}
                        defaultChecked={this.props.dropdownIconMenu === "style3"}
                      />
                      <Label for="drpicon-3" className="cr">
                        <i className="feather icon-plus"></i>
                      </Label>
                    </div>
                  </FormGroup>
                </div>
                <h6>Menu List Icon</h6>
                <div className="theme-color">
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in"
                        id="subitem-1"
                        onClick={() => this.props.menuListStyle("default")}
                        defaultChecked={this.props.menuListIcon === "default"}
                      />
                      <Label for="subitem-1" className="cr">
                        <i className=""></i>
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in"
                        id="subitem-2"
                        onClick={() => this.props.menuListStyle("style2")}
                        defaultChecked={this.props.menuListIcon === "style2"}
                      />
                      <Label for="subitem-2" className="cr">
                        <i className="feather icon-minus"></i>
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in"
                        id="subitem-3"
                        onClick={() => this.props.menuListStyle("style3")}
                        defaultChecked={this.props.menuListIcon === "style3"}
                      />
                      <Label for="subitem-3" className="cr">
                        <i className="feather icon-check"></i>
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in"
                        id="subitem-4"
                        onClick={() => this.props.menuListStyle("style4")}
                        defaultChecked={this.props.menuListIcon === "style4"}
                      />
                      <Label for="subitem-4" className="cr">
                        <i className="icon feather icon-corner-down-right"></i>
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in"
                        id="subitem-5"
                        onClick={() => this.props.menuListStyle("style5")}
                        defaultChecked={this.props.menuListIcon === "style5"}
                      />
                      <Label for="subitem-5" className="cr">
                        <i className="icon feather icon-chevrons-right"></i>
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup className="d-inline">
                    <div className="radio d-inline radio-primary">
                      <input
                        type="radio"
                        name="radio-in"
                        id="subitem-6"
                        onClick={() => this.props.menuListStyle("style6")}
                        defaultChecked={this.props.menuListIcon === "style6"}
                      />
                      <Label for="subitem-6" className="cr">
                        <i className="icon feather icon-chevron-right"></i>
                      </Label>
                    </div>
                  </FormGroup>
                </div>
                <h6>Active Color</h6>
                <div className="theme-color active-color small">
                  <Link
                    to="#"
                    data-value="active-blue"
                    onClick={() => this.props.menuActiveColor("blue")}
                    className={classnames({
                      active: this.props.activeColor === "blue"
                    })}
                  />
                  <Link to="#" data-value="active-red"
                    onClick={() => this.props.menuActiveColor("red")}
                    className={classnames({
                      active: this.props.activeColor === "red"
                    })} />
                  <Link to="#" data-value="active-purple"
                    onClick={() => this.props.menuActiveColor("purple")}
                    className={classnames({
                      active: this.props.activeColor === "purple"
                    })} />
                  <Link to="#" data-value="active-info"
                    onClick={() => this.props.menuActiveColor("info")}
                    className={classnames({
                      active: this.props.activeColor === "info"
                    })} />
                  <Link to="#" data-value="active-dark"
                    onClick={() => this.props.menuActiveColor("dark")}
                    className={classnames({
                      active: this.props.activeColor === "dark"
                    })} />
                </div>
                <h6>Menu Title Color</h6>
                <div className="theme-color title-color small">
                  <Link to="#" data-value="title-default"
                    onClick={() => this.props.menuTitleColor("default")}
                    className={classnames({
                      active: this.props.titleColor === "default"
                    })}
                  />
                  <Link to="#" data-value="title-blue"
                    onClick={() => this.props.menuTitleColor("blue")}
                    className={classnames({
                      active: this.props.titleColor === "blue"
                    })}
                  />
                  <Link to="#" data-value="title-red"
                    onClick={() => this.props.menuTitleColor("red")}
                    className={classnames({
                      active: this.props.titleColor === "red"
                    })}
                  />
                  <Link to="#" data-value="title-purple"
                    onClick={() => this.props.menuTitleColor("purple")}
                    className={classnames({
                      active: this.props.titleColor === "purple"
                    })}
                  />
                  <Link to="#" data-value="title-info"
                    onClick={() => this.props.menuTitleColor("info")}
                    className={classnames({
                      active: this.props.titleColor === "info"
                    })}
                  />
                  <Link to="#" data-value="title-dark"
                    onClick={() => this.props.menuTitleColor("dark")}
                    className={classnames({
                      active: this.props.titleColor === "dark"
                    })}
                  />
                </div>
                <FormGroup className="mb-0">
                  <div className="switch switch-primary d-inline m-r-10">
                    <input
                      type="checkbox"
                      id="caption-hide"
                      onClick={() => this.props.hideCaption()}
                      defaultChecked={this.props.captionHide}
                    />
                    <Label for="caption-hide" className="cr" />
                  </div>
                  <Label>Menu Title Hide</Label>
                </FormGroup>
                <FormGroup className="mb-0">
                  <div className="switch switch-primary d-inline m-r-10">
                    <input
                      type="checkbox"
                      id="header-hide"
                      onClick={() => this.props.hideBreadcrumb()}
                      defaultChecked={this.props.headerBreadcrumbHide}
                    />
                    <Label for="header-hide" className="cr" />
                  </div>
                  <Label>Header Breadcrumb Hide</Label>
                </FormGroup>
              </TabPane>
            </TabContent>
          </PerfectScrollbar>
        </div>
        <div className="style-block-prebuild">
          <h6 className="mb-2">
            Elite Able Prebuild Layouts
          </h6>
          <hr className="my-0" />
          <p className="f-12 my-2">
            <span className="text-c-red">* </span>
            in Prebuild Layout you redirect to new page
          </p>
          <PerfectScrollbar className="theme-color prelayout-color" style={{ height: " calc(100vh - 120px)" }}>
            <Row className="justify-content-center">
              <Col xs={12}>
                {/* <Link to="#" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout1} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 1</h5>
                    </span>
                  </div>
                </Link> */}
              </Col>
              <Col xs={12}>
                <Link to="/layout/layout2" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout2} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 2</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="/layout/layout3" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout3} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 3</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="/layout/layout4" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout4} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 4</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="/layout/layout5" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout5} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 5</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="/layout/layout6" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout6} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 6</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              {/* <Col xs={12}>
                <Link to="#" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout7} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 7</h5>
                    </span>
                  </div>
                </Link>
              </Col> */}
              <Col xs={12}>
                <Link to="/layout/layout8" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout8} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 7</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              {/* <Col xs={12}>
                <Link to="#" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout9} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 9</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="#" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout10} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 10</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="#" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout11} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 11</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="#" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout12} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 12</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="#" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout13} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 13</h5>
                    </span>
                  </div>
                </Link>
              </Col>
              <Col xs={12}>
                <Link to="#" target="_blank">
                  <div className="layout-block">
                    <img className="img-fluid" src={layout14} alt="" />
                    <span className="card-img-overlay">
                      <h5>Layout 14</h5>
                    </span>
                  </div>
                </Link>
              </Col> */}
            </Row>
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}

export default Setting;
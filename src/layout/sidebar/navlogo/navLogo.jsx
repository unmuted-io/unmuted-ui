import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Path from '../../../configure'

class NavLogo extends Component {
  render() {
    return (
      <div className="navbar-brand header-logo">
        <Link to={Path.defaultPath} className="b-brand">
          <div className="b-bg">
            E
          </div>
          <span className="b-title">
            Elite Able
          </span>
        </Link>
        <Link
          to="#"
          onClick={() => this.props.collapseMenu()}
          className={classnames("mobile-menu", {
            on: this.props.meunCol
          })}
        ><span></span></Link>
      </div>
    );
  }
}

export default NavLogo;
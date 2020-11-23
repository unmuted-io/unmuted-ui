import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import Path from '../../../configure'
import logo from '../../../assets/images/logo/blacb-bg-logo-no-bg@0.3x.png'
import unmutedText from '../../../assets/images/logo/white-logo-text@0.3x.png'

class NavLogo extends Component {
  render() {
    return (
      <div className="navbar-brand header-logo">
        <Link to={Path.defaultPath} className="b-brand">
          <img src={logo} style={{ height: 32 }} />
          <img src={unmutedText} style={{ height: 18, marginLeft: 12 }} />
        </Link>
        <Link
          to="#"
          onClick={() => this.props.collapseMenu()}
          className={classnames('mobile-menu', {
            on: this.props.meunCol,
          })}
        >
          <span></span>
        </Link>
      </div>
    )
  }
}

export default NavLogo

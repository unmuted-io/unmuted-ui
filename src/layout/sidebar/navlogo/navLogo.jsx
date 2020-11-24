import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import Path from '../../../configure'
import logo from '../../../assets/images/logo/blacb-bg-logo-no-bg@0.3x.png'
import unmutedText from '../../../assets/images/logo/white-logo-text@0.3x.png'

const NavLogo = ({ collapseMenu, meunCol }) => {
  return (
    <div className="navbar-brand header-logo">
      <Link to={Path.defaultPath} className="b-brand">
        <img className="logo-image" src={logo} />
        <img className="logo-text" src={unmutedText} />
      </Link>
      <Link
        to="#"
        onClick={() => collapseMenu()}
        className={classnames('mobile-menu', {
          on: meunCol,
        })}
      >
        <span></span>
      </Link>
    </div>
  )
}

export default NavLogo

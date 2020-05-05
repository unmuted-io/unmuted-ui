import React, { Fragment, Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/images/user/avatar-1.jpg'
import { State, Account } from '../../../types'

const { REACT_APP_API_BASE_URL } = process.env

type UserProfileOwnProps = {
  logout: () => void
}

type UserProfileStateProps = {
  account: Account
}

type UserProfileProps = UserProfileOwnProps & UserProfileStateProps

type UserProfileState = {

}

class UserProfile extends Component<UserProfileProps, UserProfileState> {
  render() {
    const { logout, account } = this.props
    const { username, settings } = account
    const { profileImageUrl = '' } = settings
    const profileImageSrc = `${REACT_APP_API_BASE_URL}/${profileImageUrl}`

    return (
      <Fragment>
        <UncontrolledDropdown className="drp-user">
          <DropdownToggle tag="a" href="#" className="dropdown-toggle">
              <i className="icon feather icon-settings"></i>
          </DropdownToggle>
          <DropdownMenu right className="profile-notification">
            <div className="pro-head">
              <img src={profileImageSrc || avatar} className="img-radius dropdown-user-profile-image" alt="User-Profile" />
              <span>{username}</span>
              <Link onClick={logout} to="#" className="dud-logout" title="Logout">
                <i className="feather icon-log-out" />
              </Link>
            </div>
            <ul className="pro-body">
              <li>
                <Link to="/user/account" className="dropdown-item">
                  <i className="feather icon-settings" /> Account
                </Link>
              </li>
              <li>
                <Link to="/user/messages" className="dropdown-item">
                  <i className="feather icon-mail" /> My Messages
                </Link>
              </li>
            </ul>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: State, ownProps) => {
  return {
    account: state.auth.account
  }
}


export default UserProfile

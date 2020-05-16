import React, { Component } from 'react'
import { connect } from 'react-redux'
import { State } from '../../types'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Button,
  CardBody,
  Input,
  Modal,
} from 'reactstrap'
import MainCard from '../../components/mainCard/mainCard'
import ProfileStaticCard from '../../components/profileStaticCard'
import coverImage from '../../assets/images/widget/slider7-800x266.jpg'
import profileImage from '../../assets/images/widget/img-round1.jpg'
import logoDark from '../../assets/images/logo-dark.png'
import edgeLoginLogo from '../../assets/images/auth/edge-login-logo.svg'
import { Account, EdgeAccount } from '../../types'
import AccountImageUploader from './AccountImageUploader'

const { REACT_APP_API_BASE_URL } = process.env

interface UserAccountProps {
  account: Account
  edgeAccount: EdgeAccount
  dispatch: any
}

interface UserAccountState {
  username: string
  fullName: string
  email: string
  description: string
  isModalOpen: boolean
  modalType: string
}

export class UserAccount extends Component<UserAccountProps, UserAccountState> {
  constructor(props) {
    super(props)
    const {
      account: { username, email, edge_username, profile },
    } = props
    const { fullName = '', description = '' } = profile
    this.state = {
      username,
      fullName,
      email,
      description,
      isModalOpen: false,
      modalType: '',
    }
  }

  onChangeUsername = (e) => {
    const username = e.target.value
    this.setState({ username })
  }

  onChangeFullName = (e) => {
    const fullName = e.target.value
    this.setState({ fullName })
  }

  onChangeEmail = (e) => {
    const email = e.target.value
    this.setState({ email })
  }

  onChangeDescription = (e) => {
    const description = e.target.value
    this.setState({ description })
  }

  onClickCover = () => {
    console.log('clicked cover')
    this.toggleModal('cover')
  }

  onClickProfile = () => {
    console.log('clicked profile')
    this.toggleModal('profile')
  }

  toggleModal = (modalType: string) => {
    const { isModalOpen } = this.state
    this.setState({
      isModalOpen: !isModalOpen,
      modalType,
    })
  }

  saveProfile = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { fullName, description } = this.state
    dispatch({
      type: 'SAVE_PROFILE_REQUEST',
      data: {
        fullName,
        description,
      },
    })
  }

  render() {
    const {
      account: {
        edge_username,
        profile: { coverImageUrl, profileImageUrl },
      },
    } = this.props
    const { username, fullName, email, description, isModalOpen, modalType } = this.state
    const cover = coverImageUrl ? `${REACT_APP_API_BASE_URL}/${coverImageUrl}` : coverImage
    const profile = profileImageUrl ? `${REACT_APP_API_BASE_URL}/${profileImageUrl}` : profileImage
    const disabled = false
    return (
      <>
        <Row id="user-account">
          <Col>
            <MainCard title="Account">
              <Row>
                <Col xl={6} md={6} lg={6} sm={12}>
                  <Form onSubmit={this.saveProfile}>
                    <Row className="align-items-center">
                      <CardBody>
                        <h4 className="mb-3 f-w-400">Account Details</h4>
                        <InputGroup className="mb-2">
                          <InputGroupAddon addonType="prepend">
                            <span className="input-group-text">@</span>
                          </InputGroupAddon>
                          <Input
                            disabled
                            onChange={this.onChangeUsername}
                            className="disabled"
                            value={username}
                            type="text"
                            placeholder="Username"
                          />
                        </InputGroup>
                        <InputGroup className="mb-2">
                          <InputGroupAddon addonType="prepend">
                            <span className="input-group-text">
                              <img src={edgeLoginLogo} />
                            </span>
                          </InputGroupAddon>
                          <Input
                            disabled
                            value={edge_username}
                            className="disabled"
                            type="text"
                            placeholder="Edge Account"
                          />
                        </InputGroup>
                        <InputGroup className="mb-2">
                          <InputGroupAddon addonType="prepend">
                            <span className="input-group-text">
                              <i className="feather icon-user" />
                            </span>
                          </InputGroupAddon>
                          <Input
                            onChange={this.onChangeFullName}
                            value={fullName}
                            type="text"
                            placeholder="Full Name"
                          />
                        </InputGroup>
                        <InputGroup className="mb-2">
                          <InputGroupAddon addonType="prepend">
                            <span className="input-group-text">
                              <i className="feather icon-mail" />
                            </span>
                          </InputGroupAddon>
                          <Input
                            disabled
                            onChange={this.onChangeEmail}
                            className="disabled"
                            value={email}
                            type="email"
                            placeholder="Email address"
                          />
                        </InputGroup>
                        <InputGroup className="mb-2">
                          <InputGroupAddon addonType="prepend">
                            <span className="input-group-text">
                              <i className="feather icon-info" />
                            </span>
                          </InputGroupAddon>
                          <Input
                            onChange={this.onChangeDescription}
                            value={description}
                            type="textarea"
                            placeholder="Description"
                          />
                        </InputGroup>
                        <Button color="primary" className="mb-4 login">
                          Save
                        </Button>
                      </CardBody>
                    </Row>
                  </Form>
                </Col>
                <Col xl={6} md={6} lg={6} sm={12}>
                  <ProfileStaticCard
                    fullName={fullName}
                    username={`@${username}`}
                    description={description}
                    card="middle"
                    coverImage={cover}
                    isCoverImageEditable={true}
                    onClickCover={this.onClickCover}
                    profileImage={profile}
                    isProfileImageEditable={true}
                    onClickProfile={this.onClickProfile}
                    design={400}
                    project={90}
                    devlopment={70}
                  />
                </Col>
              </Row>
            </MainCard>
          </Col>
        </Row>
        <Modal isOpen={isModalOpen} toggle={this.toggleModal}>
          <AccountImageUploader toggleModal={this.toggleModal} type={modalType} />
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    account: state.auth.account,
    edgeAccount: state.auth.edgeAccount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)

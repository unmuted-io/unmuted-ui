import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State, Account } from '../../types'
import { withUAL } from 'ual-reactjs-renderer'
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
import edgeLoginLogo from '../../assets/images/auth/edge-login-logo.svg'
import AccountImageUploader from './AccountImageUploader'

const { REACT_APP_API_BASE_URL } = process.env

export const UserAccount = ({ ual }) => {
  const account = useSelector((state: State) => state.auth.account)
  const { username: accountUsername, email: accountEmail, profile } = account
  const { fullName: accountFullName = '', description: accountDescription = '' } = profile
  const [username, setUsername] = useState(accountUsername)
  const [fullName, setFullName] = useState(accountFullName)
  const [email, setEmail] = useState(accountEmail)
  const [description, setDescription] = useState(accountDescription)
  const [telosAccountName, setTelosAccountName] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const dispatch = useDispatch()

  const onChangeUsername = (e) => {
    const newUsername = e.target.value
    setUsername(newUsername)
  }

  const onChangeFullName = (e) => {
    const newFullName = e.target.value
    setFullName(newFullName)
  }

  const onChangeEmail = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  const onChangeDescription = (e) => {
    const newDescription = e.target.value
    setDescription(newDescription)
  }

  const onClickCover = () => {
    toggleModal('cover')
  }

  const onClickProfile = () => {
    toggleModal('profile')
  }

  const toggleModal = (newModalType: string) => {
    setIsModalOpen(!isModalOpen)
    setModalType(newModalType)
  }

  const saveProfile = (e) => {
    e.preventDefault()
    dispatch({
      type: 'SAVE_PROFILE_REQUEST',
      data: {
        fullName,
        description,
      },
    })
  }

  const openUALModal = () => {
    ual.showModal()
  }

  const {
    profile: { coverImageUrl, profileImageUrl },
  } = account
  const cover = coverImageUrl ? `${REACT_APP_API_BASE_URL}/${coverImageUrl}` : coverImage
  const profilePic = profileImageUrl ? `${REACT_APP_API_BASE_URL}/${profileImageUrl}` : profileImage
  const disabled = false
  return (
    <>
      <Row id="user-account">
        <Col>
          <MainCard title="Account">
            <Row>
              <Col xl={6} md={6} lg={6} sm={12}>
                <Form onSubmit={saveProfile}>
                  <Row className="align-items-center">
                    <CardBody>
                      <h4 className="mb-3 f-w-400">Account Details</h4>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <span className="input-group-text">@</span>
                        </InputGroupAddon>
                        <Input
                          disabled
                          onChange={onChangeUsername}
                          className="disabled"
                          value={username}
                          type="text"
                          placeholder="Username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-2">
                        <Input
                          disabled
                          value={telosAccountName}
                          className="disabled"
                          type="text"
                          placeholder="Telos Account Name"
                        />
                      </InputGroup>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <span className="input-group-text">
                            <i className="feather icon-user" />
                          </span>
                        </InputGroupAddon>
                        <Input onChange={onChangeFullName} value={fullName} type="text" placeholder="Full Name" />
                      </InputGroup>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <span className="input-group-text">
                            <i className="feather icon-mail" />
                          </span>
                        </InputGroupAddon>
                        <Input
                          disabled
                          onChange={onChangeEmail}
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
                          onChange={onChangeDescription}
                          value={description}
                          type="textarea"
                          placeholder="Description"
                        />
                      </InputGroup>
                      <Button color="primary" className="mb-4 login">
                        Save
                      </Button>
                      <Button color="secondary" className="mb-4 login" onClick={openUALModal}>
                        Link Telos Account
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
                  onClickCover={onClickCover}
                  profileImage={profilePic}
                  isProfileImageEditable={true}
                  onClickProfile={onClickProfile}
                  design={400}
                  project={90}
                  devlopment={70}
                />
              </Col>
            </Row>
          </MainCard>
        </Col>
      </Row>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <AccountImageUploader toggleModal={toggleModal} type={modalType} />
      </Modal>
    </>
  )
}

export default withUAL(UserAccount)

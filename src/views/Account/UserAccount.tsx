import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInterval, getUserById } from '../../utility'
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
import TelosLogo from '../../assets/images/telos/telos-icon-32x32.png'
import AccountImageUploader from './AccountImageUploader'
import axios from 'axios'
import ConfirmationCodeDirections from '../../components/Blockchain/ConfirmationCodeDirections'

const { REACT_APP_API_BASE_URL } = process.env

export const UserAccount = ({ ual }) => {
  const account = useSelector((state: State) => state.auth.account)
  const { username: accountUsername, email: accountEmail, profile, id: userId, telos_account_name } = account
  const { fullName: accountFullName = '', description: accountDescription = '' } = profile
  const [username, setUsername] = useState(accountUsername)
  const [fullName, setFullName] = useState(accountFullName)
  const [email, setEmail] = useState(accountEmail)
  const [confirmedTelosAccountName, setConfirmedTelosAccountName] = useState(telos_account_name)
  const [description, setDescription] = useState(accountDescription)
  // const [telosAccountName, setTelosAccountName] = useState('')
  const [confirmationCode, setConfirmationCode] = useState('')
  const [isConfirmAccountModalOpen, setIsConfirmAccountModalOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const dispatch = useDispatch()

  let confirmationStatus = 'link'
  const telosAccountName = ual && ual.activeUser && ual.activeUser.accountName

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

  const fetchUserTelosAccount = async () => {
    try {
      const userData = await getUserById(userId)
      if (userData.data.user.telos_account_name) {
        setConfirmedTelosAccountName(userData.data.user.telos_account_name)
      }
    } catch (err) {
      console.log('fetchUserInfoError: ', err)
    }
  }

  // request confirmation code for transaction
  const onClickTelosAccountConfirm = async () => {
    try {
      const telosAccountConfirmationRequest = await axios({
        method: 'POST',
        url: `${REACT_APP_API_BASE_URL}/blockchain/confirmation`,
        data: {
          accountName: telosAccountName,
          // blockchain: REACT_APP_BLOCKCHAIN_NAME,
          userId,
        },
      })
      if (telosAccountConfirmationRequest.statusText !== 'OK') {
        throw new Error('Get confirmation code failure')
      }
      const { data } = telosAccountConfirmationRequest
      setConfirmationCode(data.code)
      setIsConfirmAccountModalOpen(true)
    } catch (err) {
      console.log('onClickTelosAccountConfirm error: ', err)
    }
  }

  useInterval(() => {
    fetchUserTelosAccount()
  }, 10000)

  // check if user has logged in via UAL
  useEffect(() => {
    console.log('Telos account changed to: ', ual.activeuser)
  }, [telosAccountName])

  const CONFIRMATION_STATUS = {
    link: {
      color: 'primary',
      onClick: openUALModal,
    },
    confirm: {
      color: 'info',
      onClick: onClickTelosAccountConfirm,
    },
    pending: {
      color: 'secondary',
      onClick: () => setIsConfirmAccountModalOpen(true),
    },
    confirmed: {
      color: 'success',
      onClick: () => console.log('no op'),
    },
  }

  const {
    profile: { coverImageUrl, profileImageUrl },
  } = account
  const cover = coverImageUrl ? `${REACT_APP_API_BASE_URL}/${coverImageUrl}` : coverImage
  const profilePic = profileImageUrl ? `${REACT_APP_API_BASE_URL}/${profileImageUrl}` : profileImage
  const disabled = false
  console.log('telosAccountName:', telosAccountName)

  if (confirmationStatus === 'link' && telosAccountName) {
    confirmationStatus = 'confirm'
  }
  if (confirmationCode) {
    confirmationStatus = 'pending'
  }
  if (confirmedTelosAccountName) {
    confirmationStatus = 'confirmed'
  }
  return (
    <>
      <Row id="user-account" className="user-account">
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
                        <InputGroupAddon addonType="prepend">
                          <span className="input-group-text">
                            <img src={TelosLogo} className="telos-logo" />
                          </span>
                        </InputGroupAddon>
                        <Input
                          disabled
                          value={telosAccountName}
                          className="disabled"
                          type="text"
                          placeholder="Telos Account Name"
                        />
                        <InputGroupAddon addonType="append">
                          <Button
                            className="confirmation-status"
                            onClick={CONFIRMATION_STATUS[confirmationStatus].onClick}
                            color={CONFIRMATION_STATUS[confirmationStatus].color}
                          >
                            {confirmationStatus}
                          </Button>
                          <Button onClick={ual.logout} color={'danger'}>
                            Unlink
                          </Button>
                        </InputGroupAddon>
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
                      <br />
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
      <Modal isOpen={isConfirmAccountModalOpen} toggle={() => setIsConfirmAccountModalOpen(!isConfirmAccountModalOpen)}>
        <ConfirmationCodeDirections code={confirmationCode} telosAccountName={telosAccountName} ual={ual} />
      </Modal>
    </>
  )
}

export default withUAL(UserAccount)

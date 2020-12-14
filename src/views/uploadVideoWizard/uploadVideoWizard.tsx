import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardHeader, CardBody, ButtonGroup, Button, Progress } from 'reactstrap'
import Loki from 'react-loki'
import { Link } from 'react-router-dom'
import FormWizardForm from '../forms/wizard/wizard'
import { UploadVideo } from './uploadVideo'
import { SubmitBasicVideoInfo } from './submitBasicVideoInfo'
import { Account } from '../../types'

const { REACT_APP_API_BASE_URL, REACT_APP_API_WEBSOCKET_URL } = process.env

interface UploadVideoWizardProps {
  history: any
  account: Account
}

interface UploadVideoWizardState {}

class UploadVideoWizard extends Component<UploadVideoWizardProps, UploadVideoWizardState> {
  state = {
    isFinished: false,
    videoTitle: '',
    videoDescription: '',
    videoFile: null,
    progress: 0,
    rand: '',
  }

  ws = null

  componentWillUnmount = () => {
    this.ws.close()
  }

  initializeWebsocket = () => {
    this.ws = new WebSocket(`${REACT_APP_API_WEBSOCKET_URL}:9824`)
    this.ws.onopen = () => {
      console.log('connected')
      this.ws.send('in the browser right now')
    }
    this.ws.onclose = () => {
      console.log('disconnected')
    }

    this.ws.onmessage = (message) => {
      console.log('ws message: ', message)
      const { progress } = this.state
      const { history } = this.props
      try {
        const { progress: messageProgress, rand: finalRand } = JSON.parse(message.data)
        const newProgress = parseFloat(messageProgress)
        if (newProgress > progress) {
          this.setState(
            {
              progress: newProgress,
            },
            () => {
              if (newProgress === 100) {
                setTimeout(() => {
                  history.push(`/videos/${finalRand}`)
                }, 2000)
              }
            }
          )
        }
      } catch (e) {
        console.log('ignore this message')
      }
    }
  }

  onChangeInput = (event, callback) => {
    this.setState({
      [`video${callback}`]: event.target.value,
    })
  }

  customSteps = [
    {
      label: 'Step 1',
      caption: 'Upload File',
      icon: <i className="fa fa-upload" />,
      component: <UploadVideo setFile={(videoFile) => this.setState({ videoFile })} />,
    },
    {
      label: 'Step 2',
      caption: 'Basic Info',
      icon: <i className="fa fa-lock" />,
      component: <SubmitBasicVideoInfo onChangeInput={this.onChangeInput} />,
    },
  ]

  customRenderer = ({ currentStep, stepIndex, cantBack, isInFinalStep, backHandler, nextHandler }) => {
    let i = 0
    const steps = this.customSteps.map((step, index) => {
      const isActive = currentStep === index + 1
      let itemLinkClass = ['nav-item']
      if (isActive) {
        itemLinkClass = [...itemLinkClass, 'active']
        i = 1
      } else if (i === 0 || this.state.isFinished) {
        itemLinkClass = [...itemLinkClass, 'done']
      }

      return (
        <li key={index} className={itemLinkClass.join(' ')}>
          <Link to="#" className="nav-link disabled">
            <h6>{step.label}</h6>
            <p className="m-0">{step.caption}</p>
          </Link>
        </li>
      )
    })

    return <ul className="nav nav-tabs step-anchor">{steps}</ul>
  }

  customActions = ({ currentStep, stepIndex, cantBack, isInFinalStep, backHandler, nextHandler, progress }) => {
    return (
      <div className="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end">
        <ButtonGroup className="sw-btn-group wizard-buttons" aria-label="Wizard Buttons">
          <Button onClick={backHandler} disabled={cantBack}>
            Back
          </Button>
          <Button onClick={nextHandler} disabled={this.state.isFinished && isInFinalStep}>
            {isInFinalStep ? 'Finish' : 'Next'}
          </Button>
        </ButtonGroup>
      </div>
    )
  }

  customComponents = ({ currentStep }) => {
    return this.customSteps.map((step, index) => {
      if (currentStep === index + 1) {
        return (
          <div key={index} className="sw-container tab-content">
            {step.component}
          </div>
        )
      }
      return false
    })
  }

  handlePost = async () => {
    const { account } = this.props
    const { videoFile, videoTitle, videoDescription } = this.state
    console.log('uploadVideoWizard->handlePost')
    const formData = new FormData()
    formData.append('title', videoTitle)
    formData.append('description', videoDescription)
    formData.append('file', videoFile)
    formData.append('username', account.username)
    try {
      const resp = fetch(`${REACT_APP_API_BASE_URL}/videos`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${account.token}`,
        },
      })
      setTimeout(() => this.initializeWebsocket(), 3000)
      await resp
      // @ts-ignore
      if (resp.ok) {
        // @ts-ignore
        const rand = await resp.text()
        this.setState({
          rand,
        })
      }
    } catch (e) {
      console.log('error: ', e)
    }
  }

  render() {
    const { progress } = this.state
    const color = progress < 100 ? '' : 'success'
    const animated = progress < 100
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Upload Video</h5>
            </CardHeader>
            <CardBody>
              <div className="sw-main sw-theme-default">
                <Loki
                  steps={this.customSteps}
                  currentStep={2}
                  renderSteps={this.customRenderer}
                  renderComponents={this.customComponents}
                  renderActions={this.customActions}
                  onFinish={this.handlePost}
                />
                <Progress animated={animated} color={color} value={progress} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.auth.account,
  }
}

export default connect(mapStateToProps)(UploadVideoWizard)

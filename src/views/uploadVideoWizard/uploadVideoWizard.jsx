import React, { Component } from "react"
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  ButtonGroup,
  Button,
} from "reactstrap"
import Loki from "react-loki"
import { Link } from "react-router-dom"
import FormWizardForm from "../forms/wizard/wizard"
import { UploadVideo } from './uploadVideo'
import { SubmitBasicVideoInfo } from './submitBasicVideoInfo'

class UploadVideoWizard extends Component {
  state = {
    isFinished: false,
    videoTitle: '',
    videoDescription: '',
    videoFile: null
  }

  onChangeInput = (event, callback) => {
    this.setState({
      [`video${callback}`]: event.target.value
    })
  }

  customSteps = [
    {
      label: "Step 1",
      caption: "Upload File",
      icon: <i className="fa fa-upload" />,
      component: <UploadVideo setFile={(videoFile) => this.setState({ videoFile })} />
    },
    {
      label: "Step 2",
      caption: "Basic Info",
      icon: <i className="fa fa-lock" />,
      component: <SubmitBasicVideoInfo onChangeInput={this.onChangeInput} />
    }
  ]

  customRenderer = ({
    currentStep,
    stepIndex,
    cantBack,
    isInFinalStep,
    backHandler,
    nextHandler,
  }) => {
    let i = 0
    const steps = this.customSteps.map((step, index) => {
      const isActive = currentStep === index + 1
      let itemLinkClass = ["nav-item"]
      if (isActive) {
        itemLinkClass = [...itemLinkClass, "active"]
        i = 1
      } else if (i === 0 || this.state.isFinished) {
        itemLinkClass = [...itemLinkClass, "done"]
      }

      return (
        <li key={index} className={itemLinkClass.join(" ")}>
          <Link to="#" className="nav-link disabled">
            <h6>{step.label}</h6>
            <p className="m-0">{step.caption}</p>
          </Link>
        </li>
      )
    })

    return <ul className="nav nav-tabs step-anchor">{steps}</ul>
  }

  customActions = ({
    currentStep,
    stepIndex,
    cantBack,
    isInFinalStep,
    backHandler,
    nextHandler,
  }) => {
    return (
      <div className="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end">
        <ButtonGroup className="sw-btn-group wizard-buttons" aria-label="Wizard Buttons">
          <Button onClick={backHandler} disabled={cantBack}>
            Back
          </Button>
          <Button
            onClick={nextHandler}
            disabled={this.state.isFinished && isInFinalStep}
          >
            {isInFinalStep ? "Finish" : "Next"}
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
    const { history, token } = this.props
    const { videoFile, videoTitle, videoDescription } = this.state
    const formData = new FormData()
    formData.append('title', videoTitle)
    formData.append('description', videoDescription)
    formData.append('file', videoFile)
    const resp = await fetch('http://localhost:3333/videos', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!resp.ok) return
    const data = await resp.json()
    this.setState({
      isFinished: true
    }, () => {
      history.push(`/videos/${data.rand}`)
    })
  }

  render() {
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
    token: state.auth.account.loginData.access_token.token
  }
}

export default connect(mapStateToProps)(UploadVideoWizard)

import React, { Component } from "react"
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
import FormWizardForm from "./wizard"

const Step1 = () => (
  <div className="step-content">
    <h5>Title Step 1</h5>
    <hr />
    <h6>Sub title 1</h6>
    <p>
      <strong>@Title content 1!.. </strong> Lorem Ipsum is simply dummy text of
      the printing <strong>@Content content 1 </strong> and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text.
    </p>
    <h6 className="mt-3">Sub title 2</h6>
    <p>
      <strong>@Title content 2!.. </strong> Lorem Ipsum is simply dummy text and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text.
    </p>
  </div>
)
const Step2 = () => (
  <div className="step-content">
    <h5>Title Step 2</h5>
    <hr />
    <h6>Sub title 1</h6>
    <p>
      <strong>@Title content 1!.. </strong> Lorem Ipsum is simply dummy text of
      the printing <strong>@Content content 1 </strong> and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text.
    </p>
    <h6 className="mt-3">Sub title 2</h6>
    <p>
      <strong>@Title content 2!.. </strong> Lorem Ipsum is simply dummy text and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text.
    </p>
  </div>
)
const Step3 = () => (
  <div className="step-content">
    <h5>Title Step 3</h5>
    <hr />
    <h6>Sub title 1</h6>
    <p>
      <strong>@Title content 1!.. </strong> Lorem Ipsum is simply dummy text of
      the printing <strong>@Content content 1 </strong> and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text.
    </p>
    <h6 className="mt-3">Sub title 2</h6>
    <p>
      <strong>@Title content 2!.. </strong> Lorem Ipsum is simply dummy text and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text.
    </p>
  </div>
)
const Step4 = () => (
  <div className="step-content">
    <h5>Title Step 4</h5>
    <hr />
    <h6>Sub title 1</h6>
    <p>
      <strong>@Title content 1!.. </strong> Lorem Ipsum is simply dummy text of
      the printing <strong>@Content content 1 </strong> and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text.
    </p>
    <h6 className="mt-3">Sub title 2</h6>
    <p>
      <strong>@Title content 2!.. </strong> Lorem Ipsum is simply dummy text and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy
      text.
    </p>
  </div>
)

const customSteps = [
  {
    label: "Step 1",
    caption: "This is step description",
    icon: <i className="fa fa-user" />,
    component: <Step1 />,
  },
  {
    label: "Step 2",
    caption: "This is step content",
    icon: <i className="fa fa-lock" />,
    component: <Step2 />,
  },
  {
    label: "Step 3",
    caption: "This is step text",
    icon: <i className="fa fa-envelope" />,
    component: <Step3 />,
  },
  {
    label: "Step 4",
    caption: "This is step content",
    icon: <i className="fa fa-lock" />,
    component: <Step4 />,
  },
]
class FormWizard extends Component {
  state = {
    isFinished: false,
  }

  customRenderer = ({
    currentStep,
    stepIndex,
    cantBack,
    isInFinalStep,
    backHandler,
    nextHandler,
  }) => {
    let i = 0
    const steps = customSteps.map((step, index) => {
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
        <ButtonGroup className="sw-btn-group" aria-label="Wizard Buttons">
          <Button onClick={backHandler} disabled={cantBack}>
            Previous
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
    return customSteps.map((step, index) => {
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

  onFinish = () => {
    this.setState({ isFinished: true })
  }
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Smart Wizard</h5>
            </CardHeader>
            <CardBody>
              <div className="sw-main sw-theme-default">
                <Loki
                  steps={customSteps}
                  currentStep={2}
                  renderSteps={this.customRenderer}
                  renderComponents={this.customComponents}
                  renderActions={this.customActions}
                  onFinish={this.onFinish}
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Form Wizard</h5>
            </CardHeader>
            <CardBody>
              <FormWizardForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default FormWizard

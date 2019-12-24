import React from "react"
import {
  Row,
  Col,
  ButtonGroup,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap"

const NewsletterForm = props => {
  const {
    isSubmitting,

    // Loki props
    backLabel,
    nextLabel,
    onBack,
    onNext,
    cantBack,
  } = props

  return (
    <Row className="justify-content-md-center">
      <Col sm={12} md={9}>
        <Form className="p-1">
          <FormGroup>
            <div className="checkbox d-inline checkbox-fill">
              <Input
                type="checkbox"
                name="receiveNewsletter"
                id="receiveNewsletter"
                defaultChecked={true}
              />
              <Label for="receiveNewsletter" className="cr">
                Register for newsletter
              </Label>
            </div>
          </FormGroup>
          <ButtonGroup aria-label="Wizard Buttons">
            <Button onClick={onBack} disabled={isSubmitting || cantBack}>
              {backLabel}
            </Button>
            <Button onClick={onNext} disabled={isSubmitting}>
              {nextLabel}
            </Button>
          </ButtonGroup>
        </Form>
      </Col>
    </Row>
  )
}

export default NewsletterForm

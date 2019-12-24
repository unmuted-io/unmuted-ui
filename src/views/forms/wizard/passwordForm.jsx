import React from "react"
import {
  Row,
  Col,
  Form,
  FormGroup,
  ButtonGroup,
  Button,
  Label,
  Input,
} from "reactstrap"

const PasswordForm = props => {
  const {
    user,
    isSubmitting,
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
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              defaultValue={user.password}
            />
          </FormGroup>
          <FormGroup>
            <Label for="passwordConfirmation">Password Confirmation</Label>
            <Input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              defaultValue={user.passwordConfirmation}
            />
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

export default PasswordForm

import React from "react"
import {
  Row,
  Col,
  Form,
  FormGroup,
  ButtonGroup,
  Button,
  Input,
  Label,
} from "reactstrap"

const UserForm = props => {
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
        <Form onSubmit={e => e.preventDefault()} className="p-1">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="userName"
              id="userName"
              defaultValue={user.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              type="text"
              name="email"
              id="email"
              defaultValue={user.email}
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

export default UserForm

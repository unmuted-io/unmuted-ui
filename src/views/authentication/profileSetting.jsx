import React, { Component } from "react"
import {
  Card,
  CardBody,
  InputGroup,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"
import avatar from "../../assets/images/user/avatar-3.jpg"

class ProfileSetting extends Component {
  render() {
    return (
      <div className="auth-wrapper" style={{ background: "#eff3f6" }}>
        <div className="auth-content">
          <span className="r" />
          <span className="r s" />
          <span className="r s" />
          <span className="r" />
        </div>
        <Card>
          <CardBody className="text-center">
            <h5 className="mb-4">Profile Settings</h5>
            <img src={avatar} className="img-radius mb-4" alt="User-Profile" />
            <InputGroup className="mb-3">
              <Input type="text" placeholder="Name" />
            </InputGroup>
            <InputGroup className="mb-3">
              <Input type="text" placeholder="User Name" />
            </InputGroup>
            <div className="text-left mb-4">
              <FormGroup className="d-inline">
                <div className="radio d-inline">
                  <input
                    type="radio"
                    name="radio-in-1"
                    id="radio-in"
                    defaultChecked
                  />
                  <Label for="adio-in" className="cr">
                    Private Profile
                  </Label>
                </div>
              </FormGroup>
              <FormGroup className="d-inline">
                <div className="radio d-inline">
                  <input type="radio" name="radio-in-1" id="radio-in-2" />
                  <Label for="adio-in-2" className="cr">
                    Public Profile
                  </Label>
                </div>
              </FormGroup>
            </div>
            <Button color="primary" className="mb-4">
              Register
            </Button>
            <p className="mb-0 text-muted">
              Don’t have an account?
              <Link to="/maint/singup" className="f-w-400">
                Signup
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default ProfileSetting

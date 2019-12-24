import React, { Component } from "react";
import { Form, Button } from "reactstrap";
import Parallax from "parallax-js";
import p404 from "../../assets/images/error/404-01.png";
import shadows from "../../assets/images/error/shadows-01.png";
import monster from "../../assets/images/error/monster-01.png";
import text1 from "../../assets/images/error/text-01.png";
import monstereyes from "../../assets/images/error/monster-eyes-01.png";

class ErrorPage extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene);
  }
  componentWillUnmount() {
    this.parallax.disable();
  }
  render() {
    return (
      <div className="auth-wrapper error">
        <div className="container">
          <ul ref={el => (this.scene = el)} className="scene">
            <li className="layer" data-depth="1.00">
              <img className="img-fluid" src={p404} alt="errors" />
            </li>
            <li className="layer" data-depth="0.60">
              <img className="img-fluid" src={shadows} alt="errors" />
            </li>
            <li className="layer" data-depth="0.20">
              <img className="img-fluid" src={monster} alt="errors" />
            </li>
            <li className="layer" data-depth="0.40">
              <img className="img-fluid" src={text1} alt="errors" />
            </li>
            <li className="layer" data-depth="0.10">
              <img className="img-fluid" src={monstereyes} alt="errors" />
            </li>
          </ul>
          <Form action="/">
            <Button className="mt-3 mb-4" outline color="light">
              <i className="feather icon-home" />
              Back to Home
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default ErrorPage;

// import external modules
import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import Modal from "react-animated-modal";

// import internal(own) modules

class ModalItem extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      showModal: false
    };
  }
  toggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    return (
      <Fragment>
        <Button color="primary" onClick={this.toggle}>
          {this.props.modal.type}
        </Button>
        <Modal
          visible={this.state.showModal}
          closemodal={this.toggle}
          type={this.props.modal.type}
        >
          <h3 className="bg-primary text-white">{`${this.props.modal.title} ${
            this.props.modal.type
          }`}</h3>
          <div className="contents">
            <p>{this.props.modal.text}</p>
            <ul>
              <li>
                <strong>Read:</strong> modal windows will probably tell you
                something important so don't forget to read what they say.
              </li>
              <li>
                <strong>Look:</strong> a modal window enjoys a certain kind of
                attention; just look at it and appreciate its presence.
              </li>
              <li>
                <strong>Close:</strong> click on the button below to close the
                modal.
              </li>
            </ul>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

class ModalAdvance extends Component {
  state = {
    modal: [
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "pulse"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "rubberBand"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "shake"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "swing"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "tada"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "wobble"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "jello"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "bounceIn"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "bounceInDown"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "bounceInLeft"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "bounceInRight"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "bounceInUp"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "pulse"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "fadeIn"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "fadeInDown"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "fadeInLeft"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "fadeInRight"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "fadeInUp"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "flip"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "flipInX"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "flipInY"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "lightSpeedIn"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "rotateIn"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "rotateInDownLeft"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "rotateInDownRight"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "rotateInUpLeft"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "rotateInUpRight"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "slideInUp"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "slideInDown"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "slideInLeft"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "slideInRight"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "zoomIn"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "zoomInDown"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "zoomInLeft"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "zoomInRight"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "zoomInUp"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "hinge"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "jackInTheBox"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "rollIn"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "bounce"
      },
      {
        title: "Modal Dialog",
        text:
          "This is a modal window. You can do the following things with it:",
        type: "flash"
      }
    ]
  };
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Animeted Model</h5>
            </CardHeader>
            <CardBody>
              <div className="main clearfix">
                <div className="column">
                  {this.state.modal.map((modal, i) => {
                    return <ModalItem key={i} modal={modal} />;
                  })}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ModalAdvance;

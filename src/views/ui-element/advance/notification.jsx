// import external modules
import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";

// import internal(own) modules
import Notify from "./example/notification/notification";

class Notification extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h5>Notification Alert</h5>
            </CardHeader>
            <CardBody>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-left",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Top Left</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Top Right</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-center",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Top Center</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "bottom-left",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Bottom Left</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "bottom-right",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Bottom Right</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "bottom-center",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Bottom Center</Button>
              </Notify>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Notification Position</h5>
            </CardHeader>
            <CardBody>
              <Notify
                notification={{
                  variant: "primary",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Primary</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "info",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="info">Info</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "success",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="success">Success</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "warning",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="warning">Warning</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "danger",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="danger">Danger</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "secondary",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "slide", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button>Secondary</Button>
              </Notify>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Notification Behaviour</h5>
            </CardHeader>
            <CardBody>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "fade" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Fade In</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "fade", direction: "left" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Fade In Left</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "fade", direction: "right" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Fade In Right</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "fade", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Fade In Up</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "fade", direction: "bottom" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Fade In Down</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "bounce" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Bounce In</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "bounce", direction: "left" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Bounce In Left</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "bounce", direction: "right" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Bounce In Right</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "bounce", direction: "top" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Bounce In Up</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "bounce", direction: "bottom" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Bounce In Down</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "roll" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Roll In</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "rubber-band" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Rubber band</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "rotate" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Rotate</Button>
              </Notify>
              <Notify
                notification={{
                  variant: "inverse",
                  placement: "top-right",
                  autoDismiss: true,
                  animation: { type: "light-spee" },
                  message:
                    "Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"
                }}
              >
                <Button color="primary">Light Spee</Button>
              </Notify>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Notification;

import React, { Component } from "react";
import { UncontrolledAlert } from "reactstrap";
import { ToastProvider, ToastConsumer } from "react-toast-notifications";
import {
  Fade,
  Flip,
  Rotate,
  Zoom,
  Bounce,
  Slide,
  Roll,
  LightSpeed
} from "react-reveal";

import Jump from "react-reveal/Jump";
import Flash from "react-reveal/Flash";
import HeadShake from "react-reveal/HeadShake";
import Jello from "react-reveal/Jello";
import Pulse from "react-reveal/Pulse";
import RubberBand from "react-reveal/RubberBand";
import Shake from "react-reveal/Shake";
import Spin from "react-reveal/Spin";
import Swing from "react-reveal/Swing";
import Tada from "react-reveal/Tada";
import Wobble from "react-reveal/Wobble";

const AlertMessage = ({
  appearance,
  children,
  transitionDuration,
  transitionState,
  onDismiss,
  animation
}) => {
  const Ani = getAnimation(animation.type);
  const direction = animation.direction;
  return (
    <Ani
      left={direction === "left"}
      right={direction === "right"}
      top={direction === "top"}
      bottom={direction === "bottom"}
      when={transitionState === "entered"}
    >
      <UncontrolledAlert color={appearance}>{children}</UncontrolledAlert>
    </Ani>
  );
};

function getAnimation(type) {
  switch (type) {
    case "fade":
      return Fade;
    case "flip":
      return Flip;
    case "rotate":
      return Rotate;
    case "zoom":
      return Zoom;
    case "bounce":
      return Bounce;
    case "roll":
      return Roll;
    case "light-speed":
      return LightSpeed;
    case "jump":
      return Jump;
    case "flash":
      return Flash;
    case "head-shake":
      return HeadShake;
    case "jello":
      return Jello;
    case "pulse":
      return Pulse;
    case "rubber-band":
      return RubberBand;
    case "shake":
      return Shake;
    case "spin":
      return Spin;
    case "swing":
      return Swing;
    case "tada":
      return Tada;
    case "wobble":
      return Wobble;
    default:
      return Slide;
  }
}

class Notification extends Component {
  render() {
    return (
      <ToastProvider
        components={{ Toast: AlertMessage }}
        placement={this.props.notification.placement}
        animation={this.props.notification.animation}
        styles={{
          container: provided => ({ ...provided, zIndex: 99999 })
        }}
      >
        <ToastConsumer>
          {({ add }) => {
            return (
              <span
                onClick={() =>
                  add(this.props.notification.message, {
                    appearance: this.props.notification.variant,
                    autoDismiss: this.props.notification.autoDismiss
                  })
                }
              >
                {this.props.children}
              </span>
            );
          }}
        </ToastConsumer>
      </ToastProvider>
    );
  }
}

export default Notification;

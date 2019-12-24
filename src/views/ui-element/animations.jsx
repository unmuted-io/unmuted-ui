import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Animated } from "react-animated-css";
import MainCard from "../../components/mainCard/mainCard";
import prod1 from "../../assets/images/product/prod-1.jpg";
import prod2 from "../../assets/images/product/prod-2.jpg";
import prod3 from "../../assets/images/product/prod-3.jpg";
import prod4 from "../../assets/images/product/prod-4.jpg";
import prod5 from "../../assets/images/product/prod-5.jpg";

class AnimateInCom extends Component {
  state = {
    item: true
  };
  onMouseEnter = () => {
    this.setState(prevState => ({ item: false }));
    setTimeout(() => this.setState(prevState => ({ item: true })), 0);
  };
  render() {
    const props = this.props;
    return (
      <Col lg={3} md={6} sm={6} onMouseEnter={this.onMouseEnter}>
        <h6>{props.title}</h6>
        <Animated
          animationIn={props.animation}
          animationOut="zoomOutDown"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={this.state.item}
        >
          <img src={props.src} className="img-fluid" alt="animated" />
        </Animated>
      </Col>
    );
  }
}

class AnimateOutCom extends Component {
  state = {
    item: true
  };
  onMouseEnter = () => {
    this.setState(prevState => ({ item: false }));
    setTimeout(() => this.setState(prevState => ({ item: true })), 2000);
  };
  render() {
    const props = this.props;
    return (
      <Col lg={3} md={6} sm={6} onMouseEnter={this.onMouseEnter}>
        <h6>{props.title}</h6>
        <Animated
          animationIn="fadeIn"
          animationOut={props.animation}
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={this.state.item}
        >
          <img src={props.src} className="img-fluid" alt="animated" />
        </Animated>
      </Col>
    );
  }
}

const AnimateIn = props =>
  props.items.map((object, i) => (
    <AnimateInCom
      key={i}
      title={object.title}
      animation={object.animation}
      src={object.src}
    />
  ));

const AnimateOut = props =>
  props.items.map((object, i) => (
    <AnimateOutCom
      key={i}
      title={object.title}
      animation={object.animation}
      src={object.src}
    />
  ));

class Animations extends Component {
  render() {
    const attention = [
      {
        title: "Bounce",
        animation: "bounce",
        src: prod1
      },
      {
        title: "Flash",
        animation: "flash",
        src: prod2
      },
      {
        title: "Pulse",
        animation: "pulse",
        src: prod3
      },
      {
        title: "RubberBand",
        animation: "rubberBand",
        src: prod4
      },
      {
        title: "Shake",
        animation: "shake",
        src: prod5
      },
      {
        title: "Swing",
        animation: "swing",
        src: prod1
      },
      {
        title: "Tada",
        animation: "tada",
        src: prod2
      },
      {
        title: "Wobble",
        animation: "wobble",
        src: prod3
      },
      {
        title: "Jello",
        animation: "jello",
        src: prod4
      }
    ];
    const bouncing = [
      {
        title: "BounceIn",
        animation: "bounceIn",
        src: prod5
      },
      {
        title: "BounceInDown",
        animation: "bounceInDown",
        src: prod4
      },
      {
        title: "BounceInLeft",
        animation: "bounceInLeft",
        src: prod3
      },
      {
        title: "BounceInRight",
        animation: "bounceInRight",
        src: prod2
      },
      {
        title: "BounceInUp",
        animation: "bounceInUp",
        src: prod1
      }
    ];
    const fading = [
      {
        title: "FadeIn",
        animation: "fadeIn",
        src: prod1
      },
      {
        title: "FadeInDown",
        animation: "fadeInDown",
        src: prod2
      },
      {
        title: "FadeInDownBig",
        animation: "fadeInDownBig",
        src: prod3
      },
      {
        title: "FadeInLeft",
        animation: "fadeInLeft",
        src: prod4
      },
      {
        title: "FadeInLeftBig",
        animation: "fadeInLeftBig",
        src: prod5
      },
      {
        title: "FadeInRight",
        animation: "fadeInRight",
        src: prod1
      },
      {
        title: "FadeInRightBig",
        animation: "fadeInRightBig",
        src: prod2
      },
      {
        title: "FadeInUp",
        animation: "fadeInUp",
        src: prod3
      },
      {
        title: "FadeInUpBig",
        animation: "fadeInUpBig",
        src: prod4
      }
    ];
    const fadingOut = [
      {
        title: "fadeOut",
        animation: "fadeOut",
        src: prod1
      },
      {
        title: "FadeOutDown",
        animation: "fadeOutDown",
        src: prod2
      },
      {
        title: "FadeOutDownBig",
        animation: "fadeOutDownBig",
        src: prod3
      },
      {
        title: "FadeOutLeft",
        animation: "fadeOutLeft",
        src: prod4
      },
      {
        title: "FadeOutLeftBig",
        animation: "fadeOutLeftBig",
        src: prod5
      },
      {
        title: "FadeOutRight",
        animation: "fadeOutRight",
        src: prod1
      },
      {
        title: "FadeOutRightBig",
        animation: "fadeOutRightBig",
        src: prod2
      },
      {
        title: "FadeOutUp",
        animation: "fadeOutUp",
        src: prod3
      },
      {
        title: "FadeOutUpBig",
        animation: "fadeOutUpBig",
        src: prod4
      }
    ];
    const fippersIn = [
      {
        title: "Flip",
        animation: "flip",
        src: prod1
      },
      {
        title: "FlipInX",
        animation: "flipInX",
        src: prod2
      },
      {
        title: "FlipInY",
        animation: "flipInY",
        src: prod3
      }
    ];
    const fippersOut = [
      {
        title: "FlipOutX",
        animation: "flipOutX",
        src: prod4
      },
      {
        title: "FlipOutY",
        animation: "flipOutY",
        src: prod5
      }
    ];
    const lightspeedIn = [
      {
        title: "lightSpeedIn",
        animation: "lightSpeedIn",
        src: prod1
      }
    ];
    const lightspeedOut = [
      {
        title: "LightSpeedOut",
        animation: "lightSpeedOut",
        src: prod2
      }
    ];
    const rotatingIn = [
      {
        title: "RotateIn",
        animation: "rotateIn",
        src: prod1
      },
      {
        title: "rotateInDownLeft",
        animation: "rotateInDownLeft",
        src: prod2
      },
      {
        title: "RotateInDownRight",
        animation: "rotateInDownRight",
        src: prod3
      },
      {
        title: "RotateInUpLeft",
        animation: "rotateInUpLeft",
        src: prod4
      },
      {
        title: "RotateInUpRight",
        animation: "rotateInUpRight",
        src: prod5
      }
    ];
    const slidingIn = [
      {
        title: "SlideInUp",
        animation: "slideInUp",
        src: prod1
      },
      {
        title: "SlideInDown",
        animation: "slideInDown",
        src: prod2
      },
      {
        title: "SlideInLeft",
        animation: "slideInLeft",
        src: prod3
      },
      {
        title: "SlideInRight",
        animation: "slideInRight",
        src: prod4
      }
    ];
    const slidingOut = [
      {
        title: "SlideOutUp",
        animation: "slideOutUp",
        src: prod1
      },
      {
        title: "SlideOutDown",
        animation: "slideOutDown",
        src: prod2
      },
      {
        title: "SlideOutLeft",
        animation: "slideOutLeft",
        src: prod3
      },
      {
        title: "SlideOutRight",
        animation: "slideOutRight",
        src: prod4
      }
    ];
    const zoomeIn = [
      {
        title: "ZoomIn",
        animation: "zoomIn",
        src: prod1
      },
      {
        title: "ZoomInDown",
        animation: "zoomInDown",
        src: prod2
      },
      {
        title: "ZoomInLeft",
        animation: "zoomInLeft",
        src: prod3
      },
      {
        title: "ZoomInRight",
        animation: "zoomInRight",
        src: prod4
      },
      {
        title: "ZoomInUp",
        animation: "zoomInUp",
        src: prod5
      }
    ];
    const zoomeOut = [
      {
        title: "ZoomOut",
        animation: "zoomOut",
        src: prod1
      },
      {
        title: "ZoomOutDown",
        animation: "zoomOutDown",
        src: prod2
      },
      {
        title: "ZoomOutLeft",
        animation: "zoomOutLeft",
        src: prod3
      },
      {
        title: "ZoomOutRight",
        animation: "zoomOutRight",
        src: prod4
      },
      {
        title: "ZoomOutUp",
        animation: "zoomOutUp",
        src: prod5
      }
    ];
    const specials = [
      {
        title: "JackInTheBox",
        animation: "jackInTheBox",
        src: prod2
      },
      {
        title: "RollIn",
        animation: "rollIn",
        src: prod3
      }
    ];
    const specialsout1 = [
      {
        title: "Hinge",
        animation: "hinge",
        src: prod1
      }
    ];
    const specialsout2 = [
      {
        title: "RollOut",
        animation: "rollOut",
        src: prod4
      }
    ];
    return (
      <Row>
        <Col sm={12}>
          <MainCard title="Attention Seekers" bodyClass="text-center" isOption>
            <Row>
              <AnimateIn items={attention} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Bouncing Entrances" bodyClass="text-center" isOption>
            <Row>
              <AnimateIn items={bouncing} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Fading Entrances" bodyClass="text-center" isOption>
            <Row>
              <AnimateIn items={fading} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Fading Exits" bodyClass="text-center" isOption>
            <Row>
              <AnimateOut items={fadingOut} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Flippers" bodyClass="text-center" isOption>
            <Row>
              <AnimateIn items={fippersIn} />
              <AnimateOut items={fippersOut} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Lightspeed" bodyClass="text-center" isOption>
            <Row>
              <AnimateIn items={lightspeedIn} />
              <AnimateOut items={lightspeedOut} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Rotating Entrances" bodyClass="text-center" isOption>
            <Row>
              <AnimateIn items={rotatingIn} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Sliding  Entrances" bodyClass="text-center" isOption>
            <Row>
              <AnimateIn items={slidingIn} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Sliding  Exits" bodyClass="text-center" isOption>
            <Row>
              <AnimateOut items={slidingOut} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Zoom Entrances" bodyClass="text-center" isOption>
            <Row>
              <AnimateIn items={zoomeIn} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Zoom Exits" bodyClass="text-center" isOption>
            <Row>
              <AnimateOut items={zoomeOut} />
            </Row>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard title="Specials" bodyClass="text-center" isOption>
            <Row>
              <AnimateOut items={specialsout1} />
              <AnimateIn items={specials} />
              <AnimateOut items={specialsout2} />
            </Row>
          </MainCard>
        </Col>
      </Row>
    );
  }
}

export default Animations;

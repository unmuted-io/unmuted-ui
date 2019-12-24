// import external modules
import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Table
} from "reactstrap";
import { Bell } from "react-feather";
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import "pnotify/dist/PNotifyBrightTheme.css";
// import internal(own) modules

class Pnotify extends Component {
  constructor(props) {
    super(props);
    this.defaultPNotify = this.defaultPNotify.bind(this);
    this.primaryPNotify = this.primaryPNotify.bind(this);
    this.successPNotify = this.successPNotify.bind(this);
    this.infoPNotify = this.infoPNotify.bind(this);
    this.dangerPNotify = this.dangerPNotify.bind(this);
    this.successDesktopPNotify = this.successDesktopPNotify.bind(this);
    this.infoDesktopPNotify = this.infoDesktopPNotify.bind(this);
    this.warningDesktopPNotify = this.warningDesktopPNotify.bind(this);
    this.dangerDesktopPNotify = this.dangerDesktopPNotify.bind(this);
    this.topLeftPNotify = this.topLeftPNotify.bind(this);
    this.bottomLeftPNotify = this.bottomLeftPNotify.bind(this);
    this.bottomRightPNotify = this.bottomRightPNotify.bind(this);
    this.customLeftPNotify = this.customLeftPNotify.bind(this);
    this.customBottomPNotify = this.customBottomPNotify.bind(this);
    this.barTopPNotify = this.barTopPNotify.bind(this);
    this.barBottomPNotify = this.barBottomPNotify.bind(this);
    this.noTitlePNotify = this.noTitlePNotify.bind(this);
    this.richContentPNotify = this.richContentPNotify.bind(this);
    this.closeOnClickPNotify = this.closeOnClickPNotify.bind(this);
    this.customButtonPNotify = this.customButtonPNotify.bind(this);
    this.callbackButtonPNotify = this.callbackButtonPNotify.bind(this);
    this.dynamicProgressButtonPNotify = this.dynamicProgressButtonPNotify.bind(
      this
    );
    this.multiLinePNotify = this.multiLinePNotify.bind(this);
    this.promptPNotify = this.promptPNotify.bind(this);
    this.confirmPNotify = this.confirmPNotify.bind(this);
    this.stickeyPNotify = this.stickeyPNotify.bind(this);
    this.permanentPNotify = this.permanentPNotify.bind(this);
  }
  defaultPNotify() {
    PNotify.notice({
      title: "Default Notice",
      text: "Check me out! I'm notice"
    });
  }
  primaryPNotify() {
    PNotify.notice({
      title: "Primary Notice",
      text: "Check me out! I'm notice"
    });
  }
  successPNotify() {
    PNotify.success({
      title: "Success Notice",
      text: "Check me out! I'm notice"
    });
  }
  infoPNotify() {
    PNotify.info({
      title: "Info Notice",
      text: "Check me out! I'm notice"
    });
  }
  dangerPNotify() {
    PNotify.error({
      title: "Error Notice",
      text: "Check me out! I'm notice"
    });
  }
  successDesktopPNotify() {
    PNotify.success({
      title: "Success Desktop Notice",
      text:
        "I'm a success desktop notification, if you have given me a permission.",
      modules: {
        Desktop: {
          desktop: true
        }
      }
    }).on("click", function(e) {
      if (
        e.target.className.match("ui-pnotify-sticker") ||
        e.target.className.match("ui-pnotify-closer") ||
        e.target.className.match("brighttheme-icon-sticker") ||
        e.target.className.match("brighttheme-icon-closer")
      ) {
        return;
      }
      alert("Hey! You clicked the desktop notification!");
    });
  }
  infoDesktopPNotify() {
    PNotify.info({
      title: "Info Desktop Notice",
      text:
        "I'm a info desktop notification, if you have given me a permission.",
      modules: {
        Desktop: {
          desktop: true
        }
      }
    }).on("click", function(e) {
      if (
        e.target.className.match("ui-pnotify-sticker") ||
        e.target.className.match("ui-pnotify-closer") ||
        e.target.className.match("brighttheme-icon-sticker") ||
        e.target.className.match("brighttheme-icon-closer")
      ) {
        return;
      }
      alert("Hey! You clicked the desktop notification!");
    });
  }
  warningDesktopPNotify() {
    PNotify.notice({
      title: "Warning Desktop Notice",
      text:
        "I'm a warning desktop notification, if you have given me a permission.",
      modules: {
        Desktop: {
          desktop: true
        }
      }
    }).on("click", function(e) {
      if (
        e.target.className.match("ui-pnotify-sticker") ||
        e.target.className.match("ui-pnotify-closer") ||
        e.target.className.match("brighttheme-icon-sticker") ||
        e.target.className.match("brighttheme-icon-closer")
      ) {
        return;
      }
      alert("Hey! You clicked the desktop notification!");
    });
  }
  dangerDesktopPNotify() {
    PNotify.error({
      title: "Error Desktop Notice",
      text:
        "I'm a error desktop notification, if you have given me a permission.",
      modules: {
        Desktop: {
          desktop: true
        }
      }
    }).on("click", function(e) {
      if (
        e.target.className.match("ui-pnotify-sticker") ||
        e.target.className.match("ui-pnotify-closer") ||
        e.target.className.match("brighttheme-icon-sticker") ||
        e.target.className.match("brighttheme-icon-closer")
      ) {
        return;
      }
      alert("Hey! You clicked the desktop notification!");
    });
  }
  topLeftPNotify() {
    if (typeof window.stackTopLeft === "undefined") {
      window.stackTopLeft = {
        dir1: "down",
        dir2: "right",
        firstpos1: 25,
        firstpos2: 25,
        push: "top"
      };
    }

    PNotify.notice({
      title: "Over here",
      text: "Check me out. I'm in a different stack.",
      stack: window.stackTopLeft
    });
  }
  bottomLeftPNotify() {
    if (typeof window.stackBottomLeft === "undefined") {
      window.stackBottomLeft = {
        dir1: "right",
        dir2: "up",
        firstpos1: 25,
        firstpos2: 25,
        push: "top"
      };
    }

    PNotify.notice({
      title: "Over here",
      text: "Check me out. I'm in a different stack.",
      stack: window.stackBottomLeft
    });
  }
  bottomRightPNotify() {
    if (typeof window.stackBottomRight === "undefined") {
      window.stackBottomRight = {
        dir1: "up",
        dir2: "left",
        firstpos1: 25,
        firstpos2: 25
      };
    }

    PNotify.notice({
      title: "Over here",
      text: "Check me out. I'm in a different stack.",
      stack: window.stackBottomRight
    });
  }
  customLeftPNotify() {
    if (typeof window.stackCustomLeft === "undefined") {
      window.stackCustomLeft = {
        dir1: "right",
        dir2: "down",
        firstpos1: 200,
        firstpos2: 200
      };
    }

    PNotify.success({
      title: "Good News Everyone",
      text: "I've invented a device that bites shiny metal asses.",
      stack: window.stackCustomLeft
    });
  }
  customBottomPNotify() {
    if (typeof window.stackCustomBottom === "undefined") {
      window.stackCustomBottom = {
        dir1: "left",
        dir2: "up",
        firstpos1: 200,
        firstpos2: 200
      };
    }

    PNotify.success({
      title: "Good News Everyone",
      text: "I've invented a device that bites shiny metal asses.",
      stack: window.stackCustomBottom
    });
  }
  barTopPNotify() {
    if (typeof window.stackBarTop === "undefined") {
      window.stackBarTop = {
        dir1: "down",
        firstpos1: 0,
        spacing1: 2,
        push: "top"
      };
    }

    PNotify.info({
      title: "Breaking News",
      text: "Have you met Ted?",
      addClass: "stack-bar-top",
      cornerClass: "ui-pnotify-sharp",
      shadow: false,
      width: "100%",
      stack: window.stackBarTop
    });
  }
  barBottomPNotify() {
    if (typeof window.stackBarBottom === "undefined") {
      window.stackBarBottom = {
        dir1: "up",
        firstpos1: 0,
        spacing1: 2,
        push: "top"
      };
    }

    PNotify.info({
      title: "Breaking News",
      text: "Have you met Ted?",
      addClass: "stack-bar-bottom",
      cornerClass: "ui-pnotify-sharp",
      shadow: false,
      width: "100%",
      stack: window.stackBarBottom
    });
  }
  noTitlePNotify() {
    PNotify.notice({
      title: false,
      text: "Check me out! I'm a notice without title.",
      icon: false
    });
  }
  richContentPNotify() {
    PNotify.notice({
      title: "<b>Rich content notice</b>",
      titleTrusted: true,
      text:
        "Look at my beautiful <strong>strong</strong>, <a href='#' class='alert-link'>linked</a>, <em>emphasized</em>, and <u>underlined</u> text with <i class='icon-make-group' /> icon.",
      textTrusted: true
    });
  }
  closeOnClickPNotify() {
    const notice = PNotify.notice({
      title: "Close on click",
      text: "Click me anywhere to dismiss me.",
      hide: false,
      icon: false,
      modules: {
        Buttons: {
          closer: false,
          sticker: false
        }
      }
    });
    notice.on("click", function() {
      notice.close();
    });
  }
  customButtonPNotify() {
    PNotify.notice({
      title: "Choose a Side",
      text: "You have three options to choose from.",
      icon: "fa fa-question-circle",
      hide: false,
      modules: {
        Confirm: {
          confirm: true,
          buttons: [
            {
              text: "Fries",
              primary: true,
              click: function(notice) {
                notice.update({
                  title: "You've Chosen a Side",
                  text: "You want fries.",
                  icon: true,
                  type: "error",
                  hide: true,
                  modules: {
                    Confirm: {
                      confirm: false
                    },
                    Buttons: {
                      closer: true,
                      sticker: true
                    }
                  }
                });
              }
            },
            {
              text: "Mash",
              click: function(notice) {
                notice.update({
                  title: "You've Chosen a Side",
                  text: "You want mashed potatoes.",
                  icon: true,
                  type: "info",
                  hide: true,
                  modules: {
                    Confirm: {
                      confirm: false
                    },
                    Buttons: {
                      closer: true,
                      sticker: true
                    }
                  }
                });
              }
            },
            {
              text: "Fruit",
              click: function(notice) {
                notice.update({
                  title: "You've Chosen a Side",
                  text: "You want fruit.",
                  icon: true,
                  type: "success",
                  hide: true,
                  modules: {
                    Confirm: {
                      confirm: false
                    },
                    Buttons: {
                      closer: true,
                      sticker: true
                    }
                  }
                });
              }
            }
          ]
        },
        Buttons: {
          closer: false,
          sticker: false
        },
        History: {
          history: false
        }
      }
    });
  }
  callbackButtonPNotify() {
    const dontAlert = function() {};
    PNotify.notice({
      title: "I'm Here",
      text:
        "I have a callback for each of my events. I'll call all my callbacks while I change states.",
      modules: {
        Callbacks: {
          beforeInit: function(opts) {
            dontAlert(
              "I'm called before the notice initializes. I'm passed the options used to make the notice. I can modify them. Watch me replace the word callback with tire iron!"
            );
            opts.text = opts.text.replace(/callback/g, "tire iron");
          },
          afterInit: function(notice) {
            dontAlert(
              "I'm called after the notice initializes. I'm passed the PNotify object for the current notice: " +
                notice +
                "\n\nThere are more callbacks you can assign, but this is the last notice you'll see. Check the code to see them all."
            );
          },
          beforeOpen: function(notice) {
            alert(
              "I'm called before the notice opens. I'm passed the PNotify object for the current notice: " +
                notice
            );
          },
          afterOpen: function(notice) {
            dontAlert(
              "I'm called after the notice opens. I'm passed the PNotify object for the current notice: " +
                notice
            );
          },
          beforeClose: function(notice, timerHide) {
            alert(
              "I'm called before the notice closes. I'm passed the PNotify object for the current notice: " +
                notice
            );
            dontAlert(
              "I also have an argument called timerHide, which is true if the notice was closed because the timer ran down. Value: " +
                timerHide
            );
          },
          afterClose: function(notice, timerHide) {
            dontAlert(
              "I'm called after the notice closes. I'm passed the PNotify object for the current notice: " +
                notice
            );
            dontAlert(
              "I also have an argument called timerHide, which is true if the notice was closed because the timer ran down. Value: " +
                timerHide
            );
          }
        }
      }
    });
  }
  dynamicProgressButtonPNotify() {
    let percent = 0;
    const notice = PNotify.info({
      text: "Please Wait",
      icon: "fa fa-spinner fa-pulse",
      hide: false,
      shadow: false,
      width: "200px",
      modules: {
        Buttons: {
          closer: false,
          sticker: false
        }
      }
    });

    setTimeout(function() {
      notice.update({
        title: false
      });
      const interval = setInterval(function() {
        percent += 2;
        const options = {
          text: percent + "% complete."
        };
        if (percent === 80) {
          options.title = "Almost There";
        }
        if (percent >= 100) {
          window.clearInterval(interval);
          options.title = "Done!";
          options.type = "success";
          options.hide = true;
          options.icon = "fa fa-check";
          options.shadow = true;
          options.width = PNotify.defaults.width;
          options.modules = {
            Buttons: {
              closer: true,
              sticker: true
            }
          };
        }
        notice.update(options);
      }, 120);
    }, 2000);
  }
  multiLinePNotify() {
    const notice = PNotify.notice({
      title: "Input Needed",
      text: "Write me a poem, please.",
      icon: "fa fa-question-circle",
      hide: false,
      modules: {
        Confirm: {
          prompt: true,
          promptMultiLine: true,
          promptValue: "Roses are red,\nViolets are blue,\n"
        },
        Buttons: {
          closer: false,
          sticker: false
        },
        History: {
          history: false
        }
      }
    });
    notice.on("pnotify.confirm", function(e) {
      notice.cancelClose().update({
        title: "Your Poem",
        text: e.value,
        icon: true,
        type: "success",
        hide: true,
        modules: {
          Confirm: {
            prompt: false
          },
          Buttons: {
            closer: true,
            sticker: true
          }
        }
      });
    });
    notice.on("pnotify.cancel", function(e) {
      notice.cancelClose().update({
        title: "You Don't Like Poetry",
        text: "Roses are dead,\nViolets are dead,\nI suck at gardening.",
        icon: true,
        type: "error",
        hide: true,
        modules: {
          Confirm: {
            prompt: false
          },
          Buttons: {
            closer: true,
            sticker: true
          }
        }
      });
    });
  }
  promptPNotify() {
    const notice = PNotify.notice({
      title: "Input Needed",
      text: "What side would you like?",
      icon: "fa fa-question-circle",
      hide: false,
      modules: {
        Confirm: {
          prompt: true
        },
        Buttons: {
          closer: false,
          sticker: false
        },
        History: {
          history: false
        }
      }
    });
    notice.on("pnotify.confirm", function(e) {
      notice.cancelClose().update({
        title: "You've Chosen a Side",
        text: "You want " + e.value + ".",
        icon: true,
        type: "success",
        hide: true,
        modules: {
          Confirm: {
            prompt: false
          },
          Buttons: {
            closer: true,
            sticker: true
          }
        }
      });
    });
    notice.on("pnotify.cancel", function(e) {
      notice.cancelClose().update({
        title: "You Don't Want a Side",
        text: "No soup for you!",
        icon: true,
        type: "error",
        hide: true,
        modules: {
          Confirm: {
            prompt: false
          },
          Buttons: {
            closer: true,
            sticker: true
          }
        }
      });
    });
  }
  confirmPNotify() {
    const notice = PNotify.notice({
      title: "Confirmation Needed",
      text: "Are you sure?",
      icon: "fa fa-question-circle",
      hide: false,
      modules: {
        Confirm: {
          confirm: true
        },
        Buttons: {
          closer: false,
          sticker: false
        },
        History: {
          history: false
        }
      }
    });
    notice.on("pnotify.confirm", function() {
      alert("Ok, cool.");
    });
    notice.on("pnotify.cancel", function() {
      alert("Oh ok. Chicken, I see.");
    });
  }
  stickeyPNotify() {
    PNotify.notice({
      title: "Sticky Notice",
      text:
        "Check me out! I'm a sticky notice. You'll have to close me yourself.",
      hide: false
    });
  }
  permanentPNotify() {
    PNotify.notice({
      title: "Permanent Buttons Notice",
      text: "My buttons are really lonely, so they're gonna hang out with us.",
      modules: {
        Buttons: {
          closerHover: false,
          stickerHover: false
        }
      }
    });
  }
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Notification Alert</h5>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>warning Notice</td>
                    <td>
                      <Button
                        size="sm"
                        color="warning"
                        onClick={this.defaultPNotify}
                      >
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>notice</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>primary Notice</td>
                    <td>
                      <Button
                        size="sm"
                        color="primary"
                        onClick={this.primaryPNotify}
                      >
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>notice</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>success Notice</td>
                    <td>
                      <Button
                        size="sm"
                        color="success"
                        onClick={this.successPNotify}
                      >
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>success</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>info Notice</td>
                    <td>
                      <Button size="sm" color="info" onClick={this.infoPNotify}>
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>info</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>danger Notice</td>
                    <td>
                      <Button
                        size="sm"
                        color="danger"
                        onClick={this.dangerPNotify}
                      >
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>error</code> with <code>PNotify</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Desktop Notifications</h5>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Success Notification</td>
                    <td>
                      <Button
                        size="sm"
                        color="success"
                        onClick={this.successDesktopPNotify}
                      >
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>success</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Info Notification</td>
                    <td>
                      <Button
                        size="sm"
                        color="info"
                        onClick={this.infoDesktopPNotify}
                      >
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>info</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>warning Notification</td>
                    <td>
                      <Button
                        size="sm"
                        color="warning"
                        onClick={this.warningDesktopPNotify}
                      >
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>notice</code> with <code>PNotify</code>
                    </td>
                  </tr>
                  <tr>
                    <td>danger Notification</td>
                    <td>
                      <Button
                        size="sm"
                        color="danger"
                        onClick={this.dangerDesktopPNotify}
                      >
                        <Bell size={14} className="m-r-5" /> Click here!
                      </Button>
                    </td>
                    <td>
                      Use method <code>error</code> with <code>PNotify</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Notification Position</h5>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Top Left</td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.topLeftPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :
                      <code>
                        {
                          "stack:{'dir1': 'down', 'dir2': 'right', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"
                        }
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>Bottom Left </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.bottomLeftPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :
                      <code>
                        {
                          "stack:{'dir1': 'right', 'dir2': 'up', 'firstpos1': 25, 'firstpos2': 25, 'push': 'top'}"
                        }
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>Bottom Right</td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.bottomRightPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :
                      <code>
                        {
                          "stack:{'dir1': 'up', 'dir2': 'left', 'firstpos1': 25, 'firstpos2': 25}"
                        }
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Left </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.customLeftPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :
                      <code>
                        {
                          "stack:{'dir1': 'right', 'dir2': 'down', 'firstpos1': 200, 'firstpos2': 200}"
                        }
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Right </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.customBottomPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :
                      <code>
                        {
                          "stack:{'dir1': 'left', 'dir2': 'up', 'firstpos1': 200, 'firstpos2': 200}"
                        }
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Top </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.barTopPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :
                      <code>
                        {
                          "stack:{'dir1': 'down', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"
                        }
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Bottom </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.barBottomPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :
                      <code>
                        {
                          "stack:{'dir1': 'up', 'firstpos1': 0, 'spacing1': 2, 'push': 'top'}"
                        }
                      </code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Notification Option</h5>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>No Title </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.noTitlePNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :<code>{"title:false, icon: false"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Rich Title </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.richContentPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      Options :
                      <code>{"titleTrusted:true, textTrusted: true"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Click to Close </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.closeOnClickPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"closeOnClickPNotify"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Custom Button </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.customButtonPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"customButtonPNotify"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Callback Button </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.callbackButtonPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"callbackButtonPNotify"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Dynamic Progress Button </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.dynamicProgressButtonPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"dynamicProgressButtonPNotify"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Multi Line Props </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.multiLinePNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"multiLinePNotify"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Prompt Button </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.promptPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"promptPNotify"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Confirm Button</td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.confirmPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"confirmPNotify"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Stickey Button </td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.stickeyPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"stickeyPNotify"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Permanent Button</td>
                    <td>
                      <Button
                        color="primary"
                        size="sm"
                        onClick={this.permanentPNotify}
                      >
                        <Bell size={14} className="m-r-5" />
                        Click here!
                      </Button>
                    </td>
                    <td>
                      function :<code>{"permanentPNotify"}</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Pnotify;

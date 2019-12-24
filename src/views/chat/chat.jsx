import React, { Component } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import ChatSearch from "../../containers/chat/chatSearch";
import ChatList from "../../containers/chat/chatList";
import ChatContent from "../../containers/chat/chatContent";
import ChatMsgSend from "../../containers/chat/chatMsgSend";

class Chat extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card className="msg-card mb-0">
            <CardBody className="msg-block">
              <Row>
                <Col lg={3} md={12}>
                  <div className="message-mobile">
                    <div className="task-right-header-status">
                      <span className="f-w-400">Friend List</span>
                      <i className="fas fa-times float-right m-t-10" />
                    </div>
                  </div>
                  <div className="taskboard-right-progress">
                    <ChatSearch />
                    <div className="h-list-body">
                      <PerfectScrollbar>
                        <div className="msg-user-list scroll-div">
                          <ChatList />
                        </div>
                      </PerfectScrollbar>
                    </div>
                  </div>
                </Col>
                <Col lg={9} md={12}>
                  <div className="ch-block">
                    <ChatContent />
                    <hr />
                    <ChatMsgSend />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Chat;

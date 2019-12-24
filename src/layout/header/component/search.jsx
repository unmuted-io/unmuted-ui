import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';


class MainSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openBox: false
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.toggleClose = this.toggleClose.bind(this)
  }
  toggleOpen() {
    this.setState({ openBox: true })
  }
  toggleClose() {
    this.setState({ openBox: false })
  }
  render() {
    let width = this.state.openBox ? 150 : 0
    return (
      <div className={classnames("main-search", {
        open: this.state.openBox
      })}>
        <InputGroup>
          <Input type="text" placeholder="Search . . ." style={{ width: `${width}px` }} />
          <Link onClick={() => this.toggleClose()} to="#" className="input-group-append search-close">
            <i className="feather icon-x input-group-text"></i>
          </Link>
          <span onClick={() => this.toggleOpen()} style={{ cursor: "pointer" }} className="input-group-append search-btn btn btn-primary">
            <i className="feather icon-search input-group-text"></i>
          </span>
        </InputGroup>
      </div>
    );
  }
}

export default MainSearch;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import config from '../../configure';
import navigation from '../../menus';

class Breadcrumb extends Component {
  state = {
    main: [],
    item: []
  };

  componentDidMount() {
    (navigation.items).map((item, index) => {
      if (item.type && item.type === 'group') {
        this.getCollapse(item, index);
      }
      return false;
    });
  };

  componentWillReceiveProps = () => {
    (navigation.items).map((item, index) => {
      if (item.type && item.type === 'group') {
        this.getCollapse(item);
      }
      return false;
    });
  };

  getCollapse = (item) => {
    if (item.children) {
      (item.children).filter(collapse => {
        if (collapse.type && collapse.type === 'collapse') {
          this.getCollapse(collapse);
        } else if (collapse.type && collapse.type === 'item') {
          if (document.location.pathname === config.basename + collapse.url) {
            this.setState({ item: collapse, main: item });
          }
        }
        return false;
      });
    }
  };

  render() {
    let main, item;
    let breadcrumb = '';
    let title = 'Welcome';
    if (this.state.main && this.state.main.type === 'collapse') {
      main = (
        <li className="breadcrumb-item">
          <Link to="#">{this.state.main.title}</Link>
        </li>
      );
    }
    if (this.state.item && this.state.item.type === 'item') {
      title = this.state.item.title;
      item = (
        <li className="breadcrumb-item">
          <Link to="#">{title}</Link>
        </li>
      );

      if (this.state.item.breadcrumbs !== false) {
        breadcrumb = (
          <div className="col-md-12">
            <div className="page-header-title">
              <h5>{title}</h5>
            </div>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={config.defaultPath}><i className="feather icon-home" /></Link>
              </li>
              {main}
              {item}
            </ul>
          </div>
        );
      }

    }

    document.title = title + ' | Elite Able Premium React Redux Admin Template';

    return breadcrumb;
  }
}


export default Breadcrumb;
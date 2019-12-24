import React, { Component } from 'react';
import Routes from '../../containers/routes/mainRoutes';
import Config from '../../configure';
import Breadcrumb from '../breadcrumb/breadcrumb';
import classnames from 'classnames'


class ContentWrapper extends Component {
  render() {
    return (
        <div className="pcoded-main-container">
          <div className={classnames("pcoded-wrapper", {
            container: this.props.prebuildLayout === "layout-8"
          })}>
            <div className="pcoded-content">
              <div className="pcoded-inner-content">
                <div className="main-body">
                  <div className="page-wrapper">
                    {this.props.layout === "horizontal" ?
                      (
                        <div className="page-header">
                          <div className="page-block">
                            <div className="row align-items-center">
                              <Breadcrumb />
                            </div>
                          </div>
                        </div>
                      )
                      :
                      null
                    }
                    <Routes defaultPath={Config.defaultPath} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ContentWrapper;




import React, { Component } from 'react';
import { Row, Col, Table } from 'reactstrap';
import MainCard from './mainCard';

class LayoutCard extends Component {
  render() {
    const props = this.props
    return (
      <Row>
        <Col>
          <MainCard
            title={this.props.title}
            isOption
          >
            <p className="card-text">Open <code>configure.jsx</code> file from directory [ ../src/configure.jsx ] and edit <mark>highlighted</mark> options in this file.</p>
            <Table responsive bordered striped>
              <thead className="header-table">
                <tr>
                  <th>Configuration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li>
                        {props.layout ? (
                          <mark>layout: <code>{props.layout}</code></mark>
                        )
                          : (
                            <mark>layout: <code>vertical</code></mark>
                          )

                        }
                      </li>
                      <li>
                        {props.prebuildLayout ? (
                          <mark>prebuildLayout: <code>{props.prebuildLayout}</code></mark>
                        )
                          : (
                            <mark>prebuildLayout: <code>null</code></mark>
                          )

                        }
                      </li>
                      <li>
                        {props.collapseMenu ? (
                          <mark>collapseMenu: <code>{props.collapseMenu}</code></mark>
                        )
                          : (
                            <div>collapseMenu: <code>false</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.layoutType ? (
                          <mark>layoutType: <code>{props.layoutType}</code></mark>
                        )
                          : (
                            <div>layoutType: <code>default</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.iconColor ? (
                          <mark>iconColor: <code>{props.iconColor}</code></mark>
                        )
                          : (
                            <div>iconColor: <code>false</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.menuFixed ? (
                          <mark>menuFixed: <code>{props.menuFixed}</code></mark>
                        )
                          : (
                            <div>menuFixed: <code>false</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.fixedHeader ? (
                          <mark>fixedHeader: <code>{props.fixedHeader}</code></mark>
                        )
                          : (
                            <div>fixedHeader: <code>false</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.boxLayout ? (
                          <mark>boxLayout: <code>{props.boxLayout} </code></mark>
                        )
                          : (
                            <div>boxLayout: <code>false</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.rtl ? (
                          <mark>rtl: <code>{props.rtl}</code></mark>
                        )
                          : (
                            <div>rtl: <code>false</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.menuDropdownIcon ? (
                          <mark>menuDropdownIcon: <code>{props.menuDropdownIcon}</code></mark>
                        )
                          : (
                            <div>menuDropdownIcon: <code>default</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.menuListIcon ? (
                          <mark>menuListIcon: <code>{props.menuListIcon}</code></mark>
                        )
                          : (
                            <div>menuListIcon: <code>default</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.menuActiveColor ? (
                          <mark>menuActiveColor: <code>{props.menuActiveColor}</code></mark>
                        )
                          : (
                            <div>menuActiveColor: <code>blue</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.menuTitleColor ? (
                          <mark>menuTitleColor: <code>{props.menuTitleColor}</code></mark>
                        )
                          : (
                            <div>menuTitleColor: <code>default</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.hideCaption ? (
                          <mark>hideCaption: <code>{props.hideCaption}</code></mark>
                        )
                          : (
                            <div>hideCaption: <code>false</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.headerBreadcrumbHide ? (
                          <mark>headerBreadcrumbHide: <code>{props.headerBreadcrumbHide}</code></mark>
                        )
                          : (
                            <div>headerBreadcrumbHide: <code>false</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.headerBg ? (
                          <mark>headerBg: <code>{props.headerBg}</code></mark>
                        )
                          : (
                            <div>headerBg: <code>light</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.brandBg ? (
                          <mark>brandBg: <code>{props.brandBg}</code></mark>
                        )
                          : (
                            <div>brandBg: <code>light</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.menuBgGradient ? (
                          <mark>menuBgGradient: <code>{props.menuBgGradient}</code></mark>
                        )
                          : (
                            <div>menuBgGradient: <code>default</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.menuBgPattern ? (
                          <mark>menuBgPattern: <code>{props.menuBgPattern}</code></mark>
                        )
                          : (
                            <div>menuBgPattern: <code>null</code></div>
                          )

                        }
                      </li>
                      <li>
                        {props.menuBgImage ? (
                          <mark>menuBgImage: <code>{props.menuBgImage}</code></mark>
                        )
                          : (
                            <div>menuBgImage: <code>null</code></div>
                          )

                        }
                      </li>
                      <li>
                        {!props.configBlock ? (
                          <mark>configBlock: <code>true</code></mark>
                        )
                          : (
                            <mark>configBlock: <code>{props.configBlock}</code></mark>
                          )

                        }
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
      </Row>
    );
  }
}


export default LayoutCard;
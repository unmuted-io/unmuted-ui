import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Container,
  Table,
} from "reactstrap"
import { Link } from "react-router-dom"
import Prism from "../../../components/codeView/Prism"

class BasicGrid extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Grid System</h5>
            </CardHeader>
            <CardBody>
              <p>
                Use our powerful mobile-first flexbox grid to build layouts of
                all shapes and sizes thanks to a twelve column system, five
                default responsive tiers, Sass variables and mixins, and dozens
                of predefined classes.
              </p>
              <h5 className="mt-5">How it works</h5>
              <hr />
              <p>
                Bootstrap’s grid system uses a series of containers, rows, and
                columns to layout and align content. It’s built with
                <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
                  flexbox
                </Link>
                and is fully responsive. Below is an example and an in-depth
                look at how the grid comes together.
              </p>
              <p>
                <strong>New to or unfamiliar with flexbox?</strong>
                <Link to="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background">
                  Read this CSS Tricks flexbox guide
                </Link>
                for background, terminology, guidelines, and code snippets.
              </p>
              <div className="bd-example-row">
                <Container>
                  <Row>
                    <Col sm> One of three columns </Col>
                    <Col sm> One of three columns </Col>
                    <Col sm> One of three columns </Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row>
    <Col sm> One of three columns </Col>
    <Col sm> One of three columns </Col>
    <Col sm> One of three columns </Col>
  </Row>
</Container>
                `}
                  language="html"
                />
              </div>

              <p>
                The above example creates three equal-width columns on small,
                medium, large, and extra large devices using our predefined grid
                classes. Those columns are centered in the page with the parent
                <code className="highlighter-rouge">.container</code>.
              </p>
              <p>Breaking it down, here’s how it works:</p>
              <ul>
                <li>
                  Containers provide a means to center and horizontally pad your
                  site’s contents. Use
                  <code className="highlighter-rouge">.container</code> for a
                  responsive pixel width or
                  <code className="highlighter-rouge">.container-fluid</code>
                  for
                  <code className="highlighter-rouge">width: 100%</code> across
                  all viewport and device sizes.
                </li>
                <li>
                  Rows are wrappers for columns. Each column has horizontal
                  <code className="highlighter-rouge">padding</code> (called a
                  gutter) for controlling the space between them. This
                  <code className="highlighter-rouge">padding</code>
                  is then counteracted on the rows with negative margins. This
                  way, all the content in your columns is visually aligned down
                  the left side.
                </li>
                <li>
                  In a grid layout, content must be placed within columns and
                  only columns may be immediate children of rows.
                </li>
                <li>
                  Thanks to flexbox, grid columns without a specified
                  <code className="highlighter-rouge">width</code> will
                  automatically layout as equal width columns. For example, four
                  instances of
                  <code className="highlighter-rouge">.col-sm</code>
                  will each automatically be 25% wide from the small breakpoint
                  and up. See the
                  <Link to="#auto-layout-columns">auto-layout columns</Link>
                  section for more examples.
                </li>
                <li>
                  Column classes indicate the number of columns you’d like to
                  use out of the possible 12 per row. So, if you want three
                  equal-width columns across, you can use
                  <code className="highlighter-rouge">.col-4</code>.
                </li>
                <li>
                  Column <code className="highlighter-rouge">width</code>s are
                  set in percentages, so they’re always fluid and sized relative
                  to their parent element.
                </li>
                <li>
                  Columns have horizontal
                  <code className="highlighter-rouge">padding</code> to create
                  the gutters between individual columns, however, you can
                  remove the <code className="highlighter-rouge">margin</code>
                  from rows and
                  <code className="highlighter-rouge">padding</code>
                  from columns with
                  <code className="highlighter-rouge">.no-gutters</code> on the
                  <code className="highlighter-rouge">.row</code>.
                </li>
                <li>
                  To make the grid responsive, there are five grid breakpoints,
                  one for each
                  <Link to="/docs/4.1/layout/overview/#responsive-breakpoints">
                    responsive breakpoint
                  </Link>
                  : all breakpoints (extra small), small, medium, large, and
                  extra large.
                </li>
                <li>
                  Grid breakpoints are based on minimum width media queries,
                  meaning
                  <strong>
                    they apply to that one breakpoint and all those above it
                  </strong>
                  (e.g., <code className="highlighter-rouge">.col-sm-4</code>
                  applies to small, medium, large, and extra large devices, but
                  not the first <code className="highlighter-rouge">xs</code>
                  breakpoint).
                </li>
                <li>
                  You can use predefined grid classes (like
                  <code className="highlighter-rouge">.col-4</code>) or
                  <Link to="#sass-mixins">Sass mixins</Link> for more semantic
                  markup.
                </li>
              </ul>
              <p>
                Be aware of the limitations and
                <Link to="https://github.com/philipwalton/flexbugs">
                  bugs around flexbox
                </Link>
                , like the
                <Link to="https://github.com/philipwalton/flexbugs#flexbug-9">
                  inability to use some HTML elements as flex containers
                </Link>
                .
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Grid Options</h5>
            </CardHeader>
            <CardBody>
              <p>
                While Bootstrap uses
                <code className="highlighter-rouge">em</code>s or
                <code className="highlighter-rouge">rem</code>s for defining
                most sizes, <code className="highlighter-rouge">px</code>s are
                used for grid breakpoints and container widths. This is because
                the viewport width is in pixels and does not change with the
                <Link to="https://drafts.csswg.org/mediaqueries-3/#units">
                  font size
                </Link>
                .
              </p>
              <p>
                See how aspects of the Bootstrap grid system work across
                multiple devices with a handy table.
              </p>
              <Table bordered striped responsive>
                <thead>
                  <tr>
                    <th />
                    <th className="text-center">
                      Extra small
                      <br />
                      <small>&lt;576px</small>
                    </th>
                    <th className="text-center">
                      Small
                      <br />
                      <small>&ge;576px</small>
                    </th>
                    <th className="text-center">
                      Medium
                      <br />
                      <small>&ge;768px</small>
                    </th>
                    <th className="text-center">
                      Large
                      <br />
                      <small>&ge;992px</small>
                    </th>
                    <th className="text-center">
                      Extra large
                      <br />
                      <small>&ge;1200px</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Max container width
                    </th>
                    <td>None (auto)</td>
                    <td>540px</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Component/props
                    </th>
                    <td>
                      <code>Col</code>
                    </td>
                    <td>
                      <code>sm</code>
                    </td>
                    <td>
                      <code>md</code>
                    </td>
                    <td>
                      <code>lg</code>
                    </td>
                    <td>
                      <code>xl</code>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      # of columns
                    </th>
                    <td colSpan={5}>12</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Gutter width
                    </th>
                    <td colSpan={5}>30px (15px on each side of a column)</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Nestable
                    </th>
                    <td colSpan={5}>Yes</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Column ordering
                    </th>
                    <td colSpan={5}>Yes</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Auto-layout Columns</h5>
            </CardHeader>
            <CardBody>
              <p>
                Utilize breakpoint-specific column classes for easy column
                sizing without an explicit numbered class like
                <code className="highlighter-rouge">.col-sm-6</code>.
              </p>
              <h5 className="mt-5">Equal-width</h5>
              <hr />
              <p>
                For example, here are two grid layouts that apply to every
                device and viewport, from
                <code className="highlighter-rouge">xs</code> to
                <code className="highlighter-rouge">xl</code>. Add any number of
                unit-less classes for each breakpoint you need and every column
                will be the same width.
              </p>
              <div className="bd-example-row">
                <Container>
                  <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                  </Row>
                  <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
                `}
                  language="html"
                />
              </div>
              <p>
                Equal-width columns can be broken into multiple lines, but there
                was a
                <Link to="https://github.com/philipwalton/flexbugs#flexbug-11">
                  Safari flexbox bug
                </Link>
                that prevented this from working without an explicit
                <code className="highlighter-rouge">flex-basis</code> or
                <code className="highlighter-rouge">border</code>. There are
                workarounds for older browser versions, but they shouldn’t be
                necessary if you’re up-to-date.
              </p>
              <div className="bd-example-row">
                <Container>
                  <Row>
                    <Col>Column</Col>
                    <Col>Column</Col>
                    <div className="w-100" />
                    <Col>Column</Col>
                    <Col>Column</Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row>
    <Col>Column</Col>
    <Col>Column</Col>
    <div className="w-100" />
    <Col>Column</Col>
    <Col>Column</Col>
  </Row>
</Container>
                `}
                  language="html"
                />
              </div>
              <h5 className="mt-5">Setting one column width</h5>
              <hr />
              <p>
                Auto-layout for flexbox grid columns also means you can set the
                width of one column and have the sibling columns automatically
                resize around it. You may use predefined grid classes (as shown
                below), grid mixins, or inline widths. Note that the other
                columns will resize no matter the width of the center column.
              </p>
              <div className="bd-example-row">
                <Container>
                  <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                  </Row>
                  <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>`}
                  language="html"
                />
              </div>
              <h5 className="mt-5">Variable width content</h5>
              <hr />
              <p>
                Use{" "}
                <code className="highlighter-rouge">
                  col-{"{breakpoint}"}-auto
                </code>{" "}
                classes to size columns based on the natural width of their
                content.
              </p>
              <div className="bd-example-row">
                <Container>
                  <Row className="justify-content-md-center">
                    <Col xs lg="2">
                      1 of 3
                    </Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                      3 of 3
                    </Col>
                  </Row>
                  <Row>
                    <Col>1 of 3</Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                      3 of 3
                    </Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container>
                `}
                  language="html"
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Responsive Classes</h5>
            </CardHeader>
            <CardBody>
              <p>
                Bootstrap’s grid includes five tiers of predefined classes for
                building complex responsive layouts. Customize the size of your
                columns on extra small, small, medium, large, or extra large
                devices however you see fit.
              </p>
              <h5 className="mt-5">All breakpoints</h5>
              <hr />
              <p>
                For grids that are the same from the smallest of devices to the
                largest, use the <code className="highlighter-rouge">.col</code>{" "}
                and <code className="highlighter-rouge">.col-*</code> classes.
                Specify a numbered class when you need a particularly sized
                column; otherwise, feel free to stick to{" "}
                <code className="highlighter-rouge">.col</code>.
              </p>
              <div className="bd-example-row">
                <Container>
                  <Row>
                    <Col>col</Col>
                    <Col>col</Col>
                    <Col>col</Col>
                    <Col>col</Col>
                  </Row>
                  <Row>
                    <Col xs={8}>xs=8</Col>
                    <Col xs={4}>xs=4</Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row>
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
  </Row>
  <Row>
    <Col xs={8}>xs=8</Col>
    <Col xs={4}>xs=4</Col>
  </Row>
</Container>
              `}
                  language="html"
                />
              </div>
              <h5 className="mt-5">Stacked to horizontal</h5>
              <hr />
              <p>
                Using a single set of{" "}
                <code className="highlighter-rouge">.col-sm-*</code> classes,
                you can create a basic grid system that starts out stacked and
                becomes horizontal at the small breakpoint (
                <code className="highlighter-rouge">sm</code>).
              </p>
              <div className="bd-example-row">
                <Container>
                  <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                  </Row>
                  <Row>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row>
    <Col sm={8}>sm=8</Col>
    <Col sm={4}>sm=4</Col>
  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container>
              `}
                  language="html"
                />
              </div>
              <h5 className="mt-5">Mix and match</h5>
              <hr />
              <p>
                Don’t want your columns to simply stack in some grid tiers? Use
                a combination of different classes for each tier as needed. See
                the example below for a better idea of how it all works.
              </p>
              <div className="bd-example-row">
                <Container>
                  <Row>
                    <Col xs={12} md={8}>
                      xs=12 md=8
                    </Col>
                    <Col xs={6} md={4}>
                      xl=6 md=4
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={4}>
                      xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                      xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                      xs=6 md=4
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>xs=6</Col>
                    <Col xs={6}>xs=6</Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row>
    <Col xs={12} md={8}>
      xs=12 md=8
    </Col>
    <Col xs={6} md={4}>
      xl=6 md=4
    </Col>
  </Row>
  <Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>
  <Row>
    <Col xs={6}>xs=6</Col>
    <Col xs={6}>xs=6</Col>
  </Row>
</Container>
              `}
                  language="html"
                />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Alignment</h5>
            </CardHeader>
            <CardBody>
              <p>
                Use flexbox alignment utilities to vertically and horizontally
                align columns.
              </p>
              <h5 className="mt-5">Vertical alignment</h5>
              <hr />
              <div className="bd-example-row bd-example-row-flex-cols">
                <Container>
                  <Row className="align-items-start">
                    <Col>One of three columns</Col>
                    <Col>One of three columns</Col>
                    <Col>One of three columns</Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>One of three columns</Col>
                    <Col>One of three columns</Col>
                    <Col>One of three columns</Col>
                  </Row>
                  <Row className="align-items-end">
                    <Col>One of three columns</Col>
                    <Col>One of three columns</Col>
                    <Col>One of three columns</Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row className="align-items-start">
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
  <Row className="align-items-center">
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
  <Row className="align-items-end">
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
</Container>
              `}
                  language="html"
                />
              </div>
              <h5 className="mt-5">Horizontal alignment</h5>
              <hr />
              <div className="bd-example-row">
                <Container>
                  <Row className="justify-content-start">
                    <Col xs={4}>One of two columns</Col>
                    <Col xs={4}>One of two columns</Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col xs={4}>One of two columns</Col>
                    <Col xs={4}>One of two columns</Col>
                  </Row>
                  <Row className="justify-content-end">
                    <Col xs={4}>One of two columns</Col>
                    <Col xs={4}>One of two columns</Col>
                  </Row>
                  <Row className="justify-content-around">
                    <Col xs={4}>One of two columns</Col>
                    <Col xs={4}>One of two columns</Col>
                  </Row>
                  <Row className="justify-content-between">
                    <Col xs={4}>One of two columns</Col>
                    <Col xs={4}>One of two columns</Col>
                  </Row>
                </Container>
                <Prism
                  code={`
<Container>
  <Row className="justify-content-start">
    <Col xs={4}>One of two columns</Col>
    <Col xs={4}>One of two columns</Col>
  </Row>
  <Row className="justify-content-center">
    <Col xs={4}>One of two columns</Col>
    <Col xs={4}>One of two columns</Col>
  </Row>
  <Row className="justify-content-end">
    <Col xs={4}>One of two columns</Col>
    <Col xs={4}>One of two columns</Col>
  </Row>
  <Row className="justify-content-around">
    <Col xs={4}>One of two columns</Col>
    <Col xs={4}>One of two columns</Col>
  </Row>
  <Row className="justify-content-between">
    <Col xs={4}>One of two columns</Col>
    <Col xs={4}>One of two columns</Col>
  </Row>
</Container>
              `}
                  language="html"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default BasicGrid

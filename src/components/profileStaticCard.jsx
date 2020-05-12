import React, { PureComponent } from 'react'
import { Card, CardBody, CardFooter, Row, Col } from 'reactstrap'

class ProfileStaticCard extends PureComponent {
  render() {
    const props = this.props
    const {
      onClickCover,
      onClickProfile,
      isProfileClickable,
      isCoverClickable
    } = props
    const fullName = <h3>{props.fullName}</h3>
    const username = <p>{props.username}</p>
    const description = <p>{props.description}</p>
    const cover = props.coverImage
    const profile = props.profileImage
    const dStatic = <h4>{props.design}</h4>
    const design = <span>Designs</span>
    const pStatic = <h4>{props.project}</h4>
    const project = <span>Projects</span>
    const dvStatic = <h4>{props.devlopment}</h4>
    const devlopment = <span>Devlopment</span>
    let cards
    if (props.card === 'middle') {
      cards = (
        <Card>
          <div className="widget-profile-card-1">
            <img
              onClick={onClickCover}
              className={`img-fluid img-thumbnail clickable banner`}
              src={cover}
              alt="card-style-1"
            />
            <div className="middle-user">
              <img
                onClick={onClickProfile}
                className={`img-fluid img-thumbnail clickable`}
                src={profile}
                alt="Profile-user"
              />
            </div>
          </div>
          <CardBody className="text-center">
            {fullName}
            {username}
            {description}
          </CardBody>
          <CardFooter className="bg-inverse">
            <Row className="text-center">
              <Col>
                {dStatic}
                {design}
              </Col>
              <Col>
                {pStatic}
                {project}
              </Col>
              <Col>
                {dvStatic}
                {devlopment}
              </Col>
            </Row>
          </CardFooter>
        </Card>
      )
    }
    if (props.card === 'body') {
      // need to make images clickable
      cards = (
        <Card className="widget-profile-card-2">
          <img className="img-fluid" src={cover} alt="card-style-1" />
          <CardBody className="text-center">
            <img
              className="img-fluid img-thumbnail img-radius user-img m-b-20 m-t-10"
              src={profile}
              alt="Profile-user"
            />
            {fullName}
            {username}
            {description}
          </CardBody>
        </Card>
      )
    }
    if (props.card === 'top') {
      // need to make images clickable
      cards = (
        <Card>
          <div className="widget-profile-card-3">
            <img className="img-fluid img-thumbnail" src={profile} alt="Profile-user" />
          </div>
          <CardBody className="text-center">
            {fullName}
            {username}
            {description}
          </CardBody>
          <CardFooter className="bg-inverse">
            <Row className="text-center">
              <Col>
                {dStatic}
                {design}
              </Col>
              <Col>
                {pStatic}
                {project}
              </Col>
              <Col>
                {dvStatic}
                {devlopment}
              </Col>
            </Row>
          </CardFooter>
        </Card>
      )
    }
    return cards
  }
}

export default ProfileStaticCard

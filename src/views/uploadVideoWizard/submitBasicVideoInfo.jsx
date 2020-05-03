import React, { Component, Fragment } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

export class SubmitBasicVideoInfo extends Component {
  render () {
    const { onChangeInput } = this.props
    return (
      <Fragment>
        <FormGroup>
          <Label for="videoTitle">Title</Label>
          <Input type="text" id="videoTitle" placeholder="Title" onChange={(event) => onChangeInput(event, 'Title')} />
        </FormGroup>
        <FormGroup>
          <Label for="videoTitle">Description</Label>
          <Input type="textarea" id="videoTitle" rows={3} onChange={(event) => onChangeInput(event, 'Description')} />
        </FormGroup>
      </Fragment>
    )
  }
}

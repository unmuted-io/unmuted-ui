import React, { Component, Fragment } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from 'reactstrap'
import DropzoneComponent from 'react-dropzone-component'
import InputMask from 'react-input-mask'
import ReactNumeric, { predefinedOptions } from 'react-numeric'
import { useHistory } from 'react-router-dom'

const FullCard = props => (
  <Col md={6}>
    <Card>
      <CardHeader>
        <h5>{props.title}</h5>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </Card>
  </Col>
)

class UploadVideo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoTitle: '',
      videoDescription: '',
      videoFile: null
    }
    this.djsConfig = {
      addRemoveLinks: false,
      acceptedFiles: 'video/mp4',
      autoProcessQueue: false,
      uploadprogress: 100
    }
    this.componentConfig = {
      iconFiletypes: ['.mp4'],
      showFiletypeIcon: true,
      postUrl: 'no-url'
    }

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')]

    // Simple callbacks work too, of course
    this.callback = () => console.log('Hello!')
    this.success = file => console.log('kylan uploaded', file)
    this.removedfile = file => console.log('removing...', file)
    this.addedfile = (file) => console.log('addedFile: ', file)
    this.dropzone = null
  }

  handlePost = async () => {
    const { history } = this.props
    const { videoFile, videoTitle, videoDescription } = this.state
    const formData = new FormData()
    formData.append('title', videoTitle)
    formData.append('description', videoDescription)
    formData.append('file', videoFile)
    const resp = await fetch('http://localhost:3333/videos', {
      method: 'POST',
      body: formData
    })
    if (!resp.ok) return
    const data = await resp.json()
    history.push(`/videos/${data.rand}`)
  }

  onChangeInput = (event, callback) => {
    this.setState({
      [`video${callback}`]: event.target.value
    })
  }

  render () {
    const eventHandlers = {
      init: dz => this.dropzone = dz,
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile,
      uploadprogress: (prog) => console.log('progress is: ', prog),
      addedfile: (file) => {
        console.log('addedFile2: ', file)
        this.setState({
          videoFile: file
        })
      }
    }
    return (
      <Fragment>
        <Row>
          <FullCard title="Upload Video">
            <FormGroup>
              <Label for="videoTitle">Title</Label>
              <Input
                type="text"
                id="videoTitle"
                placeholder="Title"
                onChange={(event) => this.onChangeInput(event, 'Title')}
              />
            </FormGroup>
            <FormGroup>
              <Label for="videoTitle">Description</Label>
              <Input
                type="textarea"
                id="videoTitle"
                rows={3}
                onChange={(event) => this.onChangeInput(event, 'Description')}
              />

            </FormGroup>
          </FullCard>
          <FullCard>
            <DropzoneComponent
              config={this.componentConfig}
              djsConfig={this.djsConfig}
              eventHandlers={eventHandlers}
            />
            <div className="text-center m-t-20">
              <Button color="primary" onClick={this.handlePost}>Upload Video</Button>
            </div>

          </FullCard>
        </Row>
      </Fragment>
    )
  }
}

export default UploadVideo

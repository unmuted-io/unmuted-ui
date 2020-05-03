import React, { Component, Fragment } from 'react'
import DropzoneComponent from 'react-dropzone-component'

export class UploadVideo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoFile: null,
    }
    this.djsConfig = {
      addRemoveLinks: false,
      acceptedFiles: 'video/mp4',
      autoProcessQueue: false,
      uploadprogress: 100,
    }
    this.componentConfig = {
      iconFiletypes: ['.mp4'],
      showFiletypeIcon: true,
      postUrl: 'no-url',
    }

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [() => console.log('File has been!'), () => console.log('dropped in!')]

    // Simple callbacks work too, of course
    this.callback = () => console.log('Hello!')
    this.success = (file) => console.log('kylan uploaded', file)
    this.removedfile = (file) => console.log('removing...', file)
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
      body: formData,
    })
    if (!resp.ok) return
    const data = await resp.json()
  }

  render () {
    const eventHandlers = {
      init: (dz) => (this.dropzone = dz),
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile,
      uploadprogress: (prog) => console.log('progress is: ', prog),
      addedfile: (file) => {
        console.log('addedFile2: ', file)
        this.props.setFile(file)
      },
    }

    return (
      <Fragment>
        <DropzoneComponent config={this.componentConfig} djsConfig={this.djsConfig} eventHandlers={eventHandlers} />
      </Fragment>
    )
  }
}

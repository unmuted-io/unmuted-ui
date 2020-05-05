import React, { Component } from 'react'
import { connect } from 'react-redux'
import { State } from '../../types'
import { DropzoneComponent } from 'react-dropzone-component'
import Cropper from 'react-cropper'
import previewImage from '../../assets/images/light-box/l1.jpg'
import 'cropperjs/dist/cropper.css'

const { REACT_APP_API_BASE_URL } = process.env

const ASPECT_RATIOS = {
  profile: 1,
  cover: 3 // width: height
}

interface AccountImageUploaderProps {
  type: string
}

interface AccountImageUploaderState {
  image: string,
  dataX: number,
  dataY: number,
  dataHeight: number,
  dataWidth: number,
  dataRotate: number,
  dataScaleX: number,
  dataScaleY: number,
  cropperHeight: number,
  cropperWidth: number,
  step: number,
  error: string
}

class AccountImageUploader extends Component<AccountImageUploaderProps, AccountImageUploaderState> {
  componentConfig: object
  djsConfig: object
  addedFile: (file: any) => void
  dropzone: any

  constructor(props) {
    super(props)
    const { type, jwtToken } = props
    this._crop = this._crop.bind(this)
    this.state = {
      image: previewImage,
      dataX: 0,
      dataY: 0,
      cropperHeight: 0,
      cropperWidth: 0,
      dataHeight: 0,
      dataWidth: 0,
      dataRotate: 0,
      dataScaleX: 0,
      dataScaleY: 0,
      step: 0,
      error: ''
    }
    this.componentConfig = {
      iconFiletypes: ['.jpg', '.jpeg'],
      showFiletypeIcon: true,
      postUrl: `${REACT_APP_API_BASE_URL}/user/image/${type}`,
    }
    this.djsConfig = {
      addRemoveLinks: false,
      acceptedFiles: 'image/jpg,image/jpeg',
      autoProcessQueue: true,
      uploadprogress: 100,
      maxFiles: 1,
      url: `${REACT_APP_API_BASE_URL}/user/image/${type}`,
      headers: { "Authorization": `Bearer ${jwtToken}` },
      maxfilesreached: () => {
        console.log('maxfilesreached')
      },
      complete: async (data) => {
        const maxHeight = 600
        const maxWidth = 600
        console.log('data: ', data)
        const response = JSON.parse(data.xhr && data.xhr.response)
        if (data.xhr.status === 200) {
          const { type, source } = response
          let { height, width } = data
          const heightRatio = height / maxHeight
          const widthRatio = width / maxWidth
          if (heightRatio > widthRatio) {
            height = height / heightRatio
            width = width / heightRatio
          } else {
            height = height / widthRatio
            width = width / widthRatio
          }
          this.setState({
            image: data.dataURL,
            step: 1,
            cropperHeight: height,
            cropperWidth: width
          })
        }
      }
    }
  }

  _crop (event){
    // image in dataUrl
    // @ts-ignore
    this.setState({
      dataX: Math.round(event.detail.x),
      dataY: Math.round(event.detail.y),
      dataHeight: Math.round(event.detail.height),
      dataWidth: Math.round(event.detail.width),
      dataRotate: Math.round(event.detail.rotate),
      dataScaleX: Math.round(event.detail.scaleX),
      dataScaleY: Math.round(event.detail.scaleY)
    })
    console.log('_cropped triggered')
  }

  render() {
    const { type } = this.props
    const { image, step, cropperHeight, cropperWidth } = this.state
    const eventHandlers = {
      init: (dz) => (this.dropzone = dz),
      uploadprogress: (prog) => console.log('progress is: ', prog),
    }

    return (
      <div>
        <div style={{ display: (step === 0) ? 'block' : 'none'}}>
          <DropzoneComponent
            config={this.componentConfig}
            djsConfig={this.djsConfig}
            eventHandlers={eventHandlers}
          />
        </div>
        <div style={{ display: (step === 1) ? 'block' : 'none', height: cropperHeight, width: cropperWidth }}>
          <Cropper
            ref='cropper'
            src={image}
            style={{ height: cropperHeight, width: cropperWidth }}
            // Cropper.js options
            aspectRatio={ASPECT_RATIOS[type]}
            guides={true}
            crop={this._crop.bind(this)}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
    jwtToken: state.auth.account.token
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountImageUploader)

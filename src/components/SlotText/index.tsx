import React, { PureComponent } from 'react'

interface SlotTextProps {
  values: string[]
  rotation: string,
  className?: string,
  style?: object
}

export default class SlotText extends PureComponent<SlotTextProps> {
  componentWillReceiveProps = (nextProps: SlotTextProps) => {
    const { values } = this.props
    // if upwards
    if (nextProps.values[1] === values[2]) {

    } else { // if downwards

    }
  }

  render() {
    const { values, rotation, className, style } = this.props
    return (
      <div className={`container ${className}`} style={style}>
        <div className={`values-wrap ${rotation}`}>
          <span className="top-value value">{values[2]}</span>
          <span className="center-value value">{values[1]}</span>
          <span className="bottom-value value">{values[0]}</span>
        </div>
      </div>
    )
  }
}

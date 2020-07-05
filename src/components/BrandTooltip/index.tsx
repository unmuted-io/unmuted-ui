import React, { PureComponent } from 'react'
import Tooltip from '../Tooltip'

interface TooltipProps {
  className?: string,
  style?: object
}

class TooltipComponent extends PureComponent<TooltipProps> {
  render() {
    const { style, className } = this.props
    return (
      <Tooltip style={style} className={className}>
        This is my branding info
      </Tooltip>
    )
  }
}

export default TooltipComponent

import React, { PureComponent } from 'react'

interface TooltipProps {
  className?: string,
  style?: object,
  children: any
}

class TooltipComponent extends PureComponent<TooltipProps> {
  render() {
    const { style, className } = this.props
    return (
      <div style={style} className={className}>
        {this.props.children}
      </div>
    )
  }
}

export default TooltipComponent

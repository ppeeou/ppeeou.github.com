
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DefaultBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  color: #333;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-color: #eee;
  background-image: linear-gradient(-180deg, #fcfcfc 0%, #eee 90%);
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;

  :active{
    background-color: #e9ecef;
    background-image: none;
    border-color: rgba(27, 31, 35, 0.35);
    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
  }
`

const ActiveBtn = DefaultBtn.extend` 
  background-color: #269f42;
  background-image: linear-gradient(-180deg, #2fcb53 0%, #269f42 90%);
  background-position: -.5em;
  border-color: rgba(27,31,35,0.5);
  color:#fff;
  :active{
    background-color: #279f43;
    background-image: none;
    border-color: rgba(27,31,35,0.5);
    box-shadow: inset 0 0.15em 0.3em rgba(27,31,35,0.15);
  }
`

const PriorBtn = DefaultBtn.extend`
background-color: #0366d6;
background-image: linear-gradient(-180deg, #0366f6 0%, #0366d6 90%);
background-position: -.5em;
border-color: rgba(27,31,35,0.5);
color:#fff;
  :active{
    background-color: #0366d1;
    background-image: none;
    border-color: rgba(27,31,35,0.5);
    box-shadow: inset 0 0.15em 0.3em rgba(27,31,35,0.15);
  }
`

const buttonTypes = {
  default: 'default',
  active: 'active',
  prior: 'prior',
}

const Button = ({ type = 'default', children, ...props }) => {
  if (type === buttonTypes.default) {
    return (
      <DefaultBtn {...props}>{children}</DefaultBtn>
    )
  } else if (type === buttonTypes.active) {
    return (
      <ActiveBtn {...props}>{children}</ActiveBtn>
    )
  }

  return (
    <PriorBtn {...props}>{children}</PriorBtn>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any
}

Button.defaultProps = {
  type: buttonTypes.default
}

export default Button

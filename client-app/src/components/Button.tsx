import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

const Button = (props: any) => {
  const {
    value,
    className,
    color,
  } = props
  return (
    <MDBBtn
      className={className}
      style={{ backgroundColor: color }}
    >
      {value}
    </MDBBtn>
  )
}

export default Button
import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

const Button = (props: any) => {
  return (
    <MDBBtn>{props.value}</MDBBtn>
  )
}

export default Button
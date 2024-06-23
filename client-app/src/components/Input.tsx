import { MDBInput } from "mdb-react-ui-kit"
import React from "react"

const Input = (props: any) => {
  const {
    id,
    type,
    value,
    disabled,
    placeholder,
    onChange
  } = props

  return (
    <MDBInput
      type={type}
      name={id}
      id={id}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      size="large"
      onChange={onChange}
    />
  )
}

export default Input
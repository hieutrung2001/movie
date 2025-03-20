import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthRequired = (props) => {
  const {
    item
  } = props
  if (sessionStorage.getItem('_token')) {
    return item
  }
  return <Navigate to={'/admin/login'} />
}

export default AuthRequired
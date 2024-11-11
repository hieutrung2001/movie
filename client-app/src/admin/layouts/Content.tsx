import React, { Fragment } from 'react'

const Content = (props: any) => {
  const {
    children
  } = props 
  console.log('content...')

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Content
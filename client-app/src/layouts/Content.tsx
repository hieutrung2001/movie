import React from 'react'

const Content = (props: any) => {
  const {
    children
  } = props
  return (
    <div className="container p-5">
      {children}
    </div>
  )
}

export default Content
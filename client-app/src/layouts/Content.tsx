import React from 'react'

const Content = (props: any) => {
  const {
    content
  } = props
  return (
    <div className="container p-5">
      abc
      {content}
    </div>
  )
}

export default Content
import React from 'react'

const Heading = (props) => {
  return (
    <props.as className={`text-white font-oswald ${props.className}`}>{props.heading}</props.as>
  )
}

export default Heading
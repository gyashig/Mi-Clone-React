import React from 'react'
import "../styles/Heading.css"
const Headings = ({text}) => {
  return (
    <div className="heading">
        <div></div>
        <p>{text}</p>
        <div></div>
    </div>
  )
}

export default Headings
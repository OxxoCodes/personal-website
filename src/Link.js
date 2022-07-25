import React from "react"
import "./Link.css"

const Link = ({url, text}) => {
  return (
    <a className="link" href={url} target="_blank" rel="noopener noreferrer">{text}</a>
  )
}

export default React.memo(Link);
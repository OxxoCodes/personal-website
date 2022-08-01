import React from "react"

const Link = ({url, text}) => {
  return (
    <a className="link" href={url} target="_blank" rel="noopener noreferrer" style={{color:"#f45b69"}}>{text}</a>
  )
}

export default React.memo(Link);
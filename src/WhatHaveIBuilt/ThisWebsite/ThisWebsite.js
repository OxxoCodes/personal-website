import React from "react"
import {ThisWebsiteWrapper} from "./ThisWebsiteWrapper";
import Link from "../../Utils/Link"

const ThisWebsite = ({filename}) => {
  return (
    <ThisWebsiteWrapper filename={filename}>
      <div className="text">
        <h1>This Website</h1>
        <p>More info coming soon!</p>
      </div>
      <div className="image" />
    </ThisWebsiteWrapper>
  )
}

export default ThisWebsite
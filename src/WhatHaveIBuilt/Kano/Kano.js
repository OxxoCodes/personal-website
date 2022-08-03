import React from "react"
import {KanoWrapper} from "./KanoWrapper";
import Link from "../../Utils/Link"

const Kano = ({filename}) => {
  return (
    <KanoWrapper filename={filename}>
      <div className="text">
        <h1>Kano</h1>
        <p>More info coming soon!</p>
      </div>
      <div className="image" />
      </KanoWrapper>
  )
}

export default Kano
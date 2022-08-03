import React from "react"
import {PiCadeWrapper} from "./PiCadeWrapper";
import Link from "../../Utils/Link"

const PiCade = ({filename}) => {
  return (
    <PiCadeWrapper filename={filename}>
      <div className="text">
        <h1>Pi-Cade</h1>
        <p>More info coming soon!</p>
      </div>
      <div className="image" />
    </PiCadeWrapper>
  )
}

export default PiCade
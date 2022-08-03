import React from "react"
import {VrfeWrapper} from "./VrfeWrapper";
import Link from "../../Utils/Link"

const Vrfe = ({filename}) => {
  return (
    <VrfeWrapper filename={filename}>
      <div className="text">
        <h1>VRFE</h1>
        <p>More info coming soon!</p>
      </div>
      <div className="image" />
    </VrfeWrapper>
  )
}

export default Vrfe
import React from "react"
import {IEAWrapper} from "./IEAWrapper";
import Link from "../../Utils/Link"

const IEA = ({filename}) => {
  return (
    <IEAWrapper filename={filename}>
      <div className="text">
        <h1>Hydrogen</h1>
        <p>More info coming soon!</p>
      </div>
      <div className="image" />
    </IEAWrapper>
  )
}

export default IEA
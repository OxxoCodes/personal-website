import React from "react"
import {MarketBotWrapper} from "./MarketBotWrapper";
import Link from "../../Utils/Link"

const MarketBot = ({filename}) => {
  return (
    <MarketBotWrapper filename={filename}>
      <div className="text">
        <h1>MarketBot</h1>
        <p>More info coming soon!</p>
      </div>
      <div className="image" />
    </MarketBotWrapper>
  )
}

export default MarketBot
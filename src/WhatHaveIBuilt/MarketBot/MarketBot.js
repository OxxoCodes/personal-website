import React from "react"
import {MarketBotWrapper} from "./MarketBotWrapper";
import Link from "../../Utils/Link"

const MarketBot = ({filename}) => {
  return (
    <MarketBotWrapper filename={filename}>
      <div className="text">
        <h1>MarketBot</h1>
        <p>MarketBot is a marketplace application built around the Discord platform.</p>
        <p>Built in 24 hours in a team of 3 during the 2020 Clemson "HelloWorld" Hackathon, MarketBot allows users to
           list items for sale (providing images, contact information, a description, etc.), view items that are currently
           for sale, and get contact information from the previous owner.</p>
        <p>One strength that this tool offers is, since it is a bot with a centralized database that can be added to
           multiple servers, the application can be used in several different servers while still sharing the same listings
           across each server. Or, if someone would like to have their listings isolated to their server, they can
           self-host with very little tension thanks to the program's simplicity and few dependencies.</p>
        <p>You can access the source code to MarketBot <Link url={"https://github.com/OxxoCodes/MarketBot"} text={"here"} />.</p>
      </div>
      <div className="image" />
    </MarketBotWrapper>
  )
}

export default MarketBot
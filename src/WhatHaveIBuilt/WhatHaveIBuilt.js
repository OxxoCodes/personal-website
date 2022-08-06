import React from "react";
import Card from "../Card/Card"
import Hydrogen from "./Hydrogen/Hydrogen";
import DriveMan from "./DriveMan/DriveMan";
import Kano from "./Kano/Kano";
import ThisWebsite from "./ThisWebsite/ThisWebsite";
import IEA from "./IEA/IEA";
import PiCade from "./PiCade/PiCade";
import Vrfe from "./Vrfe/Vrfe";
import MarketBot from "./MarketBot/MarketBot";

const WhatHaveIBuilt = () => {
  const data = [
    [
      {
        header: "Hydrogen",
        previewBody: "A portfolio optimization and backtesting application",
        body: <Hydrogen filename={"Hydrogen.jpg"}/>,
        image: "Hydrogen.jpg"
      },
      {
        header: "DriveMan",
        previewBody: "An application for managing files stored on Google Drive",
        body: <DriveMan filename={"DriveMan.jpg"} />,
        image: "DriveMan.jpg"
      },
      {
        header: "Kano",
        previewBody: "A CHIP-8 Interpreter",
        body: <Kano filename={"Kano.jpg"} />,
        image: "Kano.jpg"
      },
      {
        header: "This Website",
        previewBody: "Take a look around!",
        body: <ThisWebsite filename={"Me.jpg"} />,
        image: "Me.jpg"
      }
    ],
    [
      {
        header: "Internal Enterprise Application",
        previewBody: "An internal web application at Ally Financial, built using React",
        body: <IEA filename={"Ally.jpg"} />,
        image: "Ally.jpg"
      },
      {
        header: "Pi-Cade",
        previewBody: "A completely homemade from-scratch full-size arcade cabinet, built using a Raspberry Pi 4",
        body: <PiCade filename={"Arcade.jpg"} />,
        image: "Arcade.jpg"
      },
      {
        header: "VRFE",
        previewBody: "A multi-platform, mobile VR Grand Canyon exploration simulation",
        body: <Vrfe filename={"VRFE.jpg"} />,
        image: "VRFE.jpg"
      },
      {
        header: "MarketBot",
        previewBody: "A Discord-based sales application",
        body: <MarketBot filename={"MarketBot.jpg"} />,
        image: "MarketBot.jpg"
      }
    ]
  ]

  return (
    <div className="WhoAmI" style={{display:'flex', flexDirection:'column',justifyContent:'flex-end'}}>
      <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
        <h1>💻 What Have I Built?</h1>
      </div>
      <div style={{display: "flex", justifyContent:"space-around", flexDirection:"column"}}>
        {
          data.map((row) =>
            <div style={{display:"flex", justifyContent:'space-around', flexWrap: 'wrap'}}>
              {
                row.map((c, index) =>
                  <Card header={c.header} previewBody={c.previewBody} body={c.body} image={c.image} cid={index} />
                )
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default WhatHaveIBuilt;
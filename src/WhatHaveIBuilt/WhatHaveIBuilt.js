import React from "react";
import Card from "../Card/Card"

const WhatHaveIBuilt = () => {
  const data = [
    [
      {
        header: "Hydrogen",
        previewBody: "A portfolio optimization and backtesting application",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "Hydrogen.jpg"
      },
      {
        header: "DriveMan",
        previewBody: "An application for managing files stored on Google Drive",
        image: "DriveMan.jpg"
      },
      {
        header: "Kano",
        previewBody: "A CHIP-8 Interpreter",
        image: "Kano.jpg"
      },
      {
        header: "This Website",
        previewBody: "Take a look around!",
        image: "Me.jpg"
      }
    ],
    [
      {
        header: "Internal Enterprise Application",
        previewBody: "An internal web application at Ally Financial, built using React",
        image: "Ally.jpg"
      },
      {
        header: "Pi-Cade",
        previewBody: "A completely homemade from-scratch full-size arcade cabinet, built using a Raspberry Pi 4",
        image: "Arcade.jpg"
      },
      {
        header: "VRFE",
        previewBody: "A multi-platform, mobile VR Grand Canyon exploration simulation",
        image: "VRFE.jpg"
      },
      {
        header: "MarketBot",
        previewBody: "A Discord-based sales application",
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
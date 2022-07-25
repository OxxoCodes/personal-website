import React from "react";
import Card from "./Card"

const WhatHaveIBuilt = () => {
  return (
    <div className="WhoAmI" style={{display:'flex', flexDirection:'column',justifyContent:'flex-end'}}>
      <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
        <h1>💻 What Have I Built?</h1>
      </div>
      <div style={{display: "flex", justifyContent:"center", flexDirection:"column"}}>
        <div style={{display:"flex", justifyContent:'space-around', flexWrap: 'wrap'}}>
          <Card header={"Hydrogen"} body={"A portfolio optimization and backtesting application"} image={"Hydrogen.png"}/>
          <Card header={"DriveMan"} body={"An application for managing files stored on Google Drive"} image={"DriveMan.png"}/>
          <Card header={"Kano"} body={"A CHIP-8 Interpreter"} image={"Kano.png"}/>
          <Card header={"This Website"} body={"Take a look around!"} image={"Me.png"}/>
        </div>
        <div style={{display:"flex", justifyContent:'space-around', flexWrap: 'wrap'}}>
          <Card header={"Internal Enterprise Application"} body={"An internal web application at Ally Financial, built using React"} image={"Ally.png"}/>
          <Card header={"Arcade Cabinet"} body={"A completely homemade from-scratch full-size arcade cabinet, built using a Raspberry Pi 4"} image={"Arcade.png"}/>
          <Card header={"VRFE"} body={"A multi-platform, mobile VR Grand Canyon exploration simulation"} image={"VRFE.png"}/>
          <Card header={"MarketBot"} body={"A Discord-based sales application"} image={"MarketBot.png"}/>
        </div>
      </div>
    </div>
  )
}

export default WhatHaveIBuilt;
import React from "react";

const WhatHaveIBuilt = () => {
  return (
    <div className="WhoAmI" style={{display:'flex', justifyContent:'flex-end'}}>
      <div style={{display:'flex', flexDirection:'column', textAlign:'right'}}>
        <h1>💻 What Have I Made?</h1>
        <p>Hydrogen - historial quantitative stock analysis and portfolio optimization</p>
        <p>DriveMan - file manager for Google Drive</p>
        <p>Arcade Cabinet - homemade cabinet built using a Raspberry Pi 4</p>
        <p>This website</p>
      </div>
    </div>
  )
}

export default WhatHaveIBuilt;
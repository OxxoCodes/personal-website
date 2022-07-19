import React from "react";
import Avatar from "@mui/material/Avatar";

const Hello = () => {
  return (
    <div className="Hello" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <div style={{width:"100%", display:'flex', justifyContent:'center'}} className="avatars">
        <Avatar src="/images/Kid.png" sx={{width:75, height:75}} className="avatar-1"/>
        <Avatar src="/images/1337.png" sx={{width:150, height:150}} className="avatar-2"/>
        <Avatar src="/images/Chair.png" sx={{width:225, height:225}} className="avatar-3"/>
        <Avatar src="/images/Me.png" sx={{width:300, height:300}} className="avatar-4"/>
        <Avatar src="/images/Skiing.png" sx={{width:225, height:225}} className="avatar-5"/>
        <Avatar src="/images/TWB.png" sx={{width:150, height:150}} className="avatar-6"/>
        <Avatar src="/images/Doggo.png" sx={{width:75, height:75}} className="avatar-7"/>
      </div>

      <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
        <h1 style={{marginBottom:"5px"}}>Hi, I'm Nathan! 👋</h1>
        <h3 style={{marginTop:"5px"}}>I'm here to write code and chew bubble gum.</h3>
      </div>
    </div>
  );
}

export default Hello;
import React from "react";
import Avatar from "@mui/material/Avatar";
import {motion} from "framer-motion"

const Hello = () => {
  return (
    <div className="Hello" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <div style={{width:"100%", height:"400px", display:'flex', justifyContent:'center'}} className="avatars">
        <motion.div animate={{y:20+350+112.5}} bounce={2} transition={{delay:0.7 + 0.45}}>
          <Avatar src="/images/Kid.png" sx={{width:75, height:75}} className="avatar"/>
        </motion.div>
        <motion.div animate={{y:20+350+75}} bounce={2} transition={{delay:0.7 + 0.3}}>
          <Avatar src="/images/1337.png" sx={{width:150, height:150}} className="avatar"/>
        </motion.div>
        <motion.div animate={{y:20+350+37.5}} bounce={2} transition={{delay:0.7 + 0.15}}>
          <Avatar src="/images/Chair.png" sx={{width:225, height:225}} className="avatar"/>
        </motion.div>
        <motion.div animate={{y:20+350}} bounce={2} transition={{delay:0.7}}>
          <Avatar src="/images/Me.png" sx={{width:300, height:300}} className="avatar"/>
        </motion.div>
        <motion.div animate={{y:20+350+37.5}} bounce={2} transition={{delay:0.7 + 0.15}}>
          <Avatar src="/images/Skiing.png" sx={{width:225, height:225}} className="avatar"/>
        </motion.div>
        <motion.div animate={{y:20+350+75}} bounce={2} transition={{delay:0.7 + 0.3}}>
          <Avatar src="/images/TWB.png" sx={{width:150, height:150}} className="avatar"/>
        </motion.div>
        <motion.div animate={{y:20+350+112.5}} bounce={2} transition={{delay:0.7 + 0.45}}>
          <Avatar src="/images/Doggo.png" sx={{width:75, height:75}} className="avatar"/>
        </motion.div>
      </div>

      <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
        <h1 style={{marginBottom:"5px"}}>Hi, I'm Nathan! 👋</h1>
        <h3 style={{marginTop:"5px"}}>I'm here to write code and chew bubble gum.</h3>
      </div>
    </div>
  );
}

export default Hello;
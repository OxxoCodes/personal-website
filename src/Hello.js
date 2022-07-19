import React from "react";
import Avatar from "@mui/material/Avatar";
import {motion} from "framer-motion"
import {Paper} from "@mui/material";

const AnimatedAvatar = ({filename, size, yPos, xPos, delay}) => (
    <motion.div className="avatar"
                style={{x:xPos.toString()+"px", width:size, height:size}}
                animate={{y:yPos, transition:{delay:delay}}} bounce={2} whileHover={{scale:1.05}}>
      <Paper sx={{borderRadius:"50%", backgroundColor:"transparent"}} elevation={3}>
        <Avatar src={`/images/${filename}`} sx={{width:size, height:size}} />
      </Paper>
    </motion.div>
)

const Hello = () => {
  const padding = 7;

  return (
    <div className="Hello" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <div style={{width:"100%", height:"300px", display:'flex', justifyContent:'center'}} className="avatars">
        <AnimatedAvatar filename="Kid.png" size={75} yPos={350+20+112.5}    xPos={-150-225-150-37.5-(3*padding)} delay={0.7+0.45} />
        <AnimatedAvatar filename="1337.png" size={150} yPos={350+20+75}     xPos={-150-225-75-(2*padding)} delay={0.7+0.3} />
        <AnimatedAvatar filename="Chair.png" size={225} yPos={350+20+37.5}  xPos={-150-112.5-padding} delay={0.7+0.15} />
        <AnimatedAvatar filename="Me.png" size={300} yPos={350+20}          xPos={0} delay={0.7} />
        <AnimatedAvatar filename="Skiing.png" size={225} yPos={350+20+37.5} xPos={150+112.5+padding} delay={0.7+0.15} />
        <AnimatedAvatar filename="TWB.png" size={150} yPos={350+20+75}      xPos={150+225+75+(2*padding)} delay={0.7+0.3} />
        <AnimatedAvatar filename="Doggo.png" size={75} yPos={350+20+112.5}  xPos={150+225+150+37.5+(3*padding)} delay={0.7+0.45} />
      </div>

      <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
        <h1 style={{marginBottom:"5px"}}>Hi, I'm Nathan! 👋</h1>
        <h3 style={{marginTop:"5px"}}>I'm here to write code and chew bubble gum.</h3>
      </div>
    </div>
  );
}

export default Hello;
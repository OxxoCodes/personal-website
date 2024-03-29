import React from "react"
import {motion} from "framer-motion";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

const AnimatedAvatar = ({filename, size, yPos, xPos, delay}) => (
  <motion.div className="avatar"
              style={{position:'relative', x:xPos.toString()+"px", width:size, height:size, borderRadius:"50%"}}
              animate={{y:yPos, transition:{delay:delay}}} bounce={2} whileHover={{scale:1.05}}>
    <Paper sx={{borderRadius:"50%", backgroundColor:"transparent"}} elevation={3}>
      <Avatar src={`/images/${filename}`} sx={{width:size, height:size}} />
    </Paper>
  </motion.div>
)

const Avatars = () => {
  return (
    <div style={{maxWidth:"100%", height:'350px', display:'flex', justifyContent:'center'}} className="avatars">
      <AnimatedAvatar filename="1337.jpg" size={75} yPos={350+20+112.5}    xPos={-46.2} delay={0.7+0.45} />
      <AnimatedAvatar filename="Cactus.jpg" size={150} yPos={350+20+75}     xPos={-35} delay={0.7+0.3} />
      <AnimatedAvatar filename="Chair.jpg" size={225} yPos={350+20+37.5}  xPos={-20} delay={0.7+0.15} />
      <AnimatedAvatar filename="Me.jpg" size={300} yPos={350+20}          xPos={0} delay={0.7} />
      <AnimatedAvatar filename="Skiing.jpg" size={225} yPos={350+20+37.5} xPos={20} delay={0.7+0.15} />
      <AnimatedAvatar filename="TWB.jpg" size={150} yPos={350+20+75}      xPos={35} delay={0.7+0.3} />
      <AnimatedAvatar filename="Doggo.jpg" size={75} yPos={350+20+112.5}  xPos={46.2} delay={0.7+0.45} />
    </div>
  )
}

export default React.memo(Avatars);
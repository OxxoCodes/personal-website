import React from "react";
import Avatar from "@mui/material/Avatar";
import {motion} from "framer-motion"
import Paper from "@mui/material/Paper"
import Link from "../Utils/Link";

const AnimatedAvatar = ({filename, size, yPos, xPos, delay}) => (
    <motion.div className="avatar"
                style={{position:'relative', x:xPos.toString()+"px", width:size, height:size, borderRadius:"50%"}}
                animate={{y:yPos, transition:{delay:delay}}} bounce={2} whileHover={{scale:1.05}}>
      <Paper sx={{borderRadius:"50%", backgroundColor:"transparent"}} elevation={3}>
        <Avatar src={`/images/${filename}`} sx={{width:size, height:size}} />
      </Paper>
    </motion.div>
)

const Hello = () => {
  return (
    <div className="Hello" style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <div style={{maxWidth:"100%", height:'350px', display:'flex', justifyContent:'center'}} className="avatars">
        <AnimatedAvatar filename="1337.jpg" size={75} yPos={350+20+112.5}    xPos={-46.2} delay={0.7+0.45} />
        <AnimatedAvatar filename="Cactus.jpg" size={150} yPos={350+20+75}     xPos={-35} delay={0.7+0.3} />
        <AnimatedAvatar filename="Chair.jpg" size={225} yPos={350+20+37.5}  xPos={-20} delay={0.7+0.15} />
        <AnimatedAvatar filename="Me.jpg" size={300} yPos={350+20}          xPos={0} delay={0.7} />
        <AnimatedAvatar filename="Skiing.jpg" size={225} yPos={350+20+37.5} xPos={20} delay={0.7+0.15} />
        <AnimatedAvatar filename="TWB.jpg" size={150} yPos={350+20+75}      xPos={35} delay={0.7+0.3} />
        <AnimatedAvatar filename="Doggo.jpg" size={75} yPos={350+20+112.5}  xPos={46.2} delay={0.7+0.45} />
      </div>

      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center'}}>
        <h1>Hi, I'm Nathan! 👋</h1>
        <p>I'm a driven college student with a passion for nearly anything code.</p>
        <p>I've been developing software for nearly a decade, and have dabbled in topics ranging from Web Development to Pentesting to Quantitative Historical Stock Analysis.</p>
        <p>If there is code to be written, I will write it.</p>
        <p>I'm also an Eagle Scout, an <Link url="https://www.instagram.com/oxxodraws/" text="artist"/>, a runner, and a retro games and hardware enthusiast.</p>
        <p>You can download my resume <Link url="Nathan Brown Resume.pdf" text="here"/>.</p>
      </div>
    </div>
  );
}

export default Hello;
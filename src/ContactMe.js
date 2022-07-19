import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {IconButton} from "@mui/material";
import {motion} from 'framer-motion'

const ContactMe = () => {
  return (
    <div className="ContactMe" style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
      <motion.div whileHover={{scale:1.3}}>
        <IconButton href="https://github.com/OxxoCodes" target="_blank" rel="noopener noreferrer" sx={{color:'white'}}>
          <GitHubIcon />
        </IconButton>
      </motion.div>
      <motion.div whileHover={{scale:1.3}}>
        <IconButton href="https://www.linkedin.com/in/nathanmbro/" target="_blank" rel="noopener noreferrer" sx={{color:'white'}}>
          <LinkedInIcon />
        </IconButton>
      </motion.div>
      <motion.div whileHover={{scale:1.3}}>
        <IconButton href="mailto:nathanmbrown@outlook.com" target="_blank" rel="noopener noreferrer" sx={{color:'white'}}>
          <EmailIcon />
        </IconButton>
      </motion.div>
    </div>
  )
}

export default ContactMe;
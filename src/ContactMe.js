import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {IconButton} from "@mui/material";

const ContactMe = () => {
    return (
        <div className="ContactMe" style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>

          <IconButton href="https://github.com/OxxoCodes" target="_blank" rel="noopener noreferrer" sx={{color:'white'}}>
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/nathanmbro/" target="_blank" rel="noopener noreferrer" sx={{color:'white'}}>
            <LinkedInIcon />
          </IconButton>
          <IconButton href="mailto:nathanmbrown@outlook.com" target="_blank" rel="noopener noreferrer" sx={{color:'white'}}>
            <EmailIcon />
          </IconButton>
        </div>
    )
}

export default ContactMe;
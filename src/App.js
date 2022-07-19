import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";

import Hello from "./Hello";
import WhoAmI from "./WhoAmI";
import WhereAmI from "./WhereAmI";
import WhatDoIDo from "./WhatDoIDo";
import ContactMe from "./ContactMe";
import WhatHaveIBuilt from "./WhatHaveIBuilt";
import "./App.css"

function App() {
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="AppWrapper" style={{'display': 'flex', 'flexDirection':'column', backgroundColor:"#282a36", color:"#F7F9F7", padding:"50px", overflowX:'hidden'}}>
      <motion.div className="scroll-bar" style={{scaleX}}/>
      <Hello />
      <WhoAmI />
      <WhereAmI />
      <WhatDoIDo />
      <WhatHaveIBuilt />
      <ContactMe />
    </div>
  );
}

export default App;

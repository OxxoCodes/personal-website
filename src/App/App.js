import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";

import Avatars from "../Avatars/Avatars"
import Hello from "../Hello/Hello";
import WhereAmI from "../WhereAmI/WhereAmI";
import WhatDoIDo from "../WhatDoIDo/WhatDoIDo";
import ContactMe from "../ContactMe/ContactMe";
import WhatHaveIBuilt from "../WhatHaveIBuilt/WhatHaveIBuilt";
import "./App.css"

function App() {
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="AppWrapper">
      <motion.div className="scroll-bar" style={{scaleX}} />
      <Avatars />
      <Hello />
      <WhereAmI />
      <WhatDoIDo />
      <WhatHaveIBuilt />
      <ContactMe />
    </div>
  );
}

export default App;

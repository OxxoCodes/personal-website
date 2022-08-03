import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";

import Hello from "../Hello/Hello";
import WhoAmI from "../WhoAmI/WhoAmI";
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
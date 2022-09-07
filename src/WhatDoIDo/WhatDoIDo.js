import React from "react";
import Typing from "../Utils/Typing"

const WhatDoIDo = () => {
  return (
    <div className="WhoAmI" style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
      <h1>What Do I Do? 📝</h1>
      <Typing text={["React", "JavaScript", "Java", "Python", "C/C++", "C#", "Teach", "Research", "Virtual Reality", "Binary Exploitation", "Reverse Engineering", "Unity", "TensorFlow"]}/>
      <p>I learn. I work fast. I write quality, comprehensible code.</p>
      <p>Currently a security analyst at Clemson University's Cybersecurity Operations Center.</p>
      <p>Doing NLP and NER model optimization for Giant Oak's GOSTCrawl through Clemson's Fall 2022 Capstone Program.</p>
      <p>Previous a frontend developer at Ally Financial, a VR research assistant, and a teaching assistant.</p>
    </div>
  )
}

export default React.memo(WhatDoIDo);
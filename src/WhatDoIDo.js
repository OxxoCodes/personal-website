import React from "react";
import Typing from "./Typing"

const WhatDoIDo = () => {
  return (
    <div className="WhoAmI" style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
      <h1>What Do I Do? 📝</h1>
      <Typing text={["React", "JavaScript", "Java", "Python", "C/C++", "C#", "Teach", "Research", "Virtual Reality", "Binary Exploitation", "Reverse Engineering", "Unity", "TensorFlow"]}/>
      <p>I learn. I work fast. I write quality, comprehensible code.</p>
      <p>Currently doing web development at Ally Financial.</p>
    </div>
  )
}

export default WhatDoIDo;
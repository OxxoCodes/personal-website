import React from "react";
import Link from "../Utils/Link";

const Hello = () => {
  return (
    <div className="Hello">
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
        <h1>Hi, I'm Nathan! 👋</h1>
        <p>I'm a driven college student with a passion for nearly anything code.</p>
        <p>I've been developing software for nearly a decade, and have dabbled in topics ranging from Web Development to Pentesting to Quantitative Historical Stock Analysis.</p>
        <p>If there is code to be written, I will write it.</p>
        <p>I'm also an Eagle Scout, an artist, a runner, and a retro games and hardware enthusiast.</p>
        <p>You can download my resume <Link url="Nathan Brown Resume.pdf" text="here"/>.</p>
      </div>
    </div>
  );
}

export default React.memo(Hello);
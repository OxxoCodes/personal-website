import React from "react"
import BackCardWrapper from "../../Card/BackCardWrapper";
import Link from "../../Utils/Link"

const ThisWebsite = ({filename}) => {
  return (
    <BackCardWrapper filename={filename}>
      <div className="text">
        <h1>This Website</h1>
        <p>Take a look around!</p>
        <p>This website began development as I approached the end of my software development internship at Ally. Prior to
           that internship, I had never touched web development, but had always liked the idea of putting together a
           portfolio site where I could not only more interestingly present my past work, but also have a space for
           potential experiments, web applications, and blog posts.</p>
        <p>Once I gained the skills I found necessary to get this project up-and-running, I immediately got to work!
           This site is very much still under construction as I alter and refine the overall design, implement new features
           and animations, and create new content!</p>
        <p>This site is built using JavaScript, React, Framer Motion, and Material UI.</p>
        <p>You can access the source code to this site <Link url={"https://github.com/OxxoCodes/personal-website"} text={"here"}/>.</p>
      </div>
      <div className="image" />
    </BackCardWrapper>
  )
}

export default React.memo(ThisWebsite)
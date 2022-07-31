import React from "react"
import {motion} from "framer-motion"
import CardWrapper from "./CardWrapper";

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 35 };


const Card = ({header, body, image}) => {
  const [clicked, setClicked] = React.useState(false)

  let variants = {
    closed: {width:'300px', height:'500px', position:'relative', display:'block'},
    open: {width:'calc(100vw - 80px)', height:'calc(100vh - 80px)', top:'0', left:'0',
           margin:'40px', position:'fixed', zIndex:'2', overflow:'hidden'}
  }

  return (
    <CardWrapper filename={image}>
      <motion.div className="card" whileHover={{scale:1.01}}
                  animate={clicked ? 'open' : 'closed'}
                  variants={variants}
                  layoutTransition={clicked ? openSpring : closeSpring}
                  onClick={() => setClicked(true)}>
        <div className="card-front-text">
          <h1 className="card-header">{header}</h1>
          <p className="card-body">{body}</p>
        </div>
      </motion.div>
      {clicked && <div style={{position:'fixed', zIndex:'1', top:'0', left:'0', width:'100vw', height:'100vh'}} onClick={()=>setClicked(false)}/>}
    </CardWrapper>
  )
}

export default Card;
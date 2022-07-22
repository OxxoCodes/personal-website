import React from "react"
import {motion} from "framer-motion"
import CardWrapper from "./CardWrapper";

const Card = ({header, body, image}) => {
  const [flipped, setFlipped] = React.useState(false)

  let variants = {
    notFlipped: {rotateY:0, transition: {duration:0.5}},
    flipped: {rotateY:180, transition: {duration:0.5}}
  }

  return (
    <CardWrapper filename={image}>
      <motion.div className="card" whileHover={{scale:1.01}}
                  animate={flipped ? 'flipped' : 'notFlipped'}
                  variants={variants}
                  onClick={() => setFlipped(!flipped)}>
        <div style={{position:"absolute", bottom:0}}>
          <h1>{header}</h1>
          <p>{body}</p>
        </div>
      </motion.div>
    </CardWrapper>
  )
}

export default Card;
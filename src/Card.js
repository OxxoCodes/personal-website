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
        <div className="card-front-text">
          <h1 className="card-header">{header}</h1>
          <p className="card-body">{body}</p>
        </div>
      </motion.div>
    </CardWrapper>
  )
}

export default Card;
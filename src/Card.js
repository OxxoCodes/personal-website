import React from "react"
import {motion} from "framer-motion"

import "./Card.css"

const Card = ({header, body}) => {
  const [flipped, setFlipped] = React.useState(false)

  let variants = {
    notFlipped: {rotateY:0, transition: {duration:0.5}},
    flipped: {rotateY:180, transition: {duration:0.5}}
  }

  // let animationProps = {
  //   initial: { rotateY: 180 },
  //   animate: { rotateY: 170, transition: { duration: 3 } },
  //   exit: { rotateY: 170, transition: { duration: 3 } }
  // };

  return (
    <motion.div className="card" whileHover={{scale:1.01}}
                animate={flipped ? 'flipped' : 'notFlipped'}
                variants={variants}
                onClick={() => setFlipped(!flipped)}>
      <h1>{header}</h1>
      <p>{body}</p>
    </motion.div>
  )
}

export default Card;
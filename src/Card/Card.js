import React from "react"
import {motion} from "framer-motion"
import CardWrapper from "./CardWrapper";

const Card = ({header, previewBody, body, image, cid}) => {
  const [opened, setOpened] = React.useState(0)

  let variants = {
    "0": {position:'fixed', top:'10vh', left: '100vw', width:'90vw', height:'80vh', zIndex: 2},
    "1": {position:'fixed', top:'10vh', left: '5vw', width:'90vw', height:'80vh', zIndex: 2},
  }

  const overlayVariants = {
    "0": {opacity:0},
    "1": {opacity:0.6},
    "2": {opacity:0}
  }

  return (
    <CardWrapper filename={image}>
      <div className={`card-bounds ${cid}`}>
        <motion.div className="card-front"
                    whileHover={{scale: 1.01}}
                    onClick={() => {
                      if (!opened) {
                        setOpened(1)
                      }
                    }}>
          <div className="card-front-text">
            <h1 className="card-header">{header}</h1>
            <p>{previewBody}</p>
          </div>
        </motion.div>
        <motion.div className="card-back"
                    initial={false}
                    animate={opened.toString()}
                    variants={variants}
                    transition={{ease:'easeInOut'}}>
          {opened > 0 && body}
        </motion.div>
        <motion.div className="card-back-overlay"
          style={{position: 'fixed', top: opened>0 ? 0 : '100vh', left: opened>0 ? 0 : '100vw'}}
          initial={false}
          animate={opened.toString()}
          variants={overlayVariants}
          transition={{ease:'easeInOut'}}
          onClick={() => setOpened(0)} />
      </div>
    </CardWrapper>
  )
}

export default React.memo(Card);
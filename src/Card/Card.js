import React from "react"
import {motion} from "framer-motion"
import CardWrapper from "./CardWrapper";

const CardOverlay = ({clicked, setClicked}) => {
  let variants = {
    "0": {opacity: 0},
    "1": {opacity: 0.6},
    "2": {opacity: 0}
  }

  return (
    <motion.div className={"card-overlay"}
                style={{position:'fixed', top:0, left:0,
                        width:'100vw', height:'100vh',
                        zIndex:1, backgroundColor:'#000000', opacity:'0'}}
                onClick={() => setClicked(2)}
                animate={clicked.toString()}
                variants={variants}
                transition={{ease:'easeInOut'}}>
    </motion.div>
  )
}

const Card = ({header, previewBody, body, image, cid}) => {
  const [clicked, setClicked] = React.useState(0)
  // const parentElem = document.querySelector(`card-bounds ${cid}`).getBoundingClientRect()
  // console.log(parentElem)

  let variants = {
    "0": {top:0, width:'300px', height:'500px', position:'relative', display:'block', backgroundImage: `url(/images/${image})`, backgroundSize:'cover'},
    "1": {position:'fixed', top:['50vh','10vh'], left: '5vw', width:'90vw', height:'80vh', zIndex: 2, backgroundImage: null},
    "2": {position:'fixed', top:'50vh', left: '5vw', width:'300px', height:'80vh', zIndex: 2, backgroundImage: null}
  }

  return (
    <CardWrapper filename={image}>
      <div className={`card-bounds ${cid}`}>
        <motion.div className="card" whileHover={{scale: 1.01}}
                    animate={clicked.toString()}
                    initial={false}
                    variants={variants}
                    transition={{ease:'easeInOut'}}
                    onClick={() => setClicked(1)}
                    onAnimationComplete={() => {
                      if (clicked === 2) {
                        setClicked(0)
                      }
                    }}
        >
          {clicked === 0 &&
            <div className="card-front-text">
              <h1 className="card-header">{header}</h1>
              <p>{previewBody}</p>
            </div>}
          {clicked === 1 &&
            <div className="card-back">
              {body}
            </div>
          }
        </motion.div>
      </div>
      {clicked > 0 && <CardOverlay clicked={clicked} setClicked={setClicked}/>}
    </CardWrapper>
  )
}

export default Card;
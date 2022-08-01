import React from "react"
import {motion} from "framer-motion"
import CardWrapper from "./CardWrapper";


const Card = ({header, previewBody, body, image, cid}) => {
  const [clicked, setClicked] = React.useState(0)
  // const parentElem = document.querySelector(`card-bounds ${cid}`).getBoundingClientRect()
  // console.log(parentElem)

  let variants = {
    0: {top:0, width:'300px', height:'500px', position:'relative', display:'block', backgroundImage: `url(/images/${image})`, backgroundSize:'cover'},
    1: {position:'fixed', top:['50vh','10vh'], left: '5vw', width:'90vw', height:'80vh', zIndex: 2, backgroundImage: null},
    2: {position:'fixed', top:'50vh', left: '5vw', width:'300px', height:'80vh', zIndex: 2, backgroundImage: null}
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
                      console.log("Animation over")
                      console.log(clicked)
                      if (clicked === 2) {
                        console.log("Here")
                        setClicked(0)
                      }
                    }}
        >
          <div className="card-front-text">
            <h1 className="card-header">{header}</h1>
            {clicked === 0 && <p>{previewBody}</p>}
            {clicked === 1 && <p>{body}</p>}
          </div>
        </motion.div>
      </div>
      {clicked === 1 && <div style={{position:'fixed', zIndex:'1', top:'0', left:'0', width:'100vw', height:'100vh', backgroundColor:'#000000', opacity:'0.6'}} onClick={()=>setClicked(2)}/>}
    </CardWrapper>
  )
}

export default Card;
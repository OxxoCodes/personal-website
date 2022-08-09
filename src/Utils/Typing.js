import React, {useEffect} from "react";
import "./Typing.css"
import {Paper} from "@mui/material";

const Typing = (props) => {
  const [counter, setCounter] = React.useState(0);
  // const [curText, setCurText] = React.useState("")
  let curText = props.text[counter];

  useEffect(() => {
    const interval = setInterval(() => setCounter(counter => counter + 1 >= props.text.length ? 0 : counter + 1), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.text.length]);

  return (
    <Paper sx={{backgroundColor:"#1A1B23", padding:"10px 10px 10px 20px", width:"500px",
                display:'flex', justifyContent:'center', alignItems:'center'}}>
      <h1 style={{margin:0}} className="typing">{`> ${curText}`}</h1>;
    </Paper>
  )
};

export default React.memo(Typing);
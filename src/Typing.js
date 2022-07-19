import React, {useEffect} from "react";
import "./Typing.css"

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

  return <h1 className="typing">{`> ${curText}`}</h1>;
};

export default Typing;
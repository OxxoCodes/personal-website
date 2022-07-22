import styled from "styled-components"

const CardWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 500px;
    border-radius: 20px;
    background-color: #232323;
    color: white;
    padding: 20px;
    margin: 15px;
    text-align: left;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
    background-image: url(${props => "/images/"+props.filename});
    background-size: cover;
  }
`

export default CardWrapper;
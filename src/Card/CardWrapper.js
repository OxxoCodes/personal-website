import styled from "styled-components"

const CardWrapper = styled.div`
  .card {
    // position: relative;
    //width: 300px;
    //height: 500px;
    border-radius: 20px;
    background-color: #232323;
    color: white;
    text-align: left;
  }
  
  .card-bounds {
    width: 300px;
    height: 500px;
    border-radius: 20px;
    margin: 15px;
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
  }
  
  .card-front-text {
    padding-top: 1px;
    padding-left: 10px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .card-header {
    font-size: 20pt;
    margin: 10px 0 0 0;
  }
  .card-body {
    margin: 10px 0 0 0;
  }
  
  .card-back {
    z-index: 1;
    padding-left: 20px;
    background-color: #232323;
    border-radius: 20px;
  }
  .card-front {
    position: relative;
    top: 0;
    width: 300px;
    height: 500px;
    border-radius: 20px;
    background-image: ${props => `url(/images/${props.filename})`};
    background-size: cover;
  }
  
  .card-back-overlay {
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
  }

`

export default CardWrapper;
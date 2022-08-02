import styled from "styled-components"

export const HydrogenWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  .text {
    width: 60%;
    height: 100%;
    margin-right: 20px;
    overflow: scroll;
  }
  
  .image {
    width: 40%;
    height: 100%;
    background-image: url(${props => "/images/"+props.filename});
    background-size: cover;
  }
`
import styled from "styled-components"

const BackCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .text {
    width: 60%;
    height: 100%;
    margin-right: 20px;
    overflow: hidden;
  }

  .image {
    width: 40%;
    height: 100%;
    background-image: url(${props => "/images/"+props.filename});
    background-size: cover;
    border-radius: 0 20px 20px 0;
  }
`

export default BackCardWrapper;
import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommend from "./Recommend";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommend />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  background: url("images/home-background.png") no-repeat;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 3px);

  &:after {
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

import React from "react";
import Header from "./Header";
import Opacity from "./Opacity";
import CarDetail from "../components/segments/CarDetail";
import styled from "styled-components";
import Cybertruck_BackgroundPic from "../img/Cybertruck_BackgroundPic.jpg";
import Cybertruck_Mobile_BackgroundPic from "../img/Cybertruck_Mobile_BackgroundPic.jpg";
import LearnMore from "./segments/LearnMore";

const Cybertruck = () => {
  return (
    <div className="page">
      <Opacity />
      <CybertruckContainer>
        <HeaderContainer className="sexy">
          <Header />
        </HeaderContainer>
        <LearnMore
          text="Better utility than a truck with more performance than a sports car"
          whiteColor
        />
      </CybertruckContainer>
      <CarDetail />
    </div>
  );
};

export default Cybertruck;

const HeaderContainer = styled.div``;

const CybertruckContainer = styled.div`
  background-repeat: no-repeat fixed;
  background-color: black;
  background-position: center;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  background-size: cover;
  z-index: 3;
  text-align: center;
  display: flex;
  justify-content: center;
  background-image: url(${Cybertruck_BackgroundPic});

  @media (max-width: 767px) {
    background-image: url(${Cybertruck_Mobile_BackgroundPic});
  }
`;

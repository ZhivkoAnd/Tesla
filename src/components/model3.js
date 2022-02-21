import React from "react";
import Header from "./Header";
import Opacity from "./Opacity";
import CarTitle from "../components/segments/CarTitle";
import CarInformation from "../components/segments/CarInformation";
import CarDetail from "../components/segments/CarDetail";
import styled from "styled-components";
import CarDetailPicture from "./segments/CarDetailPicture";
import insidePic from "../img/inside2.jpg";
import model3_BackgroundPic from "../img/model3_BackgroundPic.jpg";
import model3_Mobile_BackgroundPic from "../img/model3_Mobile_BackgroundPic.jpg";
import Footer from "./Footer";

const model3 = () => {
  return (
    <div className="page">
      <Opacity />
      <Model3>
        <HeaderContainer className="sexy">
          <Header />
        </HeaderContainer>

        <CarTitle
          model_name="MODEL"
          model_sign="3"
          text_1="Order Online for "
          text_2="Touchless Delivery"
        />
        <CarInformation
          whiteColor
          title_1="3.1 s"
          title_2="353 mi"
          title_3="AWD"
          subTitle_1="0-60 mph"
          subTitle_2="Range"
          subTitle_3="Dual motor"
        ></CarInformation>
      </Model3>
      <CarDetail
        smallheading="Performance"
        bigheading="Quickest Acceleration"
        text="Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds."
      />
      <CarDetailPicture
        heading="Stay Connected"
        text="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
        picture={insidePic}
      />
      <Footer />
    </div>
  );
};

export default model3;

const HeaderContainer = styled.div`
  .icon2 {
    color: white;
    text-shadow: 2px 2px 3px rgb(255 255 255 / 20%);
  }

  .inner2 {
    border: 3px solid white;
    box-shadow: 0px 0px 3px 0px rgb(255 255 255);
  }
`;

const Model3 = styled.div`
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
  background-image: url(${model3_BackgroundPic});

  @media (max-width: 767px) {
    background-image: url(${model3_Mobile_BackgroundPic});
  }
`;

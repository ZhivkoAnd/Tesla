import React from "react";
import Header from "./Header";
import Opacity from "./Opacity";
import Tabs from "./segments/Tabs";
import Footer from "./Footer";
import styled from "styled-components";
import SupportImage from "../img/owners.jpg";

const Support = () => {
  return (
    <div className="page">
      <Opacity />
      <div className="sexy">
        <Header />
      </div>
      <SupportContainer>
        <img src={SupportImage} class="image" />
      </SupportContainer>
      <div className="container tab-content">
        <Tabs />
      </div>
      <Footer style={{ position: "relative" }} />
    </div>
  );
};

export default Support;

const SupportContainer = styled.div`
  .image {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    height: 180px;
    width: 100%;
  }
`;

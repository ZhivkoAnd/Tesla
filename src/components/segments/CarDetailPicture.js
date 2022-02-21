import React from "react";
import styled from "styled-components";

const CarDetailPicture = ({ heading, text, picture }) => {
  return (
    <CarDetailContainer>
      <div className="carDetailsInfoPicture" id="goDown">
        <img src={picture} className="image"></img>
        <div className="textarea container">
          <h3 className="heading">{heading}</h3>
          <p className="text">{text}</p>
        </div>
      </div>
    </CarDetailContainer>
  );
};

export default CarDetailPicture;

const CarDetailContainer = styled.div`
  background-color: white;

  .image {
    width: 100vw;
  }

  .heading {
    margin-bottom: 20px;
  }

  .textarea {
    padding: 20px;
  }
  .text {
    margin-bottom: 0rem;
  }
`;
